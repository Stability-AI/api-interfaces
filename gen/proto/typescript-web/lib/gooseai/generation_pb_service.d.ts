// package: gooseai
// file: gooseai/generation.proto

import * as gooseai_generation_pb from "../gooseai/generation_pb";
import {grpc} from "@improbable-eng/grpc-web";

type GenerationServiceGenerate = {
  readonly methodName: string;
  readonly service: typeof GenerationService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof gooseai_generation_pb.Request;
  readonly responseType: typeof gooseai_generation_pb.Answer;
};

type GenerationServiceChainGenerate = {
  readonly methodName: string;
  readonly service: typeof GenerationService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof gooseai_generation_pb.ChainRequest;
  readonly responseType: typeof gooseai_generation_pb.Answer;
};

export class GenerationService {
  static readonly serviceName: string;
  static readonly Generate: GenerationServiceGenerate;
  static readonly ChainGenerate: GenerationServiceChainGenerate;
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

export class GenerationServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  generate(requestMessage: gooseai_generation_pb.Request, metadata?: grpc.Metadata): ResponseStream<gooseai_generation_pb.Answer>;
  chainGenerate(requestMessage: gooseai_generation_pb.ChainRequest, metadata?: grpc.Metadata): ResponseStream<gooseai_generation_pb.Answer>;
}

