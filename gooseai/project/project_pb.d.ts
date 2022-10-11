// package: gooseai
// file: project.proto

import * as jspb from "google-protobuf";

export class ProjectAsset extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUri(): string;
  setUri(value: string): void;

  getUse(): ProjectAssetUseMap[keyof ProjectAssetUseMap];
  setUse(value: ProjectAssetUseMap[keyof ProjectAssetUseMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectAsset.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectAsset): ProjectAsset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectAsset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectAsset;
  static deserializeBinaryFromReader(message: ProjectAsset, reader: jspb.BinaryReader): ProjectAsset;
}

export namespace ProjectAsset {
  export type AsObject = {
    id: number,
    uri: string,
    use: ProjectAssetUseMap[keyof ProjectAssetUseMap],
  }
}

export class Project extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  getAccess(): ProjectAccessMap[keyof ProjectAccessMap];
  setAccess(value: ProjectAccessMap[keyof ProjectAccessMap]): void;

  getStatus(): ProjectStatusMap[keyof ProjectStatusMap];
  setStatus(value: ProjectStatusMap[keyof ProjectStatusMap]): void;

  getSize(): number;
  setSize(value: number): void;

  hasFile(): boolean;
  clearFile(): void;
  getFile(): ProjectAsset | undefined;
  setFile(value?: ProjectAsset): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): void;

  clearAssetsList(): void;
  getAssetsList(): Array<ProjectAsset>;
  setAssetsList(value: Array<ProjectAsset>): void;
  addAssets(value?: ProjectAsset, index?: number): ProjectAsset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Project;
  static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
  export type AsObject = {
    id: number,
    title: string,
    owner: string,
    access: ProjectAccessMap[keyof ProjectAccessMap],
    status: ProjectStatusMap[keyof ProjectStatusMap],
    size: number,
    file?: ProjectAsset.AsObject,
    createdAt: number,
    updatedAt: number,
    assetsList: Array<ProjectAsset.AsObject>,
  }
}

export class CreateProjectRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): string;
  setOwner(value: string): void;

  getAccess(): ProjectAccessMap[keyof ProjectAccessMap];
  setAccess(value: ProjectAccessMap[keyof ProjectAccessMap]): void;

  getStatus(): ProjectStatusMap[keyof ProjectStatusMap];
  setStatus(value: ProjectStatusMap[keyof ProjectStatusMap]): void;

  hasFile(): boolean;
  clearFile(): void;
  getFile(): ProjectAsset | undefined;
  setFile(value?: ProjectAsset): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectRequest): CreateProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectRequest;
  static deserializeBinaryFromReader(message: CreateProjectRequest, reader: jspb.BinaryReader): CreateProjectRequest;
}

export namespace CreateProjectRequest {
  export type AsObject = {
    title: string,
    owner: string,
    access: ProjectAccessMap[keyof ProjectAccessMap],
    status: ProjectStatusMap[keyof ProjectStatusMap],
    file?: ProjectAsset.AsObject,
  }
}

export class UpdateProjectRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): string;
  setOwner(value: string): void;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): string;
  setTitle(value: string): void;

  hasAccess(): boolean;
  clearAccess(): void;
  getAccess(): ProjectAccessMap[keyof ProjectAccessMap];
  setAccess(value: ProjectAccessMap[keyof ProjectAccessMap]): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): ProjectStatusMap[keyof ProjectStatusMap];
  setStatus(value: ProjectStatusMap[keyof ProjectStatusMap]): void;

  hasFile(): boolean;
  clearFile(): void;
  getFile(): ProjectAsset | undefined;
  setFile(value?: ProjectAsset): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectRequest): UpdateProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectRequest;
  static deserializeBinaryFromReader(message: UpdateProjectRequest, reader: jspb.BinaryReader): UpdateProjectRequest;
}

export namespace UpdateProjectRequest {
  export type AsObject = {
    id: number,
    owner: string,
    title: string,
    access: ProjectAccessMap[keyof ProjectAccessMap],
    status: ProjectStatusMap[keyof ProjectStatusMap],
    file?: ProjectAsset.AsObject,
  }
}

export class ListProjectRequest extends jspb.Message {
  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): string;
  setOwner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectRequest): ListProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectRequest;
  static deserializeBinaryFromReader(message: ListProjectRequest, reader: jspb.BinaryReader): ListProjectRequest;
}

export namespace ListProjectRequest {
  export type AsObject = {
    owner: string,
  }
}

export class GetDeleteProjectRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): string;
  setOwner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeleteProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeleteProjectRequest): GetDeleteProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeleteProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeleteProjectRequest;
  static deserializeBinaryFromReader(message: GetDeleteProjectRequest, reader: jspb.BinaryReader): GetDeleteProjectRequest;
}

export namespace GetDeleteProjectRequest {
  export type AsObject = {
    id: number,
    owner: string,
  }
}

export class ProjectEmpty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectEmpty.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectEmpty): ProjectEmpty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectEmpty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectEmpty;
  static deserializeBinaryFromReader(message: ProjectEmpty, reader: jspb.BinaryReader): ProjectEmpty;
}

export namespace ProjectEmpty {
  export type AsObject = {
  }
}

export interface ProjectAccessMap {
  PROJECT_ACCESS_PRIVATE: 0;
  PROJECT_ACCESS_PUBLIC: 1;
}

export const ProjectAccess: ProjectAccessMap;

export interface ProjectStatusMap {
  PROJECT_STATUS_INACTIVE: 0;
  PROJECT_STATUS_ACTIVE: 1;
}

export const ProjectStatus: ProjectStatusMap;

export interface ProjectAssetUseMap {
  PROJECT_ASSET_USE_INPUT: 0;
  PROJECT_ASSET_USE_OUTPUT: 1;
  PROJECT_ASSET_USE_INTERMEDIATE: 2;
  PROJECT_ASSET_USE_PROJECT: 3;
}

export const ProjectAssetUse: ProjectAssetUseMap;

