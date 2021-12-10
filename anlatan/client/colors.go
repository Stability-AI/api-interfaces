package main

import (
	"code.rocketnine.space/tslocum/cview"
	"context"
	"fmt"
	"github.com/NovelAI/infrastructure/anlatan/completion"
	"github.com/mazznoer/colorgrad"
	"google.golang.org/grpc"
	"io"
	"log"
	"math"
)

func buildRequest() *completion.Request {
	var temperature = 0.8
	var topP = 0.7
	var maxTokens uint32 = 400
	var completions uint32 = 1
	var logprobs uint32 = 20
	var echo = true

	rq := completion.Request{
		Prompt: []*completion.Prompt{
			{Prompt: &completion.Prompt_String_{
				String_: "The witch laughed",
			}}},
		//{Prompt: &completion.Prompt_String_{
		//	String_: " goose goose goose goose goose goose goose goose goose goose goose goose goose goose goose goose goose goose goose goose"}}},
		ModelParameters: &completion.Model{
			Temperature: &temperature,
			TopP:        &topP},
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

func getLogProbStr(logprob *completion.LogProb) string {
	tokenStr := logprob.GetToken().Text
	if logprob.Logprob == nil {
		return fmt.Sprintf("|%s (nil)", tokenStr)
	} else {
		percentProb := math.Exp(*logprob.Logprob) * float64(100.0)
		return fmt.Sprintf("|%s (%.3f%%)", tokenStr, percentProb)
	}
}

type IndexedTokens map[uint][]*completion.LogProb

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
		app.Draw()
	})

	grad := colorgrad.RdBu()
	print(grad.At(0).Hex())

	go func() {
		rq := buildRequest()
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
			// topN := logprobs.GetTop()
			for tokenIdx := range tokens.Logprobs {
				chosenStr := colorizeToken(tokens.Logprobs[tokenIdx], grad)
				// tokenChoices := topN[tokenIdx]
				fmt.Fprint(textView, chosenStr)
				// if tokenChoices != nil {
				//	topNentries := tokenChoices.GetLogprobs()
				//	for topNentryIdx := range topNentries {
				//		fmt.Fprint(textView, getLogProbStr(topNentries[topNentryIdx]), " ")
				//	}
				//}
			}
		}
	}()
	/*
		textView.SetDoneFunc(func(key tcell.Key) {
			currentSelection := textView.GetHighlights()
			if key == tcell.KeyEnter {
				if len(currentSelection) > 0 {
					textView.Highlight()
				} else {
					textView.Highlight("0")
					textView.ScrollToHighlight()
				}
			} else if len(currentSelection) > 0 {
				index, _ := strconv.Atoi(currentSelection[0])
				if key == tcell.KeyTab {
					index = (index + 1) % numSelections
				} else if key == tcell.KeyBacktab {
					index = (index - 1 + numSelections) % numSelections
				} else {
					return
				}
				textView.Highlight(strconv.Itoa(index))
				textView.ScrollToHighlight()
			}
		}) */

	textView.SetBorder(true)
	app.SetRoot(textView, true)
	if err := app.Run(); err != nil {
		panic(err)
	}
}
