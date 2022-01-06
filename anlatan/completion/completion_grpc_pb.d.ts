// package: anlatan
// file: completion.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as completion_pb from "./completion_pb";

interface ICompletionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    completion: ICompletionServiceService_ICompletion;
}

interface ICompletionServiceService_ICompletion extends grpc.MethodDefinition<completion_pb.Request, completion_pb.Answer> {
    path: "/anlatan.CompletionService/Completion";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<completion_pb.Request>;
    requestDeserialize: grpc.deserialize<completion_pb.Request>;
    responseSerialize: grpc.serialize<completion_pb.Answer>;
    responseDeserialize: grpc.deserialize<completion_pb.Answer>;
}

export const CompletionServiceService: ICompletionServiceService;

export interface ICompletionServiceServer {
    completion: grpc.handleServerStreamingCall<completion_pb.Request, completion_pb.Answer>;
}

export interface ICompletionServiceClient {
    completion(request: completion_pb.Request, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<completion_pb.Answer>;
    completion(request: completion_pb.Request, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<completion_pb.Answer>;
}

export class CompletionServiceClient extends grpc.Client implements ICompletionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public completion(request: completion_pb.Request, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<completion_pb.Answer>;
    public completion(request: completion_pb.Request, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<completion_pb.Answer>;
}
