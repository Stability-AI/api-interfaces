// package: gooseai
// file: finetuning.proto

import * as jspb from "google-protobuf";
import * as project_pb from "./project_pb";
import * as dashboard_pb from "./dashboard_pb";

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

  getJobOutputPath(): string;
  setJobOutputPath(value: string): void;

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
    jobOutputPath: string,
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
  }
}

export class FineTuningJobRequestById extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FineTuningJobRequestById.AsObject;
  static toObject(includeInstance: boolean, msg: FineTuningJobRequestById): FineTuningJobRequestById.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FineTuningJobRequestById, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FineTuningJobRequestById;
  static deserializeBinaryFromReader(message: FineTuningJobRequestById, reader: jspb.BinaryReader): FineTuningJobRequestById;
}

export namespace FineTuningJobRequestById {
  export type AsObject = {
    id: string,
  }
}

export class FineTuningJobProgress extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProgress(): number;
  setProgress(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FineTuningJobProgress.AsObject;
  static toObject(includeInstance: boolean, msg: FineTuningJobProgress): FineTuningJobProgress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FineTuningJobProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FineTuningJobProgress;
  static deserializeBinaryFromReader(message: FineTuningJobProgress, reader: jspb.BinaryReader): FineTuningJobProgress;
}

export namespace FineTuningJobProgress {
  export type AsObject = {
    id: string,
    progress: number,
  }
}

export interface FineTuningModeMap {
  NONE: 0;
  FACE: 1;
  STYLE: 2;
  OBJECT: 3;
}

export const FineTuningMode: FineTuningModeMap;

