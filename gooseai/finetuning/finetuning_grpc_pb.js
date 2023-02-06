// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var finetuning_pb = require('./finetuning_pb.js');
var project_pb = require('./project_pb.js');
var dashboard_pb = require('./dashboard_pb.js');

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

function serialize_gooseai_FineTuningJobProgress(arg) {
  if (!(arg instanceof finetuning_pb.FineTuningJobProgress)) {
    throw new Error('Expected argument of type gooseai.FineTuningJobProgress');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_FineTuningJobProgress(buffer_arg) {
  return finetuning_pb.FineTuningJobProgress.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_gooseai_UpdateFineTuningJobRequest(arg) {
  if (!(arg instanceof finetuning_pb.UpdateFineTuningJobRequest)) {
    throw new Error('Expected argument of type gooseai.UpdateFineTuningJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_UpdateFineTuningJobRequest(buffer_arg) {
  return finetuning_pb.UpdateFineTuningJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var FineTuningServiceService = exports.FineTuningServiceService = {
  // Create a new project if it does not exist
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
    responseType: finetuning_pb.FineTuningJobProgress,
    requestSerialize: serialize_gooseai_FineTuningJobRequestById,
    requestDeserialize: deserialize_gooseai_FineTuningJobRequestById,
    responseSerialize: serialize_gooseai_FineTuningJobProgress,
    responseDeserialize: deserialize_gooseai_FineTuningJobProgress,
  },
};

exports.FineTuningServiceClient = grpc.makeGenericClientConstructor(FineTuningServiceService);
