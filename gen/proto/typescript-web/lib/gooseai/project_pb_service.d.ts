// package: gooseai
// file: gooseai/project.proto

import * as gooseai_project_pb from "../gooseai/project_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ProjectServiceCreate = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gooseai_project_pb.CreateProjectRequest;
  readonly responseType: typeof gooseai_project_pb.Project;
};

type ProjectServiceUpdate = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gooseai_project_pb.UpdateProjectRequest;
  readonly responseType: typeof gooseai_project_pb.Project;
};

type ProjectServiceList = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof gooseai_project_pb.ListProjectRequest;
  readonly responseType: typeof gooseai_project_pb.Project;
};

type ProjectServiceGet = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gooseai_project_pb.GetProjectRequest;
  readonly responseType: typeof gooseai_project_pb.Project;
};

type ProjectServiceDelete = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gooseai_project_pb.DeleteProjectRequest;
  readonly responseType: typeof gooseai_project_pb.Project;
};

export class ProjectService {
  static readonly serviceName: string;
  static readonly Create: ProjectServiceCreate;
  static readonly Update: ProjectServiceUpdate;
  static readonly List: ProjectServiceList;
  static readonly Get: ProjectServiceGet;
  static readonly Delete: ProjectServiceDelete;
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

export class ProjectServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  create(
    requestMessage: gooseai_project_pb.CreateProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gooseai_project_pb.Project|null) => void
  ): UnaryResponse;
  create(
    requestMessage: gooseai_project_pb.CreateProjectRequest,
    callback: (error: ServiceError|null, responseMessage: gooseai_project_pb.Project|null) => void
  ): UnaryResponse;
  update(
    requestMessage: gooseai_project_pb.UpdateProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gooseai_project_pb.Project|null) => void
  ): UnaryResponse;
  update(
    requestMessage: gooseai_project_pb.UpdateProjectRequest,
    callback: (error: ServiceError|null, responseMessage: gooseai_project_pb.Project|null) => void
  ): UnaryResponse;
  list(requestMessage: gooseai_project_pb.ListProjectRequest, metadata?: grpc.Metadata): ResponseStream<gooseai_project_pb.Project>;
  get(
    requestMessage: gooseai_project_pb.GetProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gooseai_project_pb.Project|null) => void
  ): UnaryResponse;
  get(
    requestMessage: gooseai_project_pb.GetProjectRequest,
    callback: (error: ServiceError|null, responseMessage: gooseai_project_pb.Project|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: gooseai_project_pb.DeleteProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gooseai_project_pb.Project|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: gooseai_project_pb.DeleteProjectRequest,
    callback: (error: ServiceError|null, responseMessage: gooseai_project_pb.Project|null) => void
  ): UnaryResponse;
}

