package main

import (
	"context"
	"crypto/tls"
	"errors"
	"fmt"
	"github.com/akamensky/argparse"
	"github.com/gooseai/interfaces/gooseai/completion"
	"github.com/mazznoer/colorgrad"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/metadata"
	"log"
	"net/url"
	"os"
	"strconv"
	"strings"
)

var unitrim []int

var grad colorgrad.Gradient
var zero = 0
var EchoTrue = &zero
var EchoFalse *int

type tokenAuth struct {
	token string
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
	ServerAddr       string
}

func (genParams *GenerationParams) buildRequest(prompts *[]string,
	echo *int) *completion.Request {
	/* tokens := gpt_bpe.Encoder.Encode(&prompt)
	numTokensPrompt := len(*tokens) */

	maxTokens := genParams.OutputLength // + uint32(numTokensPrompt)
	/* if maxTokens > 2048 {
		maxTokens = 2048
	} */

	completions := uint32(1)

	var echoParam *completion.Echo
	if echo != nil {
		echoVal := int32(*echo)
		echoParam = &completion.Echo{
			Index: &echoVal,
		}
	}

	rqPrompts := make([]*completion.Prompt, 0)
	for idx := range *prompts {
		rqPrompts = append(rqPrompts,
			&completion.Prompt{
				Prompt: &completion.Prompt_Text{
					Text: (*prompts)[idx],
				}})
	}

	return &completion.Request{
		EngineId: genParams.Model,
		Prompt:   rqPrompts,
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

func main() {
	parser := argparse.NewParser("gooseai",
		"gRPC client for Goose.AI")
	// client mode
	numThreads := parser.Int("", "threads",
		&argparse.Options{
			Help: "Enable load test mode with number of threads",
			Validate: func(args []string) error {
				if threads, thErr := strconv.Atoi(args[0]); thErr != nil {
					return thErr
				} else if threads < 0 {
					return errors.New("cannot have less than 0 threads")
				}
				return nil
			}})
	// auth handling
	authToken := parser.String("a", "auth",
		&argparse.Options{
			Help: "Authentication token for Goose.AI",
			Validate: func(args []string) error {
				if len(args[0]) == 0 {
					return errors.New("must provide authentication token")
				}
				return nil
			}})
	// two different ways to take prompts
	prompts := parser.StringList("p", "prompt",
		&argparse.Options{
			Help: "One or more prompts to provide to Goose.AI",
			Validate: func(args []string) error {
				for idx := range args {
					if len(args[idx]) == 0 {
						return errors.New("empty prompt provided")
					}
				}
				return nil
			},
		})
	promptFiles := parser.StringList("f", "promptfile",
		&argparse.Options{
			Help: "One or more files to use as prompts",
		})
	// Generation parameter handling
	temperature := parser.Float("t", "temperature",
		&argparse.Options{Default: 2.5})
	outputLength := parser.Int("m", "max_tokens",
		&argparse.Options{Default: 100})
	presPen := parser.Float("", "presence_penalty",
		&argparse.Options{Default: 0.5})
	freqPen := parser.Float("", "frequency_penalty",
		&argparse.Options{Default: 0.5})
	logProbs := parser.Int("l", "num_logprobs",
		&argparse.Options{Default: 30})
	topP := parser.Float("", "top_p",
		&argparse.Options{Default: 0.0, Help: "nucleus"})
	topK := parser.Int("k", "top_k",
		&argparse.Options{Default: 300})
	tfs := parser.Float("", "tfs",
		&argparse.Options{Default: 0.5})

	// Model
	model := parser.String("", "model",
		&argparse.Options{
			Default: "gpt-j-6b",
			Validate: func(args []string) error {
				if len(args[0]) == 0 {
					return errors.New("empty model provided")
				}
				return nil
			}})

	// Finally, host in question.
	host := parser.String("", "host",
		&argparse.Options{
			Default: "https://grpc.goose.ai",
			Validate: func(args []string) error {
				if len(args[0]) == 0 {
					return errors.New("empty host provided")
				}
				return nil
			}})

	// Parse it all.
	err := parser.Parse(os.Args)
	if err != nil {
		// In case of error print error and print usage
		// This can also be done by passing -h or --help flags
		fmt.Print(parser.Usage(err))
		os.Exit(1)
	}

	// Prompt handling
	if prompts == nil {
		promptsArr := make([]string, 0)
		prompts = &promptsArr
	}
	if promptFiles != nil {
		for idx := range *promptFiles {
			promptFile := (*promptFiles)[idx]
			if promptContents, promptErr := os.ReadFile(
				promptFile); promptErr != nil {
				log.Fatalf("Cannot open prompt file %s: %v", promptFile,
					promptErr)
			} else {
				promptStr := string(promptContents)
				*prompts = append(*prompts, promptStr)
			}
		}
	}
	if len(*prompts) == 0 {
		*prompts = append(*prompts, "The mercurial and beautiful witch")
	}

	if *numThreads != 0 && len(*prompts) > 0 {
		log.Fatal("GooseAI TUI-mode cannot accept more than one prompt at" +
			" present!")
	}

	if !strings.HasPrefix(*host, "http") {
		if !strings.HasSuffix(*host, ":443") {
			*host = "http://" + *host
		} else {
			*host = "https://" + *host
		}
	}

	// gRPC host handling, can be host:port, or URI
	uri, uriErr := url.Parse(*host)
	if uriErr != nil {
		log.Fatalf("Error parsing '%s': %v")
	}
	if uri.Port() == "" {
		if uri.Scheme == "https" {
			uri.Host = uri.Host + ":443"
		} else {
			uri.Host = uri.Host + ":80"
		}
	}

	genSettings := GenerationParams{
		Model:            *model,
		Temperature:      *temperature,
		OutputLength:     uint32(*outputLength),
		PresencePenalty:  *presPen,
		FrequencyPenalty: *freqPen,
		LogProbs:         uint32(*logProbs),
		TopP:             *topP,
		TopK:             uint32(*topK),
		TFS:              *tfs,
		Auth:             *authToken,
		ServerAddr:       uri.Host,
	}

	// Set up metadata and context for GRPC with auth
	// Auth handling, fall back to env if not provided
	if authToken == nil {
		os.Getenv("GOOSEAI_AUTH")
	}
	md := metadata.New(map[string]string{"authorization" +
		"": "Bearer " + genSettings.Auth})
	ctx := metadata.NewOutgoingContext(
		context.Background(),
		md)

	var client completion.CompletionServiceClient
	indexedFragments := make(IndexedFragments, 0)

	// Start our TUI app
	var app TUIApp
	if *numThreads == 0 {
		app = TUI(&ctx, &indexedFragments, &genSettings, &client)
	} else {
		app = LoadTest(int64(*numThreads), &genSettings, &client, prompts)
	}
	var grpcOptions grpc.DialOption

	if strings.HasSuffix(uri.Host, "443") || uri.Scheme == "https" {
		grpcOptions = grpc.WithTransportCredentials(
			credentials.NewTLS(&tls.Config{InsecureSkipVerify: true}))
	} else {
		grpcOptions = grpc.WithTransportCredentials(insecure.NewCredentials())
	}

	conn, grpcErr := grpc.Dial(uri.Host, grpcOptions)

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
		rq := genSettings.buildRequest(prompts, EchoTrue)
		go app.BackendRequest(rq,
			true)
	} else {
		fragment := &Fragment{
			text:    (*prompts)[0],
			buffer:  (*prompts)[0],
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
