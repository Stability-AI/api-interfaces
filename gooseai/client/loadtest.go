package main

import (
	"code.rocketnine.space/tslocum/cview"
	"context"
	"fmt"
	"github.com/gooseai/interfaces/gooseai/completion"
	"google.golang.org/grpc/metadata"
	"strings"
	"sync"
	"time"
)

type IterationResult struct {
	msToFirst int64
	duration  time.Duration
	numTokens int
}

func LoadTest(numThreads int64, genParams *GenerationParams,
	client *completion.CompletionServiceClient, prompts *[]string) TUIApp {
	app := cview.NewApplication()
	defer app.HandlePanic()

	screenPane := cview.NewFlex()
	screenPane.SetDirection(cview.FlexRow)
	screenPane.SetBorder(true)
	app.SetRoot(screenPane, true)

	request := genParams.buildRequest(prompts, nil)

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
				duration := streamEnd.Sub(rqBegin)
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
				result.duration.Seconds())
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
