package main

import (
	"code.rocketnine.space/tslocum/cview"
	"context"
	"fmt"
	"github.com/gdamore/tcell/v2"
	"github.com/gooseai/interfaces/gooseai/completion"
	"log"
	"strconv"
	"strings"
	"time"
	"unicode"
)

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
	mainPanes.AddItem(tokenView, 32, 1, false)
	mainPanes.AddItem(textView, 0, 1, true)
	mainPanes.AddItem(toolsPane, 28, 1, false)

	screenPane := cview.NewFlex()
	screenPane.SetDirection(cview.FlexRow)
	screenPane.AddItem(mainPanes, 0, 1, true)
	screenPane.AddItem(statusView, 1, 1, false)

	focusManager := cview.NewFocusManager(func(p cview.Primitive) {})
	focusManager.Add(tokenView, textView)

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
				if logProb.Logprob != nil || logProb.LogprobBefore != nil {
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
	storyText := []string{""}
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

	requestSentHandler := func() {
		statusView.SetText(fmt.Sprintf("Request sent to %s/%s",
			genSettings.ServerAddr, genSettings.Model))
	}

	requestErrorHandler := func(err error) {
		statusView.SetText(fmt.Sprintf("%v", err))
		app.Draw()
	}

	firstTokenHandler := func() {
		statusView.SetText(fmt.Sprintf(
			"Streaming response from %s/%s",
			genSettings.ServerAddr, genSettings.Model))
	}

	updateViewHandler := func(idxFrags *IndexedFragments, tokIdx *int) {
		textView.Highlight()
		textView.Highlight(strconv.Itoa(tokenCt - 1))
		textView.SetText(indexedFragments.getBufferUntil(
			len(*indexedFragments)))
		drawAppView(tokenCt - 1)
	}

	requestCompleteHandler := func(requestState *RequestState) {
		statusView.SetText(fmt.Sprintf(
			"%d ms for %d tokens (%0.2f tokens/s), "+
				"%d ms to first token from %s/%s",
			requestState.RequestDuration.Milliseconds(),
			requestState.TotalTokens,
			requestState.TokensPerSecond,
			requestState.FirstResp,
			genSettings.ServerAddr,
			genSettings.Model))
		*indexedFragments = (*indexedFragments)[:tokenCt]
		textView.SetText(indexedFragments.getBufferUntil(len(
			*indexedFragments)))
		textView.Highlight()
		textView.Highlight(strconv.Itoa(tokenCt - 1))
		textView.ScrollToHighlight()
		updateTokenView(tokenCt - 1)
		app.Draw()
	}

	backendRequest := func(rq *completion.Request, showProgress bool) {
		requestState := RequestState{
			RequestSentHandler:     &requestSentHandler,
			RequestErrorHandler:    &requestErrorHandler,
			ReceiveErrorHandler:    &requestErrorHandler,
			FirstTokenHandler:      &firstTokenHandler,
			RequestCompleteHandler: &requestCompleteHandler,
			TokenIndex:             &tokenCt,
			IndexedFrags:           indexedFragments,
			Receiving:              &receiving,
		}
		if showProgress {
			requestState.UpdatedFragsHandler = &updateViewHandler
		}
		requestState.RequestToFragments(ctx, client, rq)
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
			storyText = []string{indexedFragments.getPlainUntil(viewedTokenIdx)}
			textView.SetText(bufferState)
			app.Draw()
			tokenCt = viewedTokenIdx + 1
			go backendRequest(genSettings.buildRequest(&storyText, EchoFalse),
				true)
		}
		return action, event
	}

	tokenMouseAction := func(action cview.MouseAction,
		event *tcell.EventMouse) (cview.MouseAction, *tcell.EventMouse) {
		if !receiving {
			app.QueueUpdateDraw(func() {
				currentSelection := textView.GetHighlights()
				if len(currentSelection) > 0 &&
					priorSelection != currentSelection[0] {
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
				&[]string{promptText}, echoParam), true)
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
				log.Printf("%v", err)
				panic(err)
			}
		},
	}
}
