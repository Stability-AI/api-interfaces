// package: gooseai
// file: transfer.proto

import * as transfer_pb from "./transfer_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TransferServiceTransfer = {
  readonly methodName: string;
  readonly service: typeof TransferService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transfer_pb.TransferRequest;
  readonly responseType: typeof transfer_pb.TransferResponse;
};

type TransferServiceDelete = {
  readonly methodName: string;
  readonly service: typeof TransferService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transfer_pb.DeleteRequest;
  readonly responseType: typeof transfer_pb.DeleteResponse;
};

type TransferServiceDeleteObjectsByPrefix = {
  readonly methodName: string;
  readonly service: typeof TransferService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof transfer_pb.DeleteObjectsByPrefixRequest;
  readonly responseType: typeof transfer_pb.DeleteObjectsByPrefixResponse;
};

export class TransferService {
  static readonly serviceName: string;
  static readonly Transfer: TransferServiceTransfer;
  static readonly Delete: TransferServiceDelete;
  static readonly DeleteObjectsByPrefix: TransferServiceDeleteObjectsByPrefix;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class TransferServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  transfer(
    requestMessage: transfer_pb.TransferRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transfer_pb.TransferResponse|null) => void
  ): UnaryResponse;
  transfer(
    requestMessage: transfer_pb.TransferRequest,
    callback: (error: ServiceError|null, responseMessage: transfer_pb.TransferResponse|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: transfer_pb.DeleteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transfer_pb.DeleteResponse|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: transfer_pb.DeleteRequest,
    callback: (error: ServiceError|null, responseMessage: transfer_pb.DeleteResponse|null) => void
  ): UnaryResponse;
  deleteObjectsByPrefix(
    requestMessage: transfer_pb.DeleteObjectsByPrefixRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: transfer_pb.DeleteObjectsByPrefixResponse|null) => void
  ): UnaryResponse;
  deleteObjectsByPrefix(
    requestMessage: transfer_pb.DeleteObjectsByPrefixRequest,
    callback: (error: ServiceError|null, responseMessage: transfer_pb.DeleteObjectsByPrefixResponse|null) => void
  ): UnaryResponse;
}

