// package: gooseai
// file: finetuning.proto

import * as finetuning_pb from "./finetuning_pb";
import {grpc} from "@improbable-eng/grpc-web";

type FineTuningServiceCreateFineTuningJob = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.CreateFineTuningJobRequest;
  readonly responseType: typeof finetuning_pb.CreateFineTuningJobResponse;
};

type FineTuningServiceGetFineTuningJobById = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.GetFineTuningJobByIdRequest;
  readonly responseType: typeof finetuning_pb.GetFineTuningJobByIdResponse;
};

type FineTuningServiceUpdateFineTuningJob = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.UpdateFineTuningJobRequest;
  readonly responseType: typeof finetuning_pb.UpdateFineTuningJobResponse;
};

type FineTuningServiceDeleteFineTuningJob = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.DeleteFineTuningJobRequest;
  readonly responseType: typeof finetuning_pb.DeleteFineTuningJobResponse;
};

type FineTuningServiceGetFineTuningJobStatus = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.GetFineTuningJobStatusRequest;
  readonly responseType: typeof finetuning_pb.GetFineTuningJobStatusResponse;
};

type FineTuningServiceResubmitFineTuningJob = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.ResubmitFineTuningJobRequest;
  readonly responseType: typeof finetuning_pb.ResubmitFineTuningJobResponse;
};

type FineTuningServiceGetFineTuningJobsByUserId = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.GetFineTuningJobsByUserIdRequest;
  readonly responseType: typeof finetuning_pb.GetFineTuningJobsByUserIdResponse;
};

type FineTuningServiceGetFineTuningJobsByOrgId = {
  readonly methodName: string;
  readonly service: typeof FineTuningService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finetuning_pb.GetFineTuningJobsByOrgIdRequest;
  readonly responseType: typeof finetuning_pb.GetFineTuningJobsByOrgIdResponse;
};

export class FineTuningService {
  static readonly serviceName: string;
  static readonly CreateFineTuningJob: FineTuningServiceCreateFineTuningJob;
  static readonly GetFineTuningJobById: FineTuningServiceGetFineTuningJobById;
  static readonly UpdateFineTuningJob: FineTuningServiceUpdateFineTuningJob;
  static readonly DeleteFineTuningJob: FineTuningServiceDeleteFineTuningJob;
  static readonly GetFineTuningJobStatus: FineTuningServiceGetFineTuningJobStatus;
  static readonly ResubmitFineTuningJob: FineTuningServiceResubmitFineTuningJob;
  static readonly GetFineTuningJobsByUserId: FineTuningServiceGetFineTuningJobsByUserId;
  static readonly GetFineTuningJobsByOrgId: FineTuningServiceGetFineTuningJobsByOrgId;
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
  createFineTuningJob(
    requestMessage: finetuning_pb.CreateFineTuningJobRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.CreateFineTuningJobResponse|null) => void
  ): UnaryResponse;
  createFineTuningJob(
    requestMessage: finetuning_pb.CreateFineTuningJobRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.CreateFineTuningJobResponse|null) => void
  ): UnaryResponse;
  getFineTuningJobById(
    requestMessage: finetuning_pb.GetFineTuningJobByIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.GetFineTuningJobByIdResponse|null) => void
  ): UnaryResponse;
  getFineTuningJobById(
    requestMessage: finetuning_pb.GetFineTuningJobByIdRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.GetFineTuningJobByIdResponse|null) => void
  ): UnaryResponse;
  updateFineTuningJob(
    requestMessage: finetuning_pb.UpdateFineTuningJobRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.UpdateFineTuningJobResponse|null) => void
  ): UnaryResponse;
  updateFineTuningJob(
    requestMessage: finetuning_pb.UpdateFineTuningJobRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.UpdateFineTuningJobResponse|null) => void
  ): UnaryResponse;
  deleteFineTuningJob(
    requestMessage: finetuning_pb.DeleteFineTuningJobRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.DeleteFineTuningJobResponse|null) => void
  ): UnaryResponse;
  deleteFineTuningJob(
    requestMessage: finetuning_pb.DeleteFineTuningJobRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.DeleteFineTuningJobResponse|null) => void
  ): UnaryResponse;
  getFineTuningJobStatus(
    requestMessage: finetuning_pb.GetFineTuningJobStatusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.GetFineTuningJobStatusResponse|null) => void
  ): UnaryResponse;
  getFineTuningJobStatus(
    requestMessage: finetuning_pb.GetFineTuningJobStatusRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.GetFineTuningJobStatusResponse|null) => void
  ): UnaryResponse;
  resubmitFineTuningJob(
    requestMessage: finetuning_pb.ResubmitFineTuningJobRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.ResubmitFineTuningJobResponse|null) => void
  ): UnaryResponse;
  resubmitFineTuningJob(
    requestMessage: finetuning_pb.ResubmitFineTuningJobRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.ResubmitFineTuningJobResponse|null) => void
  ): UnaryResponse;
  getFineTuningJobsByUserId(
    requestMessage: finetuning_pb.GetFineTuningJobsByUserIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.GetFineTuningJobsByUserIdResponse|null) => void
  ): UnaryResponse;
  getFineTuningJobsByUserId(
    requestMessage: finetuning_pb.GetFineTuningJobsByUserIdRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.GetFineTuningJobsByUserIdResponse|null) => void
  ): UnaryResponse;
  getFineTuningJobsByOrgId(
    requestMessage: finetuning_pb.GetFineTuningJobsByOrgIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.GetFineTuningJobsByOrgIdResponse|null) => void
  ): UnaryResponse;
  getFineTuningJobsByOrgId(
    requestMessage: finetuning_pb.GetFineTuningJobsByOrgIdRequest,
    callback: (error: ServiceError|null, responseMessage: finetuning_pb.GetFineTuningJobsByOrgIdResponse|null) => void
  ): UnaryResponse;
}

