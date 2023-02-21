// GENERATED CODE -- DO NOT EDIT!

// package: gooseai
// file: transfer.proto

import * as transfer_pb from "./transfer_pb";
import * as grpc from "grpc";

interface ITransferServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  transfer: grpc.MethodDefinition<transfer_pb.TransferRequest, transfer_pb.TransferResponse>;
}

export const TransferServiceService: ITransferServiceService;

export interface ITransferServiceServer extends grpc.UntypedServiceImplementation {
  transfer: grpc.handleUnaryCall<transfer_pb.TransferRequest, transfer_pb.TransferResponse>;
}

export class TransferServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  transfer(argument: transfer_pb.TransferRequest, callback: grpc.requestCallback<transfer_pb.TransferResponse>): grpc.ClientUnaryCall;
  transfer(argument: transfer_pb.TransferRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<transfer_pb.TransferResponse>): grpc.ClientUnaryCall;
  transfer(argument: transfer_pb.TransferRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<transfer_pb.TransferResponse>): grpc.ClientUnaryCall;
}