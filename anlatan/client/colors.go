package main

import (
	"context"
	"github.com/NovelAI/infrastructure/anlatan/completion"
	"google.golang.org/grpc"
	"io"
	"log"
)

func buildRequest() *completion.Request {
	var temperature = 0.8
	var topP = 0.7
	var maxTokens uint32 = 160
	var completions uint32 = 1
	var logprobs uint32 = 5
	var echo = true

	rq := completion.Request{
		Prompt: []*completion.Prompt{
			{Prompt: &completion.Prompt_String_{
				String_: "The witch laughed"}},
			{Prompt: &completion.Prompt_String_{
				String_: "The warlock laughed"}},
		},
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

func main() {
	serverAddr := "localhost:50051"
	conn, err := grpc.Dial(serverAddr, grpc.WithInsecure())
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	client := completion.NewCompletionServiceClient(conn)
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
		log.Println(answer)
	}
}
