// GENERATED CODE -- DO NOT EDIT!

// package: gooseai
// file: transfer.proto

import * as transfer_pb from "./transfer_pb";
import * as grpc from "grpc";

interface ITransferServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  transfer: grpc.MethodDefinition<transfer_pb.TransferRequest, transfer_pb.TransferResponse>;
  delete: grpc.MethodDefinition<transfer_pb.DeleteRequest, transfer_pb.DeleteResponse>;
  cleanupFineTuning: grpc.MethodDefinition<transfer_pb.CleanupFineTuningRequest, transfer_pb.CleanupFineTuningResponse>;
  deleteObjectsByPrefix: grpc.MethodDefinition<transfer_pb.DeleteObjectsByPrefixRequest, transfer_pb.DeleteObjectsByPrefixResponse>;
}

export const TransferServiceService: ITransferServiceService;

export interface ITransferServiceServer extends grpc.UntypedServiceImplementation {
  transfer: grpc.handleUnaryCall<transfer_pb.TransferRequest, transfer_pb.TransferResponse>;
  delete: grpc.handleUnaryCall<transfer_pb.DeleteRequest, transfer_pb.DeleteResponse>;
  cleanupFineTuning: grpc.handleUnaryCall<transfer_pb.CleanupFineTuningRequest, transfer_pb.CleanupFineTuningResponse>;
  deleteObjectsByPrefix: grpc.handleUnaryCall<transfer_pb.DeleteObjectsByPrefixRequest, transfer_pb.DeleteObjectsByPrefixResponse>;
}

export class TransferServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  transfer(argument: transfer_pb.TransferRequest, callback: grpc.requestCallback<transfer_pb.TransferResponse>): grpc.ClientUnaryCall;
  transfer(argument: transfer_pb.TransferRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<transfer_pb.TransferResponse>): grpc.ClientUnaryCall;
  transfer(argument: transfer_pb.TransferRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<transfer_pb.TransferResponse>): grpc.ClientUnaryCall;
  delete(argument: transfer_pb.DeleteRequest, callback: grpc.requestCallback<transfer_pb.DeleteResponse>): grpc.ClientUnaryCall;
  delete(argument: transfer_pb.DeleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<transfer_pb.DeleteResponse>): grpc.ClientUnaryCall;
  delete(argument: transfer_pb.DeleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<transfer_pb.DeleteResponse>): grpc.ClientUnaryCall;
  cleanupFineTuning(argument: transfer_pb.CleanupFineTuningRequest, callback: grpc.requestCallback<transfer_pb.CleanupFineTuningResponse>): grpc.ClientUnaryCall;
  cleanupFineTuning(argument: transfer_pb.CleanupFineTuningRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<transfer_pb.CleanupFineTuningResponse>): grpc.ClientUnaryCall;
  cleanupFineTuning(argument: transfer_pb.CleanupFineTuningRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<transfer_pb.CleanupFineTuningResponse>): grpc.ClientUnaryCall;
  deleteObjectsByPrefix(argument: transfer_pb.DeleteObjectsByPrefixRequest, callback: grpc.requestCallback<transfer_pb.DeleteObjectsByPrefixResponse>): grpc.ClientUnaryCall;
  deleteObjectsByPrefix(argument: transfer_pb.DeleteObjectsByPrefixRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<transfer_pb.DeleteObjectsByPrefixResponse>): grpc.ClientUnaryCall;
  deleteObjectsByPrefix(argument: transfer_pb.DeleteObjectsByPrefixRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<transfer_pb.DeleteObjectsByPrefixResponse>): grpc.ClientUnaryCall;
}
