package main

import (
	"code.rocketnine.space/tslocum/cview"
	"context"
	"fmt"
	"github.com/NovelAI/infrastructure/anlatan/completion"
	"github.com/gdamore/tcell/v2"
	"github.com/mazznoer/colorgrad"
	"google.golang.org/grpc"
	"io"
	"log"
	"math"
	"strconv"
	"strings"
	"unicode"
)

var grad colorgrad.Gradient
var zero = 0
var EchoTrue = &zero
var EchoFalse *int

type Fragment struct {
	text    string
	buffer  string
	chosen  *completion.LogProb
	choices []*completion.LogProb
}

type GenerationParams struct {
	Temperature      float64
	OutputLength     uint32
	PresencePenalty  float64
	FrequencyPenalty float64
	LogProbs         uint32
	TopP             float64
	TopK             uint32
	TFS              float64
}

func (genParams *GenerationParams) buildRequest(prompt string, echo *int,
	numTokens int) *completion.Request {
	maxTokens := genParams.OutputLength + uint32(numTokens)
	completions := uint32(1)

	var echoParam *completion.Echo
	if echo != nil {
		echoVal := int32(*echo)
		echoParam = &completion.Echo{
			Index: &echoVal,
		}
	}

	return &completion.Request{
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
	tokenStr := logprob.GetToken().Text
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

func getPercentViewStr(logProb *completion.LogProb) string {
	if logProb.Logprob != nil {
		return fmt.Sprintf("%-5.2f %-10s",
			math.Exp(*logProb.Logprob)*100.0,
			colorizeToken(logProb, grad))
	} else {
		return fmt.Sprintf("%-5s %-10s",
			"", logProb.Token.Text)
	}
}

func getTokenViewStr(tokenIdx int, logProb *completion.LogProb) string {
	return fmt.Sprintf("[\"%d\"]%s[\"\"]\n",
		tokenIdx,
		getPercentViewStr(logProb))
}

type IndexedFragments []*Fragment

func (fragments IndexedFragments) getTextUntil(until int) string {
	var buf strings.Builder
	for idx := range fragments {
		fragment := fragments[idx]
		buf.WriteString(fragment.text)
		if idx == until {
			break
		}
	}
	return buf.String()
}

func (fragments IndexedFragments) getModifiedIdx() int {
	for idx := range fragments {
		fragment := fragments[idx]
		if fragment.chosen == nil {
			return idx
		}
	}
	return -1
}

func (fragments IndexedFragments) getBufferUntil(until int) string {
	var buf strings.Builder
	for idx := range fragments {
		fragment := fragments[idx]
		buf.WriteString(fmt.Sprintf("[\"%d\"]%s[\"\"]", idx,
			fragment.buffer))
		if idx == until {
			break
		}
	}
	return buf.String()
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

func main() {
	// GRPC stuff
	serverAddr := "localhost:50051"
	conn, err := grpc.Dial(serverAddr, grpc.WithInsecure())
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()
	client := completion.NewCompletionServiceClient(conn)

	genSettings := GenerationParams{
		Temperature:      0.8,
		OutputLength:     140,
		PresencePenalty:  0.0,
		FrequencyPenalty: 1.2,
		LogProbs:         30,
		TopP:             0.7,
		TopK:             140,
	}

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

	paramsView := newGenerationParametersView(&genSettings)

	toolsPane := cview.NewFlex()
	toolsPane.SetDirection(cview.FlexRow)
	toolsPane.AddItem(paramsView, 0, 1, false)
	toolsPane.AddItem(biasTable, 0, 1, false)

	flex := cview.NewFlex()
	flex.AddItem(tokenView, 25, 1, false)
	flex.AddItem(textView, 0, 1, true)
	flex.AddItem(toolsPane, 28, 1, false)

	focusManager := cview.NewFocusManager(func(p cview.Primitive) {})
	focusManager.Add(tokenView, textView)

	grad = colorgrad.RdBu()

	requestSize := 40
	indexedFragments := make(IndexedFragments, 0)
	viewedTokenIdx := 0
	//numSelections := 0

	updateTokenView := func(tokenIdx int) {
		tokenView.Clear()
		tokenView.Highlight()

		if indexedFragments[tokenIdx].chosen != nil {
			fmt.Fprintf(tokenView,
				"%s\n---------------------\n",
				getPercentViewStr(indexedFragments[tokenIdx].chosen))
		} else {
			fmt.Fprintf(tokenView,
				"%-5s %-10s\n---------------------\n",
				"", indexedFragments[tokenIdx].text)
		}

		choicesList := indexedFragments[tokenIdx].choices
		if choicesList != nil {
			for choicesIdx := range choicesList {
				logProb := choicesList[choicesIdx]
				if logProb.Logprob != nil {
					fmt.Fprint(tokenView,
						fmt.Sprintf("[\"%d\"]%-5.2f %-10s[\"\"]\n",
							choicesIdx,
							math.Exp(*logProb.Logprob)*float64(100.0),
							colorizeToken(logProb, grad)))
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

	backendRequest := func(rq *completion.Request) {
		receiving = true
		stream, err := client.Completion(context.Background(), rq)
		if err != nil {
			log.Fatal(err)
		}

		for {
			answer, err := stream.Recv()
			if err == io.EOF {
				break
			}
			if err != nil {
				log.Fatalf("%v.Completion(_) = _, %v", client, err)
			}
			logprobs := answer.Choices[0].GetLogprobs()
			tokens := logprobs.GetTokens()
			topN := logprobs.GetTop()
			for tokenIdx := range tokens.Logprobs {
				appended := false
				fragment := &Fragment{
					text: tokens.Logprobs[tokenIdx].Token.Text,
					buffer: colorizeToken(tokens.Logprobs[tokenIdx],
						grad),
					chosen:  tokens.Logprobs[tokenIdx],
					choices: topN[tokenIdx].Logprobs,
				}
				if len(indexedFragments) > tokenCt {
					indexedFragments[tokenCt] = fragment
				} else {
					indexedFragments = append(indexedFragments, fragment)
					appended = true
				}

				if appended {
					tokenRepr := fmt.Sprintf("[\"%d\"]%s[\"\"]", tokenCt,
						fragment.buffer)
					bufferState += tokenRepr
					fmt.Fprint(textView, tokenRepr)
				} else {
					textView.SetText(indexedFragments.getBufferUntil(
						len(indexedFragments)))
				}
				textView.Highlight()
				textView.Highlight(strconv.Itoa(tokenCt))
				updateTokenView(tokenCt)
				tokenCt += 1
				app.Draw()
			}
		}
		indexedFragments = indexedFragments[:tokenCt]
		textView.SetText(indexedFragments.getBufferUntil(len(indexedFragments)))
		app.Draw()
		receiving = false
	}
	go backendRequest(genSettings.buildRequest(
		"The witch laughed", EchoTrue, requestSize))

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
			tokenList := indexedFragments[viewedTokenIdx].choices
			selectedToken := tokenList[index]
			indexedFragments[viewedTokenIdx].chosen = selectedToken
			indexedFragments[viewedTokenIdx].text = selectedToken.Token.Text
			indexedFragments[viewedTokenIdx].buffer =
				colorizeIndexedLogprob(uint32(viewedTokenIdx), selectedToken)

			bufferState = indexedFragments.getBufferUntil(len(indexedFragments))
			storyText = indexedFragments.getTextUntil(viewedTokenIdx)
			textView.SetText(bufferState)
			app.Draw()
			tokenCt = viewedTokenIdx + 1
			go backendRequest(genSettings.buildRequest(storyText, EchoFalse,
				requestSize))
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

	// bufferDirty := false

	textEditorAction := func(event *tcell.EventKey) *tcell.EventKey {
		inputRune := event.Rune()
		currFragment := indexedFragments[viewedTokenIdx]
		// ModAlt
		if event.Key() == tcell.KeyEnter && event.Modifiers() == tcell.ModAlt {
			promptText := indexedFragments.getTextUntil(viewedTokenIdx)
			echoIdx := indexedFragments.getModifiedIdx()
			echoParam := &echoIdx
			if echoIdx > viewedTokenIdx {
				echoIdx = viewedTokenIdx - 1
			}
			if echoIdx == len(indexedFragments) || echoIdx < 0 {
				echoParam = nil
			} else {
				tokenCt = echoIdx
			}
			go backendRequest(genSettings.buildRequest(
				promptText, echoParam,
				requestSize+viewedTokenIdx))
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
				len(indexedFragments)))
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
				len(indexedFragments)))
			updateTokenView(viewedTokenIdx)
		}
		if event.Key() == tcell.KeyDelete {
			indexedFragments = append(indexedFragments[:viewedTokenIdx],
				indexedFragments[viewedTokenIdx+1:]...)
			textView.SetText(indexedFragments.getBufferUntil(
				len(indexedFragments)))
			if viewedTokenIdx > len(indexedFragments)-1 {
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
				if index >= len(indexedFragments)-1 {
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
	app.SetRoot(flex, true)

	if err := app.Run(); err != nil {
		panic(err)
	}
}
