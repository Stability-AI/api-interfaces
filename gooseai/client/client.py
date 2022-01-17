import typing

import grpc
import sys
import pathlib

thisPath = str(pathlib.Path(__file__).parent.resolve())
sys.path.append(thisPath + "/../completion")
sys.path.append(thisPath + "/../auth")

print(sys.path)

import time
from typing import List, Union
from transformers import AutoTokenizer, PreTrainedTokenizerBase
import completion.completion_pb2_grpc as completion_grpc
import completion.completion_pb2 as completion
import auth.auth_pb2_grpc as auth_grpc
import auth.auth_pb2 as auth

endpoints = [
    'dev-grpc.gooseai.com:80'
]

models = [
    "gpt-j-6b",
    "gpt-neo-2-7b",
    "gpt-neo-1-3b",
    "gpt-neo-125m",
]


class CompletionRequest():
    def __init__(self,
                 prompt: Union[str, List[str]] = "",
                 echo: Union[bool, int] = True,
                 completions: int = 1,
                 logprobs: int = 10,
                 num_tokens: int = 40,
                 tokenizer_type: str = "gpt2",
                 model: Union[str, None] = models[0]):
        if type(prompt) == str:
            prompt = [prompt]

        self.prompts: List[completion.Prompt] = \
            [completion.Prompt(text=p) for p in prompt]
        self.logprobs = logprobs
        self.echo = echo
        self.completions = completions
        self.tokenizer: PreTrainedTokenizerBase = AutoTokenizer.from_pretrained(
            tokenizer_type)
        self.num_tokens = num_tokens
        self.model = model

    def generate(self, model: str = None):
        echo = None
        if self.echo != False:
            if self.echo == True:
                echo = completion.Echo(index=0)
            else:
                echo = completion.Echo(index=echo)

        if not model:
            model = self.model

        input_tokens_ct = 0
        for prompt in self.prompts:
            tokens = self.tokenizer.encode(prompt.text)
            if len(tokens) > input_tokens_ct:
                input_tokens_ct = len(tokens)
        max_tokens = input_tokens_ct + self.num_tokens

        return completion.Request(
            engine_id=model,
            prompt=self.prompts,
            engine_params=completion.EngineParams(
                echo=echo,
                logprobs=self.logprobs,
                completions=self.completions,
                max_tokens=max_tokens))


class CompletionEngine:
    def __init__(self, endpoint=endpoints[0], model=models[0],
                 token="gooseHonkHonk"):
        self.endpoint = endpoint
        self.model = model
        self.channel = grpc.insecure_channel(self.endpoint)
        self.auth_grpc = auth_grpc.AuthServiceStub(self.channel)
        self.completion_grpc = completion_grpc.CompletionServiceStub(
            self.channel)
        auth_resp = self.auth_grpc.Authenticate(auth.AuthRequest(
            static_bearer=token
        ))

    def complete(self, request: CompletionRequest,
                   model: Union[str, None] = None):
        rq = request.generate(model)
        for resp in self.completion_grpc.Completion(rq):
            yield resp


def client():
    completion = CompletionEngine(
        endpoint='grpc.tenant-goosedev-1.knative.chi.coreweave.com:80'
    )
    request = CompletionRequest(
        prompt=["The witch laughed",
                "The warlock laughed"]
    )
    for model in models:
        print(model + ":", end="")
        begin = time.time()
        curr_completion = None
        for answer in completion.complete(request, model):
            if answer.answer_id != curr_completion:
                first = time.time()
                curr_completion = answer.answer_id
                print("\n\t{:s} ({:.2f}ms): ".format(
                    curr_completion, (time.time()-begin)*1000))
                begin = time.time()
            text = answer.choices[0].text.replace("\n", "\\n")
            print(text, end="")
        print()

def main():
    client()


if __name__ == "__main__":
    main()
