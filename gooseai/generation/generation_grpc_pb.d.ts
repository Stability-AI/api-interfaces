// GENERATED CODE -- DO NOT EDIT!

// package: gooseai
// file: generation.proto

import * as generation_pb from "./generation_pb";
import * as grpc from "grpc";

interface IGenerationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  generate: grpc.MethodDefinition<generation_pb.Request, generation_pb.Answer>;
  chainGenerate: grpc.MethodDefinition<generation_pb.ChainRequest, generation_pb.Answer>;
  estimateCost: grpc.MethodDefinition<generation_pb.Request, generation_pb.EstimateCostResponse>;
}

export const GenerationServiceService: IGenerationServiceService;

export interface IGenerationServiceServer extends grpc.UntypedServiceImplementation {
  generate: grpc.handleServerStreamingCall<generation_pb.Request, generation_pb.Answer>;
  chainGenerate: grpc.handleServerStreamingCall<generation_pb.ChainRequest, generation_pb.Answer>;
  estimateCost: grpc.handleUnaryCall<generation_pb.Request, generation_pb.EstimateCostResponse>;
}

export class GenerationServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  generate(argument: generation_pb.Request, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<generation_pb.Answer>;
  generate(argument: generation_pb.Request, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<generation_pb.Answer>;
  chainGenerate(argument: generation_pb.ChainRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<generation_pb.Answer>;
  chainGenerate(argument: generation_pb.ChainRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<generation_pb.Answer>;
  estimateCost(argument: generation_pb.Request, callback: grpc.requestCallback<generation_pb.EstimateCostResponse>): grpc.ClientUnaryCall;
  estimateCost(argument: generation_pb.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<generation_pb.EstimateCostResponse>): grpc.ClientUnaryCall;
  estimateCost(argument: generation_pb.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<generation_pb.EstimateCostResponse>): grpc.ClientUnaryCall;
}
