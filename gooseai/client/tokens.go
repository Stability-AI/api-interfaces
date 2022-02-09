package main

import (
	"fmt"
	"github.com/gooseai/interfaces/gooseai/completion"
	"github.com/mazznoer/colorgrad"
	"github.com/wbrown/gpt_bpe"
	"math"
	"strings"
)

func colorizeToken(logprob *completion.LogProb, gradient colorgrad.Gradient) string {
	tokenStr := ""
	if logprob.Token != nil {
		tokenStr = logprob.GetToken().Text
	}
	var lgpb float64
	if logprob.Logprob == nil && logprob.LogprobBefore != nil {
		lgpb = *logprob.LogprobBefore
	} else if logprob.Logprob == nil {
		return tokenStr
	} else {
		lgpb = *logprob.Logprob
	}
	prob := 1.0 - math.Exp(lgpb)
	return fmt.Sprintf("[%s]%s[white]", gradient.At(prob).Hex(),
		tokenStr)
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

// Given a sequence of Fragments, build the string serialization of the tokens
// correctly decoding multi-byte runes, colorized for token probabilities
// with hyperlink references to the token view.
func (fragments IndexedFragments) getStringsUntil(until int) (
	colorized string, plain string) {
	var colorizedBuf strings.Builder
	var plainBuf strings.Builder
	// Token accumulator.
	accTokens := make(gpt_bpe.Tokens, 0)
	var firstLogprob *float64
	var firstLogprobBefore *float64
	// Handle multi-token runes.
	handleFragment := func(fragment *Fragment) (logprob completion.LogProb) {
		if fragment.chosen == nil {
			logprob.Token = &completion.Token{
				Text: fragment.text,
			}
			return logprob
		}
		accTokens = append(accTokens, gpt_bpe.Token(fragment.chosen.Token.Id))
		if len(accTokens) == 1 {
			firstLogprob = fragment.chosen.Logprob
			firstLogprobBefore = fragment.chosen.LogprobBefore
		}
		if gpt_bpe.Encoder.TokensReady(accTokens) {
			decoded := gpt_bpe.Encoder.Decode(&accTokens)
			logprob.Token = &completion.Token{
				Text: decoded,
			}
			logprob.Logprob = firstLogprob
			logprob.LogprobBefore = firstLogprobBefore
			accTokens = make(gpt_bpe.Tokens, 0)
		} else {
			logprob.Token = &completion.Token{
				Text: "",
			}
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
