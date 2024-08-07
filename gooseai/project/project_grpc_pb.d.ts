// GENERATED CODE -- DO NOT EDIT!

// package: gooseai
// file: project.proto

import * as project_pb from "./project_pb";
import * as grpc from "grpc";

interface IProjectServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<project_pb.CreateProjectRequest, project_pb.Project>;
  update: grpc.MethodDefinition<project_pb.UpdateProjectRequest, project_pb.Project>;
  list: grpc.MethodDefinition<project_pb.ListProjectRequest, project_pb.Project>;
  get: grpc.MethodDefinition<project_pb.GetProjectRequest, project_pb.Project>;
  delete: grpc.MethodDefinition<project_pb.DeleteProjectRequest, project_pb.Project>;
  tagAssets: grpc.MethodDefinition<project_pb.TagAssetsRequest, project_pb.TagAssetsResponse>;
  untagAssets: grpc.MethodDefinition<project_pb.UntagAssetsRequest, project_pb.UntagAssetsResponse>;
  queryAssets: grpc.MethodDefinition<project_pb.QueryAssetsRequest, project_pb.QueryAssetsResponse>;
  deleteAssets: grpc.MethodDefinition<project_pb.DeleteAssetsRequest, project_pb.DeleteAssetsResponse>;
}

export const ProjectServiceService: IProjectServiceService;

export interface IProjectServiceServer extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<project_pb.CreateProjectRequest, project_pb.Project>;
  update: grpc.handleUnaryCall<project_pb.UpdateProjectRequest, project_pb.Project>;
  list: grpc.handleServerStreamingCall<project_pb.ListProjectRequest, project_pb.Project>;
  get: grpc.handleUnaryCall<project_pb.GetProjectRequest, project_pb.Project>;
  delete: grpc.handleUnaryCall<project_pb.DeleteProjectRequest, project_pb.Project>;
  tagAssets: grpc.handleUnaryCall<project_pb.TagAssetsRequest, project_pb.TagAssetsResponse>;
  untagAssets: grpc.handleUnaryCall<project_pb.UntagAssetsRequest, project_pb.UntagAssetsResponse>;
  queryAssets: grpc.handleUnaryCall<project_pb.QueryAssetsRequest, project_pb.QueryAssetsResponse>;
  deleteAssets: grpc.handleUnaryCall<project_pb.DeleteAssetsRequest, project_pb.DeleteAssetsResponse>;
}

export class ProjectServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: project_pb.CreateProjectRequest, callback: grpc.requestCallback<project_pb.Project>): grpc.ClientUnaryCall;
  create(argument: project_pb.CreateProjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<project_pb.Project>): grpc.ClientUnaryCall;
  create(argument: project_pb.CreateProjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<project_pb.Project>): grpc.ClientUnaryCall;
  update(argument: project_pb.UpdateProjectRequest, callback: grpc.requestCallback<project_pb.Project>): grpc.ClientUnaryCall;
  update(argument: project_pb.UpdateProjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<project_pb.Project>): grpc.ClientUnaryCall;
  update(argument: project_pb.UpdateProjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<project_pb.Project>): grpc.ClientUnaryCall;
  list(argument: project_pb.ListProjectRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<project_pb.Project>;
  list(argument: project_pb.ListProjectRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<project_pb.Project>;
  get(argument: project_pb.GetProjectRequest, callback: grpc.requestCallback<project_pb.Project>): grpc.ClientUnaryCall;
  get(argument: project_pb.GetProjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<project_pb.Project>): grpc.ClientUnaryCall;
  get(argument: project_pb.GetProjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<project_pb.Project>): grpc.ClientUnaryCall;
  delete(argument: project_pb.DeleteProjectRequest, callback: grpc.requestCallback<project_pb.Project>): grpc.ClientUnaryCall;
  delete(argument: project_pb.DeleteProjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<project_pb.Project>): grpc.ClientUnaryCall;
  delete(argument: project_pb.DeleteProjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<project_pb.Project>): grpc.ClientUnaryCall;
  tagAssets(argument: project_pb.TagAssetsRequest, callback: grpc.requestCallback<project_pb.TagAssetsResponse>): grpc.ClientUnaryCall;
  tagAssets(argument: project_pb.TagAssetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<project_pb.TagAssetsResponse>): grpc.ClientUnaryCall;
  tagAssets(argument: project_pb.TagAssetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<project_pb.TagAssetsResponse>): grpc.ClientUnaryCall;
  untagAssets(argument: project_pb.UntagAssetsRequest, callback: grpc.requestCallback<project_pb.UntagAssetsResponse>): grpc.ClientUnaryCall;
  untagAssets(argument: project_pb.UntagAssetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<project_pb.UntagAssetsResponse>): grpc.ClientUnaryCall;
  untagAssets(argument: project_pb.UntagAssetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<project_pb.UntagAssetsResponse>): grpc.ClientUnaryCall;
  queryAssets(argument: project_pb.QueryAssetsRequest, callback: grpc.requestCallback<project_pb.QueryAssetsResponse>): grpc.ClientUnaryCall;
  queryAssets(argument: project_pb.QueryAssetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<project_pb.QueryAssetsResponse>): grpc.ClientUnaryCall;
  queryAssets(argument: project_pb.QueryAssetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<project_pb.QueryAssetsResponse>): grpc.ClientUnaryCall;
  deleteAssets(argument: project_pb.DeleteAssetsRequest, callback: grpc.requestCallback<project_pb.DeleteAssetsResponse>): grpc.ClientUnaryCall;
  deleteAssets(argument: project_pb.DeleteAssetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<project_pb.DeleteAssetsResponse>): grpc.ClientUnaryCall;
  deleteAssets(argument: project_pb.DeleteAssetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<project_pb.DeleteAssetsResponse>): grpc.ClientUnaryCall;
}
