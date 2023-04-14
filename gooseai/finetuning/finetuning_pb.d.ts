// package: gooseai
// file: finetuning.proto

import * as jspb from "google-protobuf";
import * as dashboard_pb from "./dashboard_pb";
import * as project_pb from "./project_pb";

export class FineTuningJob extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): dashboard_pb.User | undefined;
  setUser(value?: dashboard_pb.User): void;

  getModelName(): string;
  setModelName(value: string): void;

  hasMode(): boolean;
  clearMode(): void;
  getMode(): FineTuningModeMap[keyof FineTuningModeMap];
  setMode(value: FineTuningModeMap[keyof FineTuningModeMap]): void;

  hasObjectName(): boolean;
  clearObjectName(): void;
  getObjectName(): string;
  setObjectName(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getDuration(): number;
  setDuration(value: number): void;

  getStatus(): FineTuningJobStatusMap[keyof FineTuningJobStatusMap];
  setStatus(value: FineTuningJobStatusMap[keyof FineTuningJobStatusMap]): void;

  getEngineId(): string;
  setEngineId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FineTuningJob.AsObject;
  static toObject(includeInstance: boolean, msg: FineTuningJob): FineTuningJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FineTuningJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FineTuningJob;
  static deserializeBinaryFromReader(message: FineTuningJob, reader: jspb.BinaryReader): FineTuningJob;
}

export namespace FineTuningJob {
  export type AsObject = {
    id: string,
    user?: dashboard_pb.User.AsObject,
    modelName: string,
    mode: FineTuningModeMap[keyof FineTuningModeMap],
    objectName: string,
    projectId: string,
    duration: number,
    status: FineTuningJobStatusMap[keyof FineTuningJobStatusMap],
    engineId: string,
  }
}

export class CreateFineTuningJobResponse extends jspb.Message {
  hasJob(): boolean;
  clearJob(): void;
  getJob(): FineTuningJob | undefined;
  setJob(value?: FineTuningJob): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFineTuningJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFineTuningJobResponse): CreateFineTuningJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFineTuningJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFineTuningJobResponse;
  static deserializeBinaryFromReader(message: CreateFineTuningJobResponse, reader: jspb.BinaryReader): CreateFineTuningJobResponse;
}

export namespace CreateFineTuningJobResponse {
  export type AsObject = {
    job?: FineTuningJob.AsObject,
  }
}

export class GetFineTuningJobByIdResponse extends jspb.Message {
  hasJob(): boolean;
  clearJob(): void;
  getJob(): FineTuningJob | undefined;
  setJob(value?: FineTuningJob): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFineTuningJobByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFineTuningJobByIdResponse): GetFineTuningJobByIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFineTuningJobByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFineTuningJobByIdResponse;
  static deserializeBinaryFromReader(message: GetFineTuningJobByIdResponse, reader: jspb.BinaryReader): GetFineTuningJobByIdResponse;
}

export namespace GetFineTuningJobByIdResponse {
  export type AsObject = {
    job?: FineTuningJob.AsObject,
  }
}

export class UpdateFineTuningJobResponse extends jspb.Message {
  hasJob(): boolean;
  clearJob(): void;
  getJob(): FineTuningJob | undefined;
  setJob(value?: FineTuningJob): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFineTuningJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFineTuningJobResponse): UpdateFineTuningJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFineTuningJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFineTuningJobResponse;
  static deserializeBinaryFromReader(message: UpdateFineTuningJobResponse, reader: jspb.BinaryReader): UpdateFineTuningJobResponse;
}

export namespace UpdateFineTuningJobResponse {
  export type AsObject = {
    job?: FineTuningJob.AsObject,
  }
}

export class DeleteFineTuningJobResponse extends jspb.Message {
  hasJob(): boolean;
  clearJob(): void;
  getJob(): FineTuningJob | undefined;
  setJob(value?: FineTuningJob): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFineTuningJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFineTuningJobResponse): DeleteFineTuningJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFineTuningJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFineTuningJobResponse;
  static deserializeBinaryFromReader(message: DeleteFineTuningJobResponse, reader: jspb.BinaryReader): DeleteFineTuningJobResponse;
}

export namespace DeleteFineTuningJobResponse {
  export type AsObject = {
    job?: FineTuningJob.AsObject,
  }
}

export class ResubmitFineTuningJobResponse extends jspb.Message {
  hasJob(): boolean;
  clearJob(): void;
  getJob(): FineTuningJob | undefined;
  setJob(value?: FineTuningJob): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResubmitFineTuningJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResubmitFineTuningJobResponse): ResubmitFineTuningJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResubmitFineTuningJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResubmitFineTuningJobResponse;
  static deserializeBinaryFromReader(message: ResubmitFineTuningJobResponse, reader: jspb.BinaryReader): ResubmitFineTuningJobResponse;
}

export namespace ResubmitFineTuningJobResponse {
  export type AsObject = {
    job?: FineTuningJob.AsObject,
  }
}

export class CreateFineTuningJobRequest extends jspb.Message {
  getModelName(): string;
  setModelName(value: string): void;

  hasMode(): boolean;
  clearMode(): void;
  getMode(): FineTuningModeMap[keyof FineTuningModeMap];
  setMode(value: FineTuningModeMap[keyof FineTuningModeMap]): void;

  hasObjectName(): boolean;
  clearObjectName(): void;
  getObjectName(): string;
  setObjectName(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getEngineId(): string;
  setEngineId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFineTuningJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFineTuningJobRequest): CreateFineTuningJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFineTuningJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFineTuningJobRequest;
  static deserializeBinaryFromReader(message: CreateFineTuningJobRequest, reader: jspb.BinaryReader): CreateFineTuningJobRequest;
}

export namespace CreateFineTuningJobRequest {
  export type AsObject = {
    modelName: string,
    mode: FineTuningModeMap[keyof FineTuningModeMap],
    objectName: string,
    projectId: string,
    engineId: string,
  }
}

export class UpdateFineTuningJobRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getModelName(): string;
  setModelName(value: string): void;

  hasMode(): boolean;
  clearMode(): void;
  getMode(): FineTuningModeMap[keyof FineTuningModeMap];
  setMode(value: FineTuningModeMap[keyof FineTuningModeMap]): void;

  hasObjectName(): boolean;
  clearObjectName(): void;
  getObjectName(): string;
  setObjectName(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getEngineId(): string;
  setEngineId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFineTuningJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFineTuningJobRequest): UpdateFineTuningJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFineTuningJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFineTuningJobRequest;
  static deserializeBinaryFromReader(message: UpdateFineTuningJobRequest, reader: jspb.BinaryReader): UpdateFineTuningJobRequest;
}

export namespace UpdateFineTuningJobRequest {
  export type AsObject = {
    id: string,
    modelName: string,
    mode: FineTuningModeMap[keyof FineTuningModeMap],
    objectName: string,
    projectId: string,
    engineId: string,
  }
}

export class GetFineTuningJobByIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFineTuningJobByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFineTuningJobByIdRequest): GetFineTuningJobByIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFineTuningJobByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFineTuningJobByIdRequest;
  static deserializeBinaryFromReader(message: GetFineTuningJobByIdRequest, reader: jspb.BinaryReader): GetFineTuningJobByIdRequest;
}

export namespace GetFineTuningJobByIdRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteFineTuningJobRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFineTuningJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFineTuningJobRequest): DeleteFineTuningJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFineTuningJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFineTuningJobRequest;
  static deserializeBinaryFromReader(message: DeleteFineTuningJobRequest, reader: jspb.BinaryReader): DeleteFineTuningJobRequest;
}

export namespace DeleteFineTuningJobRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetFineTuningJobStatusRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFineTuningJobStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFineTuningJobStatusRequest): GetFineTuningJobStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFineTuningJobStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFineTuningJobStatusRequest;
  static deserializeBinaryFromReader(message: GetFineTuningJobStatusRequest, reader: jspb.BinaryReader): GetFineTuningJobStatusRequest;
}

export namespace GetFineTuningJobStatusRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetFineTuningJobStatusResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getStatus(): FineTuningJobStatusMap[keyof FineTuningJobStatusMap];
  setStatus(value: FineTuningJobStatusMap[keyof FineTuningJobStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFineTuningJobStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFineTuningJobStatusResponse): GetFineTuningJobStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFineTuningJobStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFineTuningJobStatusResponse;
  static deserializeBinaryFromReader(message: GetFineTuningJobStatusResponse, reader: jspb.BinaryReader): GetFineTuningJobStatusResponse;
}

export namespace GetFineTuningJobStatusResponse {
  export type AsObject = {
    id: string,
    status: FineTuningJobStatusMap[keyof FineTuningJobStatusMap],
  }
}

export class ResubmitFineTuningJobRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResubmitFineTuningJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResubmitFineTuningJobRequest): ResubmitFineTuningJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResubmitFineTuningJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResubmitFineTuningJobRequest;
  static deserializeBinaryFromReader(message: ResubmitFineTuningJobRequest, reader: jspb.BinaryReader): ResubmitFineTuningJobRequest;
}

export namespace ResubmitFineTuningJobRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetFineTuningJobsByUserIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFineTuningJobsByUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFineTuningJobsByUserIdRequest): GetFineTuningJobsByUserIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFineTuningJobsByUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFineTuningJobsByUserIdRequest;
  static deserializeBinaryFromReader(message: GetFineTuningJobsByUserIdRequest, reader: jspb.BinaryReader): GetFineTuningJobsByUserIdRequest;
}

export namespace GetFineTuningJobsByUserIdRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetFineTuningJobsByOrgIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFineTuningJobsByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFineTuningJobsByOrgIdRequest): GetFineTuningJobsByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFineTuningJobsByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFineTuningJobsByOrgIdRequest;
  static deserializeBinaryFromReader(message: GetFineTuningJobsByOrgIdRequest, reader: jspb.BinaryReader): GetFineTuningJobsByOrgIdRequest;
}

export namespace GetFineTuningJobsByOrgIdRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetFineTuningJobsByUserIdResponse extends jspb.Message {
  clearJobsList(): void;
  getJobsList(): Array<FineTuningJob>;
  setJobsList(value: Array<FineTuningJob>): void;
  addJobs(value?: FineTuningJob, index?: number): FineTuningJob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFineTuningJobsByUserIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFineTuningJobsByUserIdResponse): GetFineTuningJobsByUserIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFineTuningJobsByUserIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFineTuningJobsByUserIdResponse;
  static deserializeBinaryFromReader(message: GetFineTuningJobsByUserIdResponse, reader: jspb.BinaryReader): GetFineTuningJobsByUserIdResponse;
}

export namespace GetFineTuningJobsByUserIdResponse {
  export type AsObject = {
    jobsList: Array<FineTuningJob.AsObject>,
  }
}

export class GetFineTuningJobsByOrgIdResponse extends jspb.Message {
  clearJobsList(): void;
  getJobsList(): Array<FineTuningJob>;
  setJobsList(value: Array<FineTuningJob>): void;
  addJobs(value?: FineTuningJob, index?: number): FineTuningJob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFineTuningJobsByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFineTuningJobsByOrgIdResponse): GetFineTuningJobsByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFineTuningJobsByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFineTuningJobsByOrgIdResponse;
  static deserializeBinaryFromReader(message: GetFineTuningJobsByOrgIdResponse, reader: jspb.BinaryReader): GetFineTuningJobsByOrgIdResponse;
}

export namespace GetFineTuningJobsByOrgIdResponse {
  export type AsObject = {
    jobsList: Array<FineTuningJob.AsObject>,
  }
}

export interface FineTuningModeMap {
  FINE_TUNING_MODE_NONE_UNSPECIFIED: 0;
  FINE_TUNING_MODE_FACE: 1;
  FINE_TUNING_MODE_STYLE: 2;
  FINE_TUNING_MODE_OBJECT: 3;
}

export const FineTuningMode: FineTuningModeMap;

export interface FineTuningJobStatusMap {
  FINE_TUNING_JOB_STATUS_NOT_STARTED_UNSPECIFIED: 0;
  FINE_TUNING_JOB_STATUS_RUNNING: 1;
  FINE_TUNING_JOB_STATUS_COMPLETED: 2;
  FINE_TUNING_JOB_STATUS_FAILED: 3;
  FINE_TUNING_JOB_STATUS_SUBMITTED: 4;
}

export const FineTuningJobStatus: FineTuningJobStatusMap;

