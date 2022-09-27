// GENERATED CODE -- DO NOT EDIT!

// package: gooseai
// file: transform.proto

import * as transform_pb from "./transform_pb";
import * as grpc from "grpc";

interface ITransformServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  transform: grpc.MethodDefinition<transform_pb.Request, transform_pb.Result>;
}

export const TransformServiceService: ITransformServiceService;

export interface ITransformServiceServer extends grpc.UntypedServiceImplementation {
  transform: grpc.handleServerStreamingCall<transform_pb.Request, transform_pb.Result>;
}

export class TransformServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  transform(argument: transform_pb.Request, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<transform_pb.Result>;
  transform(argument: transform_pb.Request, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<transform_pb.Result>;
}
