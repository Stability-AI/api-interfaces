// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var finetuning_pb = require('./finetuning_pb.js');
var dashboard_pb = require('./dashboard_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var project_pb = require('./project_pb.js');

function serialize_gooseai_CreateFineTuningJobRequest(arg) {
  if (!(arg instanceof finetuning_pb.CreateFineTuningJobRequest)) {
    throw new Error('Expected argument of type gooseai.CreateFineTuningJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_CreateFineTuningJobRequest(buffer_arg) {
  return finetuning_pb.CreateFineTuningJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_FineTuningJob(arg) {
  if (!(arg instanceof finetuning_pb.FineTuningJob)) {
    throw new Error('Expected argument of type gooseai.FineTuningJob');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_FineTuningJob(buffer_arg) {
  return finetuning_pb.FineTuningJob.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_FineTuningJobList(arg) {
  if (!(arg instanceof finetuning_pb.FineTuningJobList)) {
    throw new Error('Expected argument of type gooseai.FineTuningJobList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_FineTuningJobList(buffer_arg) {
  return finetuning_pb.FineTuningJobList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_FineTuningJobRequestById(arg) {
  if (!(arg instanceof finetuning_pb.FineTuningJobRequestById)) {
    throw new Error('Expected argument of type gooseai.FineTuningJobRequestById');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_FineTuningJobRequestById(buffer_arg) {
  return finetuning_pb.FineTuningJobRequestById.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_FineTuningJobRequestByUserId(arg) {
  if (!(arg instanceof finetuning_pb.FineTuningJobRequestByUserId)) {
    throw new Error('Expected argument of type gooseai.FineTuningJobRequestByUserId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_FineTuningJobRequestByUserId(buffer_arg) {
  return finetuning_pb.FineTuningJobRequestByUserId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_FineTuningJobStatus(arg) {
  if (!(arg instanceof finetuning_pb.FineTuningJobStatus)) {
    throw new Error('Expected argument of type gooseai.FineTuningJobStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_FineTuningJobStatus(buffer_arg) {
  return finetuning_pb.FineTuningJobStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_ResubmitFineTuningJobRequest(arg) {
  if (!(arg instanceof finetuning_pb.ResubmitFineTuningJobRequest)) {
    throw new Error('Expected argument of type gooseai.ResubmitFineTuningJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_ResubmitFineTuningJobRequest(buffer_arg) {
  return finetuning_pb.ResubmitFineTuningJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_UpdateFineTuningJobRequest(arg) {
  if (!(arg instanceof finetuning_pb.UpdateFineTuningJobRequest)) {
    throw new Error('Expected argument of type gooseai.UpdateFineTuningJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_UpdateFineTuningJobRequest(buffer_arg) {
  return finetuning_pb.UpdateFineTuningJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// TODO: should we add a list of jobs by userId / orgId?
// TODO: should we add a list of jobs by status?
var FineTuningServiceService = exports.FineTuningServiceService = {
  // Create a new project if it does not exist, and runs it
createFineTuningJob: {
    path: '/gooseai.FineTuningService/CreateFineTuningJob',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.CreateFineTuningJobRequest,
    responseType: finetuning_pb.FineTuningJob,
    requestSerialize: serialize_gooseai_CreateFineTuningJobRequest,
    requestDeserialize: deserialize_gooseai_CreateFineTuningJobRequest,
    responseSerialize: serialize_gooseai_FineTuningJob,
    responseDeserialize: deserialize_gooseai_FineTuningJob,
  },
  // Get a FineTuningJob by id
getFineTuningJobById: {
    path: '/gooseai.FineTuningService/GetFineTuningJobById',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.FineTuningJobRequestById,
    responseType: finetuning_pb.FineTuningJob,
    requestSerialize: serialize_gooseai_FineTuningJobRequestById,
    requestDeserialize: deserialize_gooseai_FineTuningJobRequestById,
    responseSerialize: serialize_gooseai_FineTuningJob,
    responseDeserialize: deserialize_gooseai_FineTuningJob,
  },
  // Update a FineTuningJob by id
updateFineTuningJob: {
    path: '/gooseai.FineTuningService/UpdateFineTuningJob',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.UpdateFineTuningJobRequest,
    responseType: finetuning_pb.FineTuningJob,
    requestSerialize: serialize_gooseai_UpdateFineTuningJobRequest,
    requestDeserialize: deserialize_gooseai_UpdateFineTuningJobRequest,
    responseSerialize: serialize_gooseai_FineTuningJob,
    responseDeserialize: deserialize_gooseai_FineTuningJob,
  },
  // Delete a FineTuningJob by id
deleteFineTuningJob: {
    path: '/gooseai.FineTuningService/DeleteFineTuningJob',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.FineTuningJobRequestById,
    responseType: finetuning_pb.FineTuningJob,
    requestSerialize: serialize_gooseai_FineTuningJobRequestById,
    requestDeserialize: deserialize_gooseai_FineTuningJobRequestById,
    responseSerialize: serialize_gooseai_FineTuningJob,
    responseDeserialize: deserialize_gooseai_FineTuningJob,
  },
  // Check the progress of a FineTuningJob by id
getFineTuningJobProgress: {
    path: '/gooseai.FineTuningService/GetFineTuningJobProgress',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.FineTuningJobRequestById,
    responseType: finetuning_pb.FineTuningJobStatus,
    requestSerialize: serialize_gooseai_FineTuningJobRequestById,
    requestDeserialize: deserialize_gooseai_FineTuningJobRequestById,
    responseSerialize: serialize_gooseai_FineTuningJobStatus,
    responseDeserialize: deserialize_gooseai_FineTuningJobStatus,
  },
  // Re-run training API call, does not create a new job in the DB
resubmitFineTuningJob: {
    path: '/gooseai.FineTuningService/ResubmitFineTuningJob',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.ResubmitFineTuningJobRequest,
    responseType: finetuning_pb.FineTuningJob,
    requestSerialize: serialize_gooseai_ResubmitFineTuningJobRequest,
    requestDeserialize: deserialize_gooseai_ResubmitFineTuningJobRequest,
    responseSerialize: serialize_gooseai_FineTuningJob,
    responseDeserialize: deserialize_gooseai_FineTuningJob,
  },
  // Get a list of FineTuningJobs by user id
getJobsByUserId: {
    path: '/gooseai.FineTuningService/GetJobsByUserId',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.FineTuningJobRequestByUserId,
    responseType: finetuning_pb.FineTuningJobList,
    requestSerialize: serialize_gooseai_FineTuningJobRequestByUserId,
    requestDeserialize: deserialize_gooseai_FineTuningJobRequestByUserId,
    responseSerialize: serialize_gooseai_FineTuningJobList,
    responseDeserialize: deserialize_gooseai_FineTuningJobList,
  },
};

exports.FineTuningServiceClient = grpc.makeGenericClientConstructor(FineTuningServiceService);
