// package: gooseai
// file: finetuning.proto

import * as finetuning_pb from "./finetuning_pb";
import {grpc} from "@improbable-eng/grpc-web";

type FineTuningServiceCreateFineTuningModel = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.CreateFineTuningModelRequest;
  readonly responseType: typeof finetuning_pb.CreateFineTuningModelResponse;
};

type FineTuningServiceGetFineTuningModelById = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.GetFineTuningModelByIdRequest;
  readonly responseType: typeof finetuning_pb.GetFineTuningModelByIdResponse;
};

type FineTuningServiceUpdateFineTuningModel = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.UpdateFineTuningModelRequest;
  readonly responseType: typeof finetuning_pb.UpdateFineTuningModelResponse;
};

type FineTuningServiceDeleteFineTuningModel = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.DeleteFineTuningModelRequest;
  readonly responseType: typeof finetuning_pb.DeleteFineTuningModelResponse;
};

type FineTuningServiceGetFineTuningModelStatus = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.GetFineTuningModelStatusRequest;
  readonly responseType: typeof finetuning_pb.GetFineTuningModelStatusResponse;
};

type FineTuningServiceResubmitFineTuningModel = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.ResubmitFineTuningModelRequest;
  readonly responseType: typeof finetuning_pb.ResubmitFineTuningModelResponse;
};

type FineTuningServiceGetFineTuningModelsByUserId = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.GetFineTuningModelsByUserIdRequest;
  readonly responseType: typeof finetuning_pb.GetFineTuningModelsByUserIdResponse;
};

type FineTuningServiceGetFineTuningModelsByOrgId = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.GetFineTuningModelsByOrgIdRequest;
  readonly responseType: typeof finetuning_pb.GetFineTuningModelsByOrgIdResponse;
};

export class FineTuningService {
  static readonly serviceName: string;
  static readonly CreateFineTuningModel: FineTuningServiceCreateFineTuningModel;
  static readonly GetFineTuningModelById: FineTuningServiceGetFineTuningModelById;
  static readonly UpdateFineTuningModel: FineTuningServiceUpdateFineTuningModel;
  static readonly DeleteFineTuningModel: FineTuningServiceDeleteFineTuningModel;
  static readonly GetFineTuningModelStatus: FineTuningServiceGetFineTuningModelStatus;
  static readonly ResubmitFineTuningModel: FineTuningServiceResubmitFineTuningModel;
  static readonly GetFineTuningModelsByUserId: FineTuningServiceGetFineTuningModelsByUserId;
  static readonly GetFineTuningModelsByOrgId: FineTuningServiceGetFineTuningModelsByOrgId;
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
  createFineTuningModel(
    requestMessage: finetuning_pb.CreateFineTuningModelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.CreateFineTuningModelResponse|null) => void
  ): UnaryResponse;
  createFineTuningModel(
    requestMessage: finetuning_pb.CreateFineTuningModelRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.CreateFineTuningModelResponse|null) => void
  ): UnaryResponse;
  getFineTuningModelById(
    requestMessage: finetuning_pb.GetFineTuningModelByIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.GetFineTuningModelByIdResponse|null) => void
  ): UnaryResponse;
  getFineTuningModelById(
    requestMessage: finetuning_pb.GetFineTuningModelByIdRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.GetFineTuningModelByIdResponse|null) => void
  ): UnaryResponse;
  updateFineTuningModel(
    requestMessage: finetuning_pb.UpdateFineTuningModelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.UpdateFineTuningModelResponse|null) => void
  ): UnaryResponse;
  updateFineTuningModel(
    requestMessage: finetuning_pb.UpdateFineTuningModelRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.UpdateFineTuningModelResponse|null) => void
  ): UnaryResponse;
  deleteFineTuningModel(
    requestMessage: finetuning_pb.DeleteFineTuningModelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.DeleteFineTuningModelResponse|null) => void
  ): UnaryResponse;
  deleteFineTuningModel(
    requestMessage: finetuning_pb.DeleteFineTuningModelRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.DeleteFineTuningModelResponse|null) => void
  ): UnaryResponse;
  getFineTuningModelStatus(
    requestMessage: finetuning_pb.GetFineTuningModelStatusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.GetFineTuningModelStatusResponse|null) => void
  ): UnaryResponse;
  getFineTuningModelStatus(
    requestMessage: finetuning_pb.GetFineTuningModelStatusRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.GetFineTuningModelStatusResponse|null) => void
  ): UnaryResponse;
  resubmitFineTuningModel(
    requestMessage: finetuning_pb.ResubmitFineTuningModelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.ResubmitFineTuningModelResponse|null) => void
  ): UnaryResponse;
  resubmitFineTuningModel(
    requestMessage: finetuning_pb.ResubmitFineTuningModelRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.ResubmitFineTuningModelResponse|null) => void
  ): UnaryResponse;
  getFineTuningModelsByUserId(
    requestMessage: finetuning_pb.GetFineTuningModelsByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.GetFineTuningModelsByUserIdResponse|null) => void
  ): UnaryResponse;
  getFineTuningModelsByUserId(
    requestMessage: finetuning_pb.GetFineTuningModelsByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.GetFineTuningModelsByUserIdResponse|null) => void
  ): UnaryResponse;
  getFineTuningModelsByOrgId(
    requestMessage: finetuning_pb.GetFineTuningModelsByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.GetFineTuningModelsByOrgIdResponse|null) => void
  ): UnaryResponse;
  getFineTuningModelsByOrgId(
    requestMessage: finetuning_pb.GetFineTuningModelsByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.GetFineTuningModelsByOrgIdResponse|null) => void
  ): UnaryResponse;
}

