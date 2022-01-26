package main

import (
	"code.rocketnine.space/tslocum/cview"
	"context"
	"crypto/tls"
	"encoding/json"
	"flag"
	"fmt"
	"github.com/gdamore/tcell/v2"
	"github.com/gooseai/interfaces/gooseai/completion"
	"github.com/mazznoer/colorgrad"
	gpt_bpe "github.com/wbrown/novelai-research-tool/gpt-bpe"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/metadata"
	"io"
	"log"
	"math"
	"os"
	"strconv"
	"strings"
	"sync"
	"time"
	"unicode"
)

var unitrim []int

var grad colorgrad.Gradient
var zero = 0
var EchoTrue = &zero
var EchoFalse *int

type tokenAuth struct {
	token string
}

// Return value is mapped to request headers.
func (t tokenAuth) GetRequestMetadata(ctx context.Context,
	in ...string) (map[string]string, error) {
	return map[string]string{
		"authorization": "Bearer " + t.token,
	}, nil
}

func (tokenAuth) RequireTransportSecurity() bool {
	return true
}

type Fragment struct {
	text    string
	buffer  string
	chosen  *completion.LogProb
	choices []*completion.LogProb
}

type GenerationParams struct {
	Model            string
	Temperature      float64
	OutputLength     uint32
	PresencePenalty  float64
	FrequencyPenalty float64
	LogProbs         uint32
	TopP             float64
	TopK             uint32
	TFS              float64
	Auth             string
}

// TOKEN: pk-2vTKbgcZYjCk8LhghuIpSVDN39dXgsSBzValgbOD7fkfn3WB

func (genParams *GenerationParams) buildRequest(prompt string,
	echo *int) *completion.Request {
	tokens := gpt_bpe.Encoder.Encode(&prompt)
	numTokensPrompt := len(*tokens)

	maxTokens := genParams.OutputLength + uint32(numTokensPrompt)
	if maxTokens > 2048 {
		maxTokens = 2048
	}

	completions := uint32(1)

	var echoParam *completion.Echo
	if echo != nil {
		echoVal := int32(*echo)
		echoParam = &completion.Echo{
			Index: &echoVal,
		}
	}

	return &completion.Request{
		EngineId: genParams.Model,
		Prompt: []*completion.Prompt{
			{Prompt: &completion.Prompt_Text{
				Text: prompt,
			}}},
		ModelParams: &completion.ModelParams{
			SamplingParams: &completion.SamplingParams{
				Order:            nil,
				Temperature:      &genParams.Temperature,
				TopP:             &genParams.TopP,
				TopK:             &genParams.TopK,
				TailFreeSampling: &genParams.TFS,
			},
			FrequencyParams: &completion.FrequencyParams{
				PresencePenalty:  &genParams.PresencePenalty,
				FrequencyPenalty: &genParams.FrequencyPenalty,
			},
			LogitBias: nil,
		},
		EngineParams: &completion.EngineParams{
			MaxTokens:   &maxTokens,
			Completions: &completions,
			Logprobs:    &genParams.LogProbs,
			Echo:        echoParam,
		},
	}
}

func colorizeToken(logprob *completion.LogProb, gradient colorgrad.Gradient) string {
	tokenStr := ""
	if logprob.Token != nil {
		tokenStr = logprob.GetToken().Text
	}
	if logprob.Logprob == nil {
		return tokenStr
	} else {
		prob := 1.0 - math.Exp(*logprob.Logprob)
		return fmt.Sprintf("[%s]%s[white]", gradient.At(prob).Hex(),
			tokenStr)
	}
}

func colorizeIndexedLogprob(tokenIdx uint32,
	logProb *completion.LogProb) string {
	return fmt.Sprintf("[\"%d\"]%s[\"\"]",
		tokenIdx,
		colorizeToken(logProb, grad))
}

func getLogProbStr(logprob *completion.LogProb) string {
	tokenStr := logprob.GetToken().Text
	if logprob.Logprob == nil {
		return fmt.Sprintf("|%s (nil)", tokenStr)
	} else {
		percentProb := math.Exp(*logprob.Logprob) * float64(100.0)
		return fmt.Sprintf("|%s (%.3f%%)", tokenStr, percentProb)
	}
}

func getPercentViewStr(logprob *completion.LogProb) string {
	left := ""
	right := ""
	if logprob.LogprobBefore != nil {
		prob := 1.0 - math.Exp(*logprob.LogprobBefore)
		left = fmt.Sprintf("[%s]%-6.2f[white]", grad.At(prob).Hex(),
			math.Exp(*logprob.LogprobBefore)*100)
	}
	if logprob.Logprob != nil {
		prob := 1.0 - math.Exp(*logprob.Logprob)
		right = fmt.Sprintf("[%s]%-6.2f[white]", grad.At(prob).Hex(),
			math.Exp(*logprob.Logprob)*100)
	}
	colorized := strings.Replace(colorizeToken(logprob, grad), "\n",
		"\\n", -1)
	return fmt.Sprintf("%-6s %-6s %-10s",
		left,
		right,
		colorized)
}

func getTokenViewStr(tokenIdx int, logprob *completion.LogProb) string {
	return fmt.Sprintf("[\"%d\"]%s[\"\"]\n",
		tokenIdx,
		getPercentViewStr(logprob))
}

type IndexedFragments []*Fragment

func (fragments IndexedFragments) getModifiedIdx() int {
	for idx := range fragments {
		fragment := fragments[idx]
		if fragment.chosen == nil {
			return idx
		}
	}
	return -1
}

/*
def send_ready(tokens):
    n_tokens = len(tokens)
    good = 0
    need = 0
    for i in range(n_tokens):
        req = unicode_req[tokens[i]]
        if not (need + req < 0):
            need += req
        if need == 0:
            good = i + 1
    return good == n_tokens
*/

// Determine if the sequence of Tokens given is ready to be serialized
// to string.
func tokensReady(tokens gpt_bpe.Tokens) bool {
	good := 0
	need := 0
	for tokenIdx := range tokens {
		req := unitrim[tokens[tokenIdx]]
		if !(need+req < 0) {
			need += req
		}
		if need == 0 {
			good = tokenIdx + 1
		}
	}
	return good == len(tokens)
}

// Given a sequence of Fragments, build the string serialization of the tokens
// correctly decoding multi-byte runes, colorized for token probabilities
// with hyperlink references to the token view.
func (fragments IndexedFragments) getStringsUntil(until int) (
	colorized string, plain string) {
	var colorizedBuf strings.Builder
	var plainBuf strings.Builder
	// Token accumulator.
	accTokens := make(gpt_bpe.Tokens, 0)
	firstLogprob := 0.0
	// Handle multi-token runes.
	handleFragment := func(fragment *Fragment) (logprob completion.LogProb) {
		if fragment.chosen == nil {
			logprob.Token = &completion.Token{
				Text: fragment.text,
			}
			return logprob
		}
		accTokens = append(accTokens, gpt_bpe.Token(fragment.chosen.Token.Id))
		if len(accTokens) == 1 && fragment.chosen.Logprob != nil {
			firstLogprob = *fragment.chosen.Logprob
		}
		if tokensReady(accTokens) {
			decoded := gpt_bpe.Encoder.Decode(&accTokens)
			logprob.Token = &completion.Token{
				Text: decoded,
			}
			logprob.Logprob = &firstLogprob
			accTokens = make(gpt_bpe.Tokens, 0)
		} else {
			logprob.Token = &completion.Token{
				Text: "",
			}
			logprob.Logprob = &firstLogprob
		}
		return logprob
	}
	// Iterate over the sequence of fragments.
	for idx := range fragments {
		fragment := fragments[idx]
		logProb := handleFragment(fragment)
		colorizedBuf.WriteString(
			fmt.Sprintf("[\"%d\"]%s[\"\"]",
				idx,
				colorizeToken(&logProb, grad)))
		plainBuf.WriteString(fmt.Sprintf("%s", logProb.Token.Text))
		if idx == until {
			break
		}
	}
	return colorizedBuf.String(), plainBuf.String()
}

func (fragments IndexedFragments) getPlainUntil(until int) string {
	_, plain := fragments.getStringsUntil(until)
	return plain
}

func (fragments IndexedFragments) getBufferUntil(until int) string {
	colorized, _ := fragments.getStringsUntil(until)
	return colorized
}

func hasToken(logprobs []*completion.LogProb,
	testLogprob *completion.LogProb) bool {
	for idx := range logprobs {
		if logprobs[idx].Token.Id == testLogprob.Token.Id {
			return true
		}
	}
	return false
}

type TUIApp struct {
	App            *cview.Application
	BackendRequest func(*completion.Request, bool)
	TextView       *cview.TextView
	StatusView     *cview.TextView
	Run            func()
}

func newGenerationParametersView(params *GenerationParams) *cview.Form {

	paramsView := cview.NewForm()
	paramsView.SetTitle("Parameters")
	paramsView.SetBorder(true)

	addIntField := func(label string, valuePtr *uint32) {
		paramsView.AddInputField(
			label,
			strconv.Itoa(int(*valuePtr)),
			20,
			func(input string, lastChar rune) bool {
				if unicode.IsNumber(lastChar) {
					return true
				}
				return false
			},
			func(input string) {
				atoi, _ := strconv.ParseInt(input, 0, 8)
				*valuePtr = uint32(atoi)
			})
	}

	addFloatField := func(label string, valuePtr *float64) {
		paramsView.AddInputField(
			label,
			fmt.Sprintf("%0.2f", *valuePtr),
			20,
			func(input string, lastChar rune) bool {
				if unicode.IsNumber(lastChar) {
					return true
				} else if lastChar == '.' &&
					strings.Count(input, ".") < 2 {
					return true
				}
				return false
			},
			func(input string) {
				ftoi, _ := strconv.ParseFloat(input, 0)
				*valuePtr = ftoi
			})
	}

	addStringField := func(label string, valuePtr *string) {
		paramsView.AddInputField(
			label,
			fmt.Sprintf("%s", *valuePtr),
			20,
			func(input string, lastChar rune) bool {
				if len(input) > 8 || !unicode.IsLetter(
					lastChar) && !unicode.IsDigit(lastChar) {
					return false
				}
				return true
			},
			func(input string) {
				*valuePtr = input
			})
	}

	addStringField("Model", &params.Model)
	addFloatField("Temperature", &params.Temperature)
	addIntField("Output Length", &params.OutputLength)
	addFloatField("Presence Penalty", &params.PresencePenalty)
	addFloatField("Frequency Penalty", &params.FrequencyPenalty)
	addIntField("Top N LogProbs", &params.LogProbs)
	addFloatField("Nucleus (Top-P)", &params.TopP)
	addIntField("Top-K", &params.TopK)
	addFloatField("TFS", &params.TFS)

	return paramsView
}

func TUI(ctx *context.Context, indexedFragments *IndexedFragments,
	genSettings *GenerationParams,
	client *completion.CompletionServiceClient) TUIApp {
	// view stuff
	app := cview.NewApplication()
	defer app.HandlePanic()

	app.EnableMouse(true)

	textView := cview.NewTextView()
	textView.SetDynamicColors(true)
	textView.SetRegions(true)
	textView.SetWordWrap(true)
	textView.SetTitle("Story")
	textView.SetChangedFunc(func() {
		//app.Draw()
	})

	tokenView := cview.NewTextView()
	tokenView.SetDynamicColors(true)
	tokenView.SetRegions(true)
	tokenView.SetWordWrap(true)
	tokenView.SetTitle("Tokens")
	tokenView.SetChangedFunc(func() {
		//app.Draw()
	})

	statusView := cview.NewTextView()
	statusView.SetDynamicColors(true)
	statusView.SetWordWrap(false)
	statusView.SetBorder(false)

	biasTable := cview.NewTable()
	biasHeader := cview.NewTableCell("Bias    ")
	biasHeader.SetMaxWidth(10)
	biasHeader.SetAlign(cview.AlignCenter)
	logitHeader := cview.NewTableCell("Logits           ")
	logitHeader.SetMaxWidth(20)
	logitHeader.SetAlign(cview.AlignCenter)
	biasTable.SetTitle("Logit Biases")
	biasTable.SetBorders(true)
	biasTable.SetCell(0, 0, biasHeader)
	biasTable.SetCell(0, 1, logitHeader)
	biasTable.SetCellSimple(1, 0, "-0.3")
	biasTable.SetCellSimple(1, 1, " witch")
	biasTable.SetFixed(1, 2)

	paramsView := newGenerationParametersView(genSettings)

	toolsPane := cview.NewFlex()
	toolsPane.SetDirection(cview.FlexRow)
	toolsPane.AddItem(paramsView, 0, 1, false)
	toolsPane.AddItem(biasTable, 0, 1, false)

	mainPanes := cview.NewFlex()
	mainPanes.AddItem(tokenView, 30, 1, false)
	mainPanes.AddItem(textView, 0, 1, true)
	mainPanes.AddItem(toolsPane, 28, 1, false)

	screenPane := cview.NewFlex()
	screenPane.SetDirection(cview.FlexRow)
	screenPane.AddItem(mainPanes, 0, 1, true)
	screenPane.AddItem(statusView, 1, 1, false)

	focusManager := cview.NewFocusManager(func(p cview.Primitive) {})
	focusManager.Add(tokenView, textView)

	grad = colorgrad.RdBu()

	viewedTokenIdx := 0
	//numSelections := 0

	updateTokenView := func(tokenIdx int) {
		tokenView.Clear()
		tokenView.Highlight()
		if tokenIdx > len(*indexedFragments)-1 {
			return
		}
		if (*indexedFragments)[tokenIdx].chosen != nil {
			fmt.Fprintf(tokenView,
				"%s\n---------------------------\n",
				getPercentViewStr((*indexedFragments)[tokenIdx].chosen))
		} else {
			fmt.Fprintf(tokenView,
				"%-6s %-6s %-10s\n---------------------------\n",
				"", (*indexedFragments)[tokenIdx].text)
		}

		choicesList := (*indexedFragments)[tokenIdx].choices
		if choicesList != nil {
			for choicesIdx := range choicesList {
				logProb := choicesList[choicesIdx]
				if logProb.Logprob != nil {
					fmt.Fprint(tokenView,
						fmt.Sprintf("[\"%d\"]%s[\"\"]\n",
							choicesIdx,
							getPercentViewStr(logProb)))
				}
			}
		}
		viewedTokenIdx = tokenIdx
	}

	bufferState := ""
	storyText := ""
	tokenCt := 0
	receiving := true
	// subPos := 0

	debounce := time.NewTimer(100 * time.Millisecond)
	drawAppView := func(tokenCt int) {
		select {
		case <-debounce.C:
			updateTokenView(tokenCt)
			app.Draw()
			debounce = time.NewTimer(250 * time.Millisecond)
		default:
		}
	}

	backendRequest := func(rq *completion.Request, showProgress bool) {
		receiving = true
		rqBegin := time.Now()
		stream, rqErr := (*client).Completion(*ctx, rq)
		if rqErr != nil {
			receiving = false
			statusView.SetText(fmt.Sprintf("%v", rqErr))
		}

		totalTokens := 0

		start := time.Now()
		first := start
		for {
			answer, err := stream.Recv()
			if start == first {
				first = time.Now()
			}

			if err == io.EOF {
				break
			}
			if err != nil {
				statusView.SetText(fmt.Sprintf("%v", rqErr))
				receiving = false
				break
			}
			logprobs := answer.Choices[0].GetLogprobs()
			totalTokens += len(logprobs.Tokens.GetLogprobs())

			tokens := logprobs.GetTokens()
			topN := logprobs.GetTop()
			topNBefore := logprobs.GetTopBefore()
			for tokenIdx := range tokens.Logprobs {
				choices := topN[tokenIdx].Logprobs[:]
				choicesSz := len(choices)
				if uint32(choicesSz) < genSettings.LogProbs &&
					topNBefore != nil {
					if topNBefore[tokenIdx] != nil {
						for beforeTknIdx := range topNBefore[tokenIdx].Logprobs {
							beforeTkn := topNBefore[tokenIdx].Logprobs[beforeTknIdx]
							if !hasToken(choices, beforeTkn) {
								choices = append(choices, beforeTkn)
							}
						}
					}
				}

				fragment := &Fragment{
					text: tokens.Logprobs[tokenIdx].Token.Text,
					buffer: colorizeToken(tokens.Logprobs[tokenIdx],
						grad),
					chosen:  tokens.Logprobs[tokenIdx],
					choices: choices,
				}
				if len(*indexedFragments) > tokenCt {
					(*indexedFragments)[tokenCt] = fragment
				} else {
					*indexedFragments = append(*indexedFragments, fragment)
				}

				/* if appended {
					tokenRepr := fmt.Sprintf("[\"%d\"]%s[\"\"]", tokenCt,
						fragment.buffer)
					bufferState += tokenRepr
					// textView.SetText(bufferState)
					//fmt.Fprint(textView, tokenRepr)
				} /* else {
					textView.SetText(indexedFragments.getBufferUntil(
						len(indexedFragments)))
				} */
				// textView.Highlight(strconv.Itoa(tokenCt))
				//updateTokenView(tokenCt)
				tokenCt += 1
				//app.Draw()
			}
			if showProgress {
				textView.Highlight()
				textView.Highlight(strconv.Itoa(tokenCt - 1))
				textView.SetText(indexedFragments.getBufferUntil(
					len(*indexedFragments)))
				drawAppView(tokenCt - 1)
			}
		}
		duration := time.Now().Sub(start)
		tokensPerSecond := float64(totalTokens) /
			float64(duration.Milliseconds()) * 1000
		firstResp := first.Sub(rqBegin).Milliseconds()
		statusView.SetText(fmt.Sprintf(
			"%d ms for %d tokens (%0.2f tokens/s), %d ms to first token",
			duration.Milliseconds(), totalTokens, tokensPerSecond, firstResp))
		*indexedFragments = (*indexedFragments)[:tokenCt]
		textView.SetText(indexedFragments.getBufferUntil(len(
			*indexedFragments)))
		textView.Highlight()
		textView.Highlight(strconv.Itoa(tokenCt - 1))
		textView.ScrollToHighlight()
		updateTokenView(tokenCt - 1)
		app.Draw()
		receiving = false
	}

	var priorSelection string

	tokenSelectAction := func(action cview.MouseAction,
		event *tcell.EventMouse) (cview.MouseAction, *tcell.EventMouse) {
		if receiving {
			return action, event
		}
		if action == cview.MouseLeftClick && tokenView.HasFocus() {
			// x, y := event.Position()
			currentSelection := tokenView.GetHighlights()
			if currentSelection == nil {
				return action, event
			}
			index, _ := strconv.Atoi(currentSelection[0])
			tokenList := (*indexedFragments)[viewedTokenIdx].choices
			selectedToken := tokenList[index]
			(*indexedFragments)[viewedTokenIdx].chosen = selectedToken
			(*indexedFragments)[viewedTokenIdx].text = selectedToken.Token.Text
			(*indexedFragments)[viewedTokenIdx].buffer =
				colorizeIndexedLogprob(uint32(viewedTokenIdx), selectedToken)

			bufferState = indexedFragments.getBufferUntil(viewedTokenIdx)
			storyText = indexedFragments.getPlainUntil(viewedTokenIdx)
			textView.SetText(bufferState)
			app.Draw()
			tokenCt = viewedTokenIdx + 1
			go backendRequest(genSettings.buildRequest(storyText, EchoFalse),
				true)
		}
		return action, event
	}

	tokenMouseAction := func(action cview.MouseAction,
		event *tcell.EventMouse) (cview.MouseAction, *tcell.EventMouse) {
		if !receiving {
			app.QueueUpdateDraw(func() {
				currentSelection := textView.GetHighlights()
				if priorSelection != currentSelection[0] {
					currTokenIdx, _ := strconv.Atoi(currentSelection[0])
					updateTokenView(currTokenIdx)
					priorSelection = currentSelection[0]
				}
			})
		}
		return action, event
	}

	textEditorAction := func(event *tcell.EventKey) *tcell.EventKey {
		inputRune := event.Rune()
		currFragment := (*indexedFragments)[viewedTokenIdx]
		// ModAlt
		if event.Key() == tcell.KeyEnter && (event.Modifiers() == tcell.ModAlt ||
			event.Modifiers() == tcell.ModCtrl || event.Modifiers() == tcell.ModMeta) {
			bufferText, promptText := indexedFragments.getStringsUntil(
				viewedTokenIdx)
			echoIdx := indexedFragments.getModifiedIdx()
			echoParam := &echoIdx
			if echoIdx > viewedTokenIdx {
				echoIdx = viewedTokenIdx - 1
			}
			if echoIdx == len(*indexedFragments) || echoIdx < 0 {
				echoParam = nil
			} else {
				tokenCt = echoIdx
			}
			textView.SetText(bufferText)
			textView.Highlight(strconv.Itoa(viewedTokenIdx))
			textView.ScrollToHighlight()
			go backendRequest(genSettings.buildRequest(
				promptText, echoParam), true)
		}
		if event.Key() == tcell.KeyRune {
			if currFragment.chosen != nil {
				currFragment.chosen = nil
				currFragment.text = string(inputRune)
				currFragment.buffer = currFragment.text
			} else {
				currFragment.text += string(inputRune)
				currFragment.buffer = currFragment.text
			}
			textView.SetText(indexedFragments.getBufferUntil(
				len(*indexedFragments)))
			updateTokenView(viewedTokenIdx)
		}
		if event.Key() == tcell.KeyDEL {
			if currFragment.chosen != nil {
				currFragment.text = currFragment.text[:len(currFragment.text)-1]
				currFragment.chosen = nil
				currFragment.buffer = currFragment.text
			} else {
				currFragment.text = currFragment.text[:len(currFragment.text)-1]
				currFragment.buffer = currFragment.text
			}
			textView.SetText(indexedFragments.getBufferUntil(
				len(*indexedFragments)))
			updateTokenView(viewedTokenIdx)
		}
		if event.Key() == tcell.KeyDelete {
			*indexedFragments = append((*indexedFragments)[:viewedTokenIdx],
				(*indexedFragments)[viewedTokenIdx+1:]...)
			textView.SetText(indexedFragments.getBufferUntil(
				len(*indexedFragments)))
			if viewedTokenIdx > len(*indexedFragments)-1 {
				viewedTokenIdx--
			}
			textView.Highlight(strconv.Itoa(viewedTokenIdx))
			updateTokenView(viewedTokenIdx)
		}

		return event
	}

	tokenView.SetMouseCapture(tokenSelectAction)
	textView.SetMouseCapture(tokenMouseAction)
	textView.SetInputCapture(textEditorAction)

	textView.SetDoneFunc(func(key tcell.Key) {
		currentSelection := textView.GetHighlights()
		if key == tcell.KeyEnter {
			focusManager.Focus(tokenView)
		} else if len(currentSelection) > 0 {
			index, _ := strconv.Atoi(currentSelection[0])
			if key == tcell.KeyTab {
				if index >= len(*indexedFragments)-1 {
					index = 0
				} else {
					index = index + 1
				}
			} else if key == tcell.KeyBacktab {
				index = index - 1
			} else {
				return
			}
			textView.Highlight(strconv.Itoa(index))
			textView.ScrollToHighlight()
			updateTokenView(index)
		}
		app.Draw()
	})

	tokenView.SetBorder(true)
	tokenView.SetVisible(true)
	textView.SetBorder(true)
	app.SetRoot(screenPane, true)

	return TUIApp{
		App:            app,
		BackendRequest: backendRequest,
		TextView:       textView,
		StatusView:     statusView,
		Run: func() {
			if err := app.Run(); err != nil {
				panic(err)
			}
		},
	}
}

func countTokens(ans *completion.Answer) int {
	choices := ans.GetChoices()
	total := 0
	for choiceIdx := range choices {
		choice := choices[choiceIdx]
		total += len(choice.Logprobs.Tokens.GetLogprobs())
	}
	return total
}

type IterationResult struct {
	msToFirst int64
	duration  int64
	numTokens int
}

func LoadTest(numThreads int64, genParams *GenerationParams,
	client *completion.CompletionServiceClient, prompt string) TUIApp {
	app := cview.NewApplication()
	defer app.HandlePanic()

	screenPane := cview.NewFlex()
	screenPane.SetDirection(cview.FlexRow)
	screenPane.SetBorder(true)
	app.SetRoot(screenPane, true)

	request := genParams.buildRequest(prompt, nil)

	statusView := cview.NewTextView()
	statusView.SetDynamicColors(true)
	statusView.SetWordWrap(false)
	statusView.SetBorder(false)
	screenPane.AddItem(statusView, 1, 1,
		false)

	debounce := time.NewTimer(100 * time.Millisecond)
	updateAppView := func() {
		select {
		case <-debounce.C:
			app.Draw()
			debounce = time.NewTimer(250 * time.Millisecond)
		default:
		}
	}

	backendRequest := func(ctx *context.Context, rq *completion.Request) (
		*IterationResult, error) {

		rqBegin := time.Now()
		stream, rqErr := (*client).Completion(*ctx, request)
		if rqErr != nil {
			return nil, rqErr
		}
		ctr := 0
		var streamBegin time.Time
		for {
			if answer, ansErr := stream.Recv(); ansErr != nil {
				streamEnd := time.Now()
				firstResp := streamBegin.Sub(rqBegin).Milliseconds()
				duration := streamEnd.Sub(rqBegin).Milliseconds()
				iterationResult := IterationResult{
					firstResp,
					duration,
					ctr,
				}
				return &iterationResult, ansErr
			} else {
				if ctr == 0 {
					streamBegin = time.Now()
				}
				ctr += countTokens(answer)
			}
		}
	}

	threadWorker := func(wg *sync.WaitGroup, ctx *context.Context) {
		workerView := cview.NewTextView()
		workerView.SetDynamicColors(true)
		workerView.SetWordWrap(false)
		workerView.SetBorder(false)
		screenPane.AddItem(workerView, 1, 1,
			false)
		iteration := 0
		for {
			result, err := backendRequest(ctx, request)
			if !strings.HasSuffix(err.Error(), "EOF") {
				workerView.SetText(fmt.Sprintf("%v", err))
				app.Draw()
				break
			}
			tokensPerSecond := float64(result.numTokens) / float64(
				result.duration) * 1000
			workerView.SetText(fmt.Sprintf("%d: %d ms for %d tokens ("+
				"%0.2f tokens/s), %d ms to first token",
				iteration, result.duration, result.numTokens,
				tokensPerSecond, result.msToFirst))

			updateAppView()
			iteration += 1
		}
		wg.Done()
	}

	ctx := metadata.NewOutgoingContext(
		context.Background(),
		metadata.Pairs("authorization", "bearer "+genParams.Auth),
	)

	run := func() {
		var wg sync.WaitGroup
		for idx := int64(0); idx < numThreads; idx++ {
			wg.Add(1)
			go threadWorker(&wg, &ctx)
		}
		if err := app.Run(); err != nil {
			panic(err)
		}
	}

	return TUIApp{
		App:        app,
		StatusView: statusView,
		Run:        run,
	}
}

func main() {
	// Load our unitrim
	unitrimJson, _ := ReadFile("unitrim.json")
	if json.Unmarshal(unitrimJson, &unitrim) != nil {
		log.Fatal("Error unmarshaling `unitrim.json`")
	}

	numThreads := flag.Int64("threads", 0, "number of test threads")
	flag.Parse()
	args := flag.Args()
	serverAddr := "localhost:8443"
	if len(args) == 1 {
		serverAddr = args[0]
	} else if len(args) > 2 {
		log.Fatal("Only takes one argument, `server:port`")
	}

	genSettings := GenerationParams{
		Model:            "gpt-neo-2-7b",
		Temperature:      2.5,
		OutputLength:     100,
		PresencePenalty:  0.5,
		FrequencyPenalty: 0.01,
		LogProbs:         30,
		TopP:             0,
		TopK:             300,
		TFS:              0.5,
		Auth:             os.Getenv("GOOSEAI_AUTH"),
	}

	var client completion.CompletionServiceClient
	indexedFragments := make(IndexedFragments, 0)

	prompt := "The beautiful and mercurial witch laughed"

	md := metadata.New(map[string]string{"bearer": genSettings.Auth})
	ctx := metadata.NewOutgoingContext(
		context.Background(),
		md)

	var app TUIApp
	if *numThreads == 0 {
		app = TUI(&ctx, &indexedFragments, &genSettings, &client)
	} else {
		app = LoadTest(*numThreads, &genSettings, &client, prompt)
	}
	var grpcOptions grpc.DialOption

	if strings.HasSuffix(serverAddr, ":443") {
		grpcOptions = grpc.WithTransportCredentials(
			credentials.NewTLS(&tls.Config{InsecureSkipVerify: true}))
	} else {
		grpcOptions = grpc.WithTransportCredentials(insecure.NewCredentials())
	}

	conn, grpcErr := grpc.Dial(serverAddr, grpcOptions)
	/* grpc.WithPerRPCCredentials(tokenAuth{
		token: genSettings.Auth,
	}), */

	if grpcErr != nil {
		app.StatusView.SetText(fmt.Sprintf("%v", grpcErr))
	}
	defer conn.Close()
	client = completion.NewCompletionServiceClient(conn)

	if *numThreads > 0 {
		if grpcErr != nil {
			panic(grpcErr)
		} else {
			app.Run()
			os.Exit(0)
		}
	} else if grpcErr == nil {
		rq := genSettings.buildRequest(prompt, EchoTrue)
		go app.BackendRequest(rq,
			true)
	} else {
		fragment := &Fragment{
			text:    prompt,
			buffer:  prompt,
			chosen:  nil,
			choices: nil,
		}
		indexedFragments = append(indexedFragments, fragment)
		app.TextView.Highlight()
		app.TextView.Highlight("0")
		app.TextView.SetText(indexedFragments.getBufferUntil(
			len(indexedFragments)))
		app.App.Draw()
	}
	app.Run()
}
