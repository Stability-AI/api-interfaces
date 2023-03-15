// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var finetuning_pb = require('./finetuning_pb.js');
var dashboard_pb = require('./dashboard_pb.js');
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

function serialize_gooseai_FineTuningJobRequestById(arg) {
  if (!(arg instanceof finetuning_pb.FineTuningJobRequestById)) {
    throw new Error('Expected argument of type gooseai.FineTuningJobRequestById');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_FineTuningJobRequestById(buffer_arg) {
  return finetuning_pb.FineTuningJobRequestById.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_gooseai_JobStatusNotification(arg) {
  if (!(arg instanceof finetuning_pb.JobStatusNotification)) {
    throw new Error('Expected argument of type gooseai.JobStatusNotification');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_JobStatusNotification(buffer_arg) {
  return finetuning_pb.JobStatusNotification.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_ProcessNotificationResponse(arg) {
  if (!(arg instanceof finetuning_pb.ProcessNotificationResponse)) {
    throw new Error('Expected argument of type gooseai.ProcessNotificationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_ProcessNotificationResponse(buffer_arg) {
  return finetuning_pb.ProcessNotificationResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  // Handle notifications from the job processing system
processNotification: {
    path: '/gooseai.FineTuningService/ProcessNotification',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.JobStatusNotification,
    responseType: finetuning_pb.ProcessNotificationResponse,
    requestSerialize: serialize_gooseai_JobStatusNotification,
    requestDeserialize: deserialize_gooseai_JobStatusNotification,
    responseSerialize: serialize_gooseai_ProcessNotificationResponse,
    responseDeserialize: deserialize_gooseai_ProcessNotificationResponse,
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
};

exports.FineTuningServiceClient = grpc.makeGenericClientConstructor(FineTuningServiceService);
