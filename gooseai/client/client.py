import grpc
import sys
import pathlib
import interfaces.anlatan.completion.completion_pb2 as completion

thisPath = str(pathlib.Path(__file__).parent.resolve())
sys.path.append(thisPath + "/interfaces/anlatan/completion")

import interfaces.anlatan.completion.completion_pb2_grpc as completion_grpc


def client():
    print("Opening channel")
    channel = grpc.insecure_channel('grpc.tenant-goosedev-1.knative.chi.coreweave.com:80')
    stub = completion_grpc.CompletionServiceStub(channel)
    print("Channel opened")
    rq = completion.Request(
        prompt=[
            completion.Prompt(text="The witch laughed"),
            completion.Prompt(text="The warlock laughed")
        ],
        #model_parameters=completion.Model(
        #    temperature=0.8,
        #    top_p=0.7),
        engine_params=completion.EngineParams(
            echo=completion.Echo(),
            logprobs=10,
            completions = 1
    )
        #    max_tokens=160,
        #    logprobs=5,
        #    echo=True
        #)
        )
    print("Completion called")
    for resp in stub.Completion(rq):
        print("Got response:")
        print(resp)
    print("Done")


def main():
    client()


if __name__ == "__main__":
    main()
