package main

import (
	"context"
	"github.com/gooseai/interfaces/gooseai/completion"
	"io"
	"time"
)

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

type RequestState struct {
	RequestSentHandler     *func()
	RequestErrorHandler    *func(error)
	ReceiveErrorHandler    *func(error)
	FirstTokenHandler      *func()
	UpdatedFragsHandler    *func(*IndexedFragments, *int)
	RequestCompleteHandler *func(*RequestState)
	TokenIndex             *int
	IndexedFrags           *IndexedFragments
	Receiving              *bool
	TotalTokens            int
	TokensPerSecond        float64
	FirstResp              time.Duration
	RequestDuration        time.Duration
}

func (rqc *RequestState) RequestToFragments(ctx *context.Context,
	client *completion.CompletionServiceClient, rq *completion.Request) {
	*rqc.Receiving = true
	rqc.TotalTokens = 0

	rqBegin := time.Now()
	stream, rqErr := (*client).Completion(*ctx, rq)
	if rqErr != nil {
		*rqc.Receiving = false
		if rqc.RequestErrorHandler != nil {
			(*rqc.RequestErrorHandler)(rqErr)
		}
		return
	}

	start := time.Now()
	first := start

	for {
		answer, err := stream.Recv()
		if start == first {
			first = time.Now()
			if *rqc.FirstTokenHandler != nil {
				(*rqc.FirstTokenHandler)()
			}
		}
		if err == io.EOF {
			break
		}
		if err != nil {
			*rqc.Receiving = false
			if rqc.ReceiveErrorHandler != nil {
				(*rqc.ReceiveErrorHandler)(err)
			}
			return
		}
		logprobs := answer.Choices[0].GetLogprobs()
		rqc.TotalTokens += len(logprobs.Tokens.GetLogprobs())

		tokens := logprobs.GetTokens()
		topN := logprobs.GetTop()
		topNBefore := logprobs.GetTopBefore()
		for tokenIdx := range tokens.Logprobs {
			var choices []*completion.LogProb
			if len(topN) == 0 {
				choices = topNBefore[tokenIdx].Logprobs[:]
			} else {
				choices = topN[tokenIdx].Logprobs[:]
			}
			choicesSz := len(choices)
			if uint32(choicesSz) < *rq.EngineParams.Logprobs &&
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
			if len(*rqc.IndexedFrags) > *rqc.TokenIndex {
				(*rqc.IndexedFrags)[*rqc.TokenIndex] = fragment
			} else {
				*rqc.IndexedFrags = append(*rqc.IndexedFrags, fragment)
			}

			*rqc.TokenIndex++

			if rqc.UpdatedFragsHandler != nil {
				(*rqc.UpdatedFragsHandler)(rqc.IndexedFrags, rqc.TokenIndex)
			}

		}
		rqc.RequestDuration = time.Now().Sub(start)
		rqc.TokensPerSecond = float64(rqc.TotalTokens) /
			float64(rqc.RequestDuration.Milliseconds()) * 1000
		rqc.FirstResp = first.Sub(rqBegin)
	}
	if rqc.RequestCompleteHandler != nil {
		(*rqc.RequestCompleteHandler)(rqc)
	}
	*rqc.Receiving = false
}
