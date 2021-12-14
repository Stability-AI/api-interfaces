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
)

var grad colorgrad.Gradient

type Fragment struct {
	text    string
	buffer  string
	chosen  *completion.LogProb
	choices []*completion.LogProb
}

func buildRequest(prompt string, echo bool, numTokens int) *completion.Request {
	var temperature = 0.8
	var topP = 0.7
	var frequencyPenalty = 1.2
	var maxTokens = uint32(numTokens)
	var completions uint32 = 1
	var logprobs uint32 = 30

	rq := completion.Request{
		Prompt: []*completion.Prompt{
			{Prompt: &completion.Prompt_Text{
				Text: prompt,
			}}},
		ModelParameters: &completion.Model{
			Temperature:      &temperature,
			TopP:             &topP,
			FrequencyPenalty: &frequencyPenalty,
		},
		EngineParameters: &completion.Engine{
			MaxTokens:   &maxTokens,
			Completions: &completions,
			Logprobs:    &logprobs,
			Echo:        &echo},
	}

	return &rq
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

func main() {
	// GRPC stuff
	serverAddr := "localhost:50051"
	conn, err := grpc.Dial(serverAddr, grpc.WithInsecure())
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()
	client := completion.NewCompletionServiceClient(conn)

	// view stuff
	app := cview.NewApplication()
	defer app.HandlePanic()

	app.EnableMouse(true)

	textView := cview.NewTextView()
	textView.SetDynamicColors(true)
	textView.SetRegions(true)
	textView.SetWordWrap(true)
	textView.SetChangedFunc(func() {
		//app.Draw()
	})

	tokenView := cview.NewTextView()
	tokenView.SetDynamicColors(true)
	tokenView.SetRegions(true)
	tokenView.SetWordWrap(true)
	tokenView.SetChangedFunc(func() {
		//app.Draw()
	})

	flex := cview.NewFlex()
	flex.AddItem(tokenView, 25, 1, false)
	flex.AddItem(textView, 0, 1, true)

	focusManager := cview.NewFocusManager(func(p cview.Primitive) {})
	focusManager.Add(tokenView, textView)

	grad = colorgrad.RdBu()

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
	go backendRequest(buildRequest("The witch laughed", true,
		200))

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
			//textView.Clear()
			//fmt.Fprint(textView, bufferState)
			app.Draw()
			tokenCt = viewedTokenIdx + 1
			go backendRequest(buildRequest(storyText, false,
				200))
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
			echoInput := true
			if viewedTokenIdx == len(indexedFragments)-1 {
				echoInput = false
			} else {
				tokenCt = 0
			}

			go backendRequest(buildRequest(
				promptText, echoInput,
				200+viewedTokenIdx))
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
