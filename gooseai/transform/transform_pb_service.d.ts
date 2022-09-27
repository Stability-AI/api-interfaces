// package: gooseai
// file: transform.proto

import * as transform_pb from "./transform_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TransformServiceTransform = {
  readonly methodName: string;
  readonly service: typeof TransformService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof transform_pb.Request;
  readonly responseType: typeof transform_pb.Result;
};

export class TransformService {
  static readonly serviceName: string;
  static readonly Transform: TransformServiceTransform;
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

export class TransformServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  transform(requestMessage: transform_pb.Request, metadata?: grpc.Metadata): ResponseStream<transform_pb.Result>;
}

