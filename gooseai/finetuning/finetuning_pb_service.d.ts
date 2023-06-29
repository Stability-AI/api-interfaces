// package: gooseai
// file: finetuning.proto

import * as finetuning_pb from "./finetuning_pb";
import {grpc} from "@improbable-eng/grpc-web";

type FineTuningServiceCreateModel = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.CreateModelRequest;
  readonly responseType: typeof finetuning_pb.CreateModelResponse;
};

type FineTuningServiceGetModel = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.GetModelRequest;
  readonly responseType: typeof finetuning_pb.GetModelResponse;
};

type FineTuningServiceUpdateModel = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.UpdateModelRequest;
  readonly responseType: typeof finetuning_pb.UpdateModelResponse;
};

type FineTuningServiceDeleteModel = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.DeleteModelRequest;
  readonly responseType: typeof finetuning_pb.DeleteModelResponse;
};

type FineTuningServiceResubmitModel = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.ResubmitModelRequest;
  readonly responseType: typeof finetuning_pb.ResubmitModelResponse;
};

type FineTuningServiceListModels = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.ListModelsRequest;
  readonly responseType: typeof finetuning_pb.ListModelsResponse;
};

export class FineTuningService {
  static readonly serviceName: string;
  static readonly CreateModel: FineTuningServiceCreateModel;
  static readonly GetModel: FineTuningServiceGetModel;
  static readonly UpdateModel: FineTuningServiceUpdateModel;
  static readonly DeleteModel: FineTuningServiceDeleteModel;
  static readonly ResubmitModel: FineTuningServiceResubmitModel;
  static readonly ListModels: FineTuningServiceListModels;
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

export class FineTuningServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createModel(
    requestMessage: finetuning_pb.CreateModelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.CreateModelResponse|null) => void
  ): UnaryResponse;
  createModel(
    requestMessage: finetuning_pb.CreateModelRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.CreateModelResponse|null) => void
  ): UnaryResponse;
  getModel(
    requestMessage: finetuning_pb.GetModelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.GetModelResponse|null) => void
  ): UnaryResponse;
  getModel(
    requestMessage: finetuning_pb.GetModelRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.GetModelResponse|null) => void
  ): UnaryResponse;
  updateModel(
    requestMessage: finetuning_pb.UpdateModelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.UpdateModelResponse|null) => void
  ): UnaryResponse;
  updateModel(
    requestMessage: finetuning_pb.UpdateModelRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.UpdateModelResponse|null) => void
  ): UnaryResponse;
  deleteModel(
    requestMessage: finetuning_pb.DeleteModelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.DeleteModelResponse|null) => void
  ): UnaryResponse;
  deleteModel(
    requestMessage: finetuning_pb.DeleteModelRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.DeleteModelResponse|null) => void
  ): UnaryResponse;
  resubmitModel(
    requestMessage: finetuning_pb.ResubmitModelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.ResubmitModelResponse|null) => void
  ): UnaryResponse;
  resubmitModel(
    requestMessage: finetuning_pb.ResubmitModelRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.ResubmitModelResponse|null) => void
  ): UnaryResponse;
  listModels(
    requestMessage: finetuning_pb.ListModelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.ListModelsResponse|null) => void
  ): UnaryResponse;
  listModels(
    requestMessage: finetuning_pb.ListModelsRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.ListModelsResponse|null) => void
  ): UnaryResponse;
}

