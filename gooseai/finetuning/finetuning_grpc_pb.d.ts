// GENERATED CODE -- DO NOT EDIT!

// package: gooseai
// file: finetuning.proto

import * as finetuning_pb from "./finetuning_pb";
import * as grpc from "grpc";

interface IFineTuningServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createFineTuningJob: grpc.MethodDefinition<finetuning_pb.CreateFineTuningJobRequest, finetuning_pb.CreateFineTuningJobResponse>;
  getFineTuningJobById: grpc.MethodDefinition<finetuning_pb.GetFineTuningJobByIdRequest, finetuning_pb.GetFineTuningJobByIdResponse>;
  updateFineTuningJob: grpc.MethodDefinition<finetuning_pb.UpdateFineTuningJobRequest, finetuning_pb.UpdateFineTuningJobResponse>;
  deleteFineTuningJob: grpc.MethodDefinition<finetuning_pb.DeleteFineTuningJobRequest, finetuning_pb.DeleteFineTuningJobResponse>;
  getFineTuningJobStatus: grpc.MethodDefinition<finetuning_pb.GetFineTuningJobStatusRequest, finetuning_pb.GetFineTuningJobStatusResponse>;
  resubmitFineTuningJob: grpc.MethodDefinition<finetuning_pb.ResubmitFineTuningJobRequest, finetuning_pb.ResubmitFineTuningJobResponse>;
  getJobsByUserId: grpc.MethodDefinition<finetuning_pb.GetJobsByUserIdRequest, finetuning_pb.GetJobsByUserIdResponse>;
  getJobsByOrgId: grpc.MethodDefinition<finetuning_pb.GetJobsByOrgIdRequest, finetuning_pb.GetJobsByOrgIdResponse>;
}

export const FineTuningServiceService: IFineTuningServiceService;

export interface IFineTuningServiceServer extends grpc.UntypedServiceImplementation {
  createFineTuningJob: grpc.handleUnaryCall<finetuning_pb.CreateFineTuningJobRequest, finetuning_pb.CreateFineTuningJobResponse>;
  getFineTuningJobById: grpc.handleUnaryCall<finetuning_pb.GetFineTuningJobByIdRequest, finetuning_pb.GetFineTuningJobByIdResponse>;
  updateFineTuningJob: grpc.handleUnaryCall<finetuning_pb.UpdateFineTuningJobRequest, finetuning_pb.UpdateFineTuningJobResponse>;
  deleteFineTuningJob: grpc.handleUnaryCall<finetuning_pb.DeleteFineTuningJobRequest, finetuning_pb.DeleteFineTuningJobResponse>;
  getFineTuningJobStatus: grpc.handleUnaryCall<finetuning_pb.GetFineTuningJobStatusRequest, finetuning_pb.GetFineTuningJobStatusResponse>;
  resubmitFineTuningJob: grpc.handleUnaryCall<finetuning_pb.ResubmitFineTuningJobRequest, finetuning_pb.ResubmitFineTuningJobResponse>;
  getJobsByUserId: grpc.handleUnaryCall<finetuning_pb.GetJobsByUserIdRequest, finetuning_pb.GetJobsByUserIdResponse>;
  getJobsByOrgId: grpc.handleUnaryCall<finetuning_pb.GetJobsByOrgIdRequest, finetuning_pb.GetJobsByOrgIdResponse>;
}

export class FineTuningServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createFineTuningJob(argument: finetuning_pb.CreateFineTuningJobRequest, callback: grpc.requestCallback<finetuning_pb.CreateFineTuningJobResponse>): grpc.ClientUnaryCall;
  createFineTuningJob(argument: finetuning_pb.CreateFineTuningJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.CreateFineTuningJobResponse>): grpc.ClientUnaryCall;
  createFineTuningJob(argument: finetuning_pb.CreateFineTuningJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.CreateFineTuningJobResponse>): grpc.ClientUnaryCall;
  getFineTuningJobById(argument: finetuning_pb.GetFineTuningJobByIdRequest, callback: grpc.requestCallback<finetuning_pb.GetFineTuningJobByIdResponse>): grpc.ClientUnaryCall;
  getFineTuningJobById(argument: finetuning_pb.GetFineTuningJobByIdRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.GetFineTuningJobByIdResponse>): grpc.ClientUnaryCall;
  getFineTuningJobById(argument: finetuning_pb.GetFineTuningJobByIdRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.GetFineTuningJobByIdResponse>): grpc.ClientUnaryCall;
  updateFineTuningJob(argument: finetuning_pb.UpdateFineTuningJobRequest, callback: grpc.requestCallback<finetuning_pb.UpdateFineTuningJobResponse>): grpc.ClientUnaryCall;
  updateFineTuningJob(argument: finetuning_pb.UpdateFineTuningJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.UpdateFineTuningJobResponse>): grpc.ClientUnaryCall;
  updateFineTuningJob(argument: finetuning_pb.UpdateFineTuningJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.UpdateFineTuningJobResponse>): grpc.ClientUnaryCall;
  deleteFineTuningJob(argument: finetuning_pb.DeleteFineTuningJobRequest, callback: grpc.requestCallback<finetuning_pb.DeleteFineTuningJobResponse>): grpc.ClientUnaryCall;
  deleteFineTuningJob(argument: finetuning_pb.DeleteFineTuningJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.DeleteFineTuningJobResponse>): grpc.ClientUnaryCall;
  deleteFineTuningJob(argument: finetuning_pb.DeleteFineTuningJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.DeleteFineTuningJobResponse>): grpc.ClientUnaryCall;
  getFineTuningJobStatus(argument: finetuning_pb.GetFineTuningJobStatusRequest, callback: grpc.requestCallback<finetuning_pb.GetFineTuningJobStatusResponse>): grpc.ClientUnaryCall;
  getFineTuningJobStatus(argument: finetuning_pb.GetFineTuningJobStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.GetFineTuningJobStatusResponse>): grpc.ClientUnaryCall;
  getFineTuningJobStatus(argument: finetuning_pb.GetFineTuningJobStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.GetFineTuningJobStatusResponse>): grpc.ClientUnaryCall;
  resubmitFineTuningJob(argument: finetuning_pb.ResubmitFineTuningJobRequest, callback: grpc.requestCallback<finetuning_pb.ResubmitFineTuningJobResponse>): grpc.ClientUnaryCall;
  resubmitFineTuningJob(argument: finetuning_pb.ResubmitFineTuningJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.ResubmitFineTuningJobResponse>): grpc.ClientUnaryCall;
  resubmitFineTuningJob(argument: finetuning_pb.ResubmitFineTuningJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.ResubmitFineTuningJobResponse>): grpc.ClientUnaryCall;
  getJobsByUserId(argument: finetuning_pb.GetJobsByUserIdRequest, callback: grpc.requestCallback<finetuning_pb.GetJobsByUserIdResponse>): grpc.ClientUnaryCall;
  getJobsByUserId(argument: finetuning_pb.GetJobsByUserIdRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.GetJobsByUserIdResponse>): grpc.ClientUnaryCall;
  getJobsByUserId(argument: finetuning_pb.GetJobsByUserIdRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.GetJobsByUserIdResponse>): grpc.ClientUnaryCall;
  getJobsByOrgId(argument: finetuning_pb.GetJobsByOrgIdRequest, callback: grpc.requestCallback<finetuning_pb.GetJobsByOrgIdResponse>): grpc.ClientUnaryCall;
  getJobsByOrgId(argument: finetuning_pb.GetJobsByOrgIdRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.GetJobsByOrgIdResponse>): grpc.ClientUnaryCall;
  getJobsByOrgId(argument: finetuning_pb.GetJobsByOrgIdRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.GetJobsByOrgIdResponse>): grpc.ClientUnaryCall;
}
