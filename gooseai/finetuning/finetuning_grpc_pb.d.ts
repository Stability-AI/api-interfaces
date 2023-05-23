// GENERATED CODE -- DO NOT EDIT!

// package: gooseai
// file: finetuning.proto

import * as finetuning_pb from "./finetuning_pb";
import * as grpc from "grpc";

interface IFineTuningServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createModel: grpc.MethodDefinition<finetuning_pb.CreateModelRequest, finetuning_pb.CreateModelResponse>;
  getModel: grpc.MethodDefinition<finetuning_pb.GetModelRequest, finetuning_pb.GetModelResponse>;
  updateModel: grpc.MethodDefinition<finetuning_pb.UpdateModelRequest, finetuning_pb.UpdateModelResponse>;
  deleteModel: grpc.MethodDefinition<finetuning_pb.DeleteModelRequest, finetuning_pb.DeleteModelResponse>;
  resubmitModel: grpc.MethodDefinition<finetuning_pb.ResubmitModelRequest, finetuning_pb.ResubmitModelResponse>;
  listModels: grpc.MethodDefinition<finetuning_pb.ListModelsRequest, finetuning_pb.ListModelsResponse>;
}

export const FineTuningServiceService: IFineTuningServiceService;

export interface IFineTuningServiceServer extends grpc.UntypedServiceImplementation {
  createModel: grpc.handleUnaryCall<finetuning_pb.CreateModelRequest, finetuning_pb.CreateModelResponse>;
  getModel: grpc.handleUnaryCall<finetuning_pb.GetModelRequest, finetuning_pb.GetModelResponse>;
  updateModel: grpc.handleUnaryCall<finetuning_pb.UpdateModelRequest, finetuning_pb.UpdateModelResponse>;
  deleteModel: grpc.handleUnaryCall<finetuning_pb.DeleteModelRequest, finetuning_pb.DeleteModelResponse>;
  resubmitModel: grpc.handleUnaryCall<finetuning_pb.ResubmitModelRequest, finetuning_pb.ResubmitModelResponse>;
  listModels: grpc.handleUnaryCall<finetuning_pb.ListModelsRequest, finetuning_pb.ListModelsResponse>;
}

export class FineTuningServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createModel(argument: finetuning_pb.CreateModelRequest, callback: grpc.requestCallback<finetuning_pb.CreateModelResponse>): grpc.ClientUnaryCall;
  createModel(argument: finetuning_pb.CreateModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.CreateModelResponse>): grpc.ClientUnaryCall;
  createModel(argument: finetuning_pb.CreateModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.CreateModelResponse>): grpc.ClientUnaryCall;
  getModel(argument: finetuning_pb.GetModelRequest, callback: grpc.requestCallback<finetuning_pb.GetModelResponse>): grpc.ClientUnaryCall;
  getModel(argument: finetuning_pb.GetModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.GetModelResponse>): grpc.ClientUnaryCall;
  getModel(argument: finetuning_pb.GetModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.GetModelResponse>): grpc.ClientUnaryCall;
  updateModel(argument: finetuning_pb.UpdateModelRequest, callback: grpc.requestCallback<finetuning_pb.UpdateModelResponse>): grpc.ClientUnaryCall;
  updateModel(argument: finetuning_pb.UpdateModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.UpdateModelResponse>): grpc.ClientUnaryCall;
  updateModel(argument: finetuning_pb.UpdateModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.UpdateModelResponse>): grpc.ClientUnaryCall;
  deleteModel(argument: finetuning_pb.DeleteModelRequest, callback: grpc.requestCallback<finetuning_pb.DeleteModelResponse>): grpc.ClientUnaryCall;
  deleteModel(argument: finetuning_pb.DeleteModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.DeleteModelResponse>): grpc.ClientUnaryCall;
  deleteModel(argument: finetuning_pb.DeleteModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.DeleteModelResponse>): grpc.ClientUnaryCall;
  resubmitModel(argument: finetuning_pb.ResubmitModelRequest, callback: grpc.requestCallback<finetuning_pb.ResubmitModelResponse>): grpc.ClientUnaryCall;
  resubmitModel(argument: finetuning_pb.ResubmitModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.ResubmitModelResponse>): grpc.ClientUnaryCall;
  resubmitModel(argument: finetuning_pb.ResubmitModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.ResubmitModelResponse>): grpc.ClientUnaryCall;
  listModels(argument: finetuning_pb.ListModelsRequest, callback: grpc.requestCallback<finetuning_pb.ListModelsResponse>): grpc.ClientUnaryCall;
  listModels(argument: finetuning_pb.ListModelsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.ListModelsResponse>): grpc.ClientUnaryCall;
  listModels(argument: finetuning_pb.ListModelsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.ListModelsResponse>): grpc.ClientUnaryCall;
}
