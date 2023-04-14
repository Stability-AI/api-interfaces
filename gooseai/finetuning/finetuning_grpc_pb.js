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

function serialize_gooseai_CreateFineTuningJobResponse(arg) {
  if (!(arg instanceof finetuning_pb.CreateFineTuningJobResponse)) {
    throw new Error('Expected argument of type gooseai.CreateFineTuningJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_CreateFineTuningJobResponse(buffer_arg) {
  return finetuning_pb.CreateFineTuningJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_DeleteFineTuningJobRequest(arg) {
  if (!(arg instanceof finetuning_pb.DeleteFineTuningJobRequest)) {
    throw new Error('Expected argument of type gooseai.DeleteFineTuningJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_DeleteFineTuningJobRequest(buffer_arg) {
  return finetuning_pb.DeleteFineTuningJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_DeleteFineTuningJobResponse(arg) {
  if (!(arg instanceof finetuning_pb.DeleteFineTuningJobResponse)) {
    throw new Error('Expected argument of type gooseai.DeleteFineTuningJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_DeleteFineTuningJobResponse(buffer_arg) {
  return finetuning_pb.DeleteFineTuningJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetFineTuningJobByIdRequest(arg) {
  if (!(arg instanceof finetuning_pb.GetFineTuningJobByIdRequest)) {
    throw new Error('Expected argument of type gooseai.GetFineTuningJobByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetFineTuningJobByIdRequest(buffer_arg) {
  return finetuning_pb.GetFineTuningJobByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetFineTuningJobByIdResponse(arg) {
  if (!(arg instanceof finetuning_pb.GetFineTuningJobByIdResponse)) {
    throw new Error('Expected argument of type gooseai.GetFineTuningJobByIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetFineTuningJobByIdResponse(buffer_arg) {
  return finetuning_pb.GetFineTuningJobByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetFineTuningJobStatusRequest(arg) {
  if (!(arg instanceof finetuning_pb.GetFineTuningJobStatusRequest)) {
    throw new Error('Expected argument of type gooseai.GetFineTuningJobStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetFineTuningJobStatusRequest(buffer_arg) {
  return finetuning_pb.GetFineTuningJobStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetFineTuningJobStatusResponse(arg) {
  if (!(arg instanceof finetuning_pb.GetFineTuningJobStatusResponse)) {
    throw new Error('Expected argument of type gooseai.GetFineTuningJobStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetFineTuningJobStatusResponse(buffer_arg) {
  return finetuning_pb.GetFineTuningJobStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetFineTuningJobsByOrgIdRequest(arg) {
  if (!(arg instanceof finetuning_pb.GetFineTuningJobsByOrgIdRequest)) {
    throw new Error('Expected argument of type gooseai.GetFineTuningJobsByOrgIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetFineTuningJobsByOrgIdRequest(buffer_arg) {
  return finetuning_pb.GetFineTuningJobsByOrgIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetFineTuningJobsByOrgIdResponse(arg) {
  if (!(arg instanceof finetuning_pb.GetFineTuningJobsByOrgIdResponse)) {
    throw new Error('Expected argument of type gooseai.GetFineTuningJobsByOrgIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetFineTuningJobsByOrgIdResponse(buffer_arg) {
  return finetuning_pb.GetFineTuningJobsByOrgIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetFineTuningJobsByUserIdRequest(arg) {
  if (!(arg instanceof finetuning_pb.GetFineTuningJobsByUserIdRequest)) {
    throw new Error('Expected argument of type gooseai.GetFineTuningJobsByUserIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetFineTuningJobsByUserIdRequest(buffer_arg) {
  return finetuning_pb.GetFineTuningJobsByUserIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetFineTuningJobsByUserIdResponse(arg) {
  if (!(arg instanceof finetuning_pb.GetFineTuningJobsByUserIdResponse)) {
    throw new Error('Expected argument of type gooseai.GetFineTuningJobsByUserIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetFineTuningJobsByUserIdResponse(buffer_arg) {
  return finetuning_pb.GetFineTuningJobsByUserIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_gooseai_ResubmitFineTuningJobResponse(arg) {
  if (!(arg instanceof finetuning_pb.ResubmitFineTuningJobResponse)) {
    throw new Error('Expected argument of type gooseai.ResubmitFineTuningJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_ResubmitFineTuningJobResponse(buffer_arg) {
  return finetuning_pb.ResubmitFineTuningJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_gooseai_UpdateFineTuningJobResponse(arg) {
  if (!(arg instanceof finetuning_pb.UpdateFineTuningJobResponse)) {
    throw new Error('Expected argument of type gooseai.UpdateFineTuningJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_UpdateFineTuningJobResponse(buffer_arg) {
  return finetuning_pb.UpdateFineTuningJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FineTuningServiceService = exports.FineTuningServiceService = {
  // Create a new project if it does not exist, and runs it
createFineTuningJob: {
    path: '/gooseai.FineTuningService/CreateFineTuningJob',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.CreateFineTuningJobRequest,
    responseType: finetuning_pb.CreateFineTuningJobResponse,
    requestSerialize: serialize_gooseai_CreateFineTuningJobRequest,
    requestDeserialize: deserialize_gooseai_CreateFineTuningJobRequest,
    responseSerialize: serialize_gooseai_CreateFineTuningJobResponse,
    responseDeserialize: deserialize_gooseai_CreateFineTuningJobResponse,
  },
  // Get a FineTuningJob by id
getFineTuningJobById: {
    path: '/gooseai.FineTuningService/GetFineTuningJobById',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.GetFineTuningJobByIdRequest,
    responseType: finetuning_pb.GetFineTuningJobByIdResponse,
    requestSerialize: serialize_gooseai_GetFineTuningJobByIdRequest,
    requestDeserialize: deserialize_gooseai_GetFineTuningJobByIdRequest,
    responseSerialize: serialize_gooseai_GetFineTuningJobByIdResponse,
    responseDeserialize: deserialize_gooseai_GetFineTuningJobByIdResponse,
  },
  // Update a FineTuningJob by id
updateFineTuningJob: {
    path: '/gooseai.FineTuningService/UpdateFineTuningJob',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.UpdateFineTuningJobRequest,
    responseType: finetuning_pb.UpdateFineTuningJobResponse,
    requestSerialize: serialize_gooseai_UpdateFineTuningJobRequest,
    requestDeserialize: deserialize_gooseai_UpdateFineTuningJobRequest,
    responseSerialize: serialize_gooseai_UpdateFineTuningJobResponse,
    responseDeserialize: deserialize_gooseai_UpdateFineTuningJobResponse,
  },
  // Delete a FineTuningJob by id
deleteFineTuningJob: {
    path: '/gooseai.FineTuningService/DeleteFineTuningJob',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.DeleteFineTuningJobRequest,
    responseType: finetuning_pb.DeleteFineTuningJobResponse,
    requestSerialize: serialize_gooseai_DeleteFineTuningJobRequest,
    requestDeserialize: deserialize_gooseai_DeleteFineTuningJobRequest,
    responseSerialize: serialize_gooseai_DeleteFineTuningJobResponse,
    responseDeserialize: deserialize_gooseai_DeleteFineTuningJobResponse,
  },
  // Check the progress of a FineTuningJob by id
getFineTuningJobStatus: {
    path: '/gooseai.FineTuningService/GetFineTuningJobStatus',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.GetFineTuningJobStatusRequest,
    responseType: finetuning_pb.GetFineTuningJobStatusResponse,
    requestSerialize: serialize_gooseai_GetFineTuningJobStatusRequest,
    requestDeserialize: deserialize_gooseai_GetFineTuningJobStatusRequest,
    responseSerialize: serialize_gooseai_GetFineTuningJobStatusResponse,
    responseDeserialize: deserialize_gooseai_GetFineTuningJobStatusResponse,
  },
  // Re-run training API call, does not create a new job in the DB
resubmitFineTuningJob: {
    path: '/gooseai.FineTuningService/ResubmitFineTuningJob',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.ResubmitFineTuningJobRequest,
    responseType: finetuning_pb.ResubmitFineTuningJobResponse,
    requestSerialize: serialize_gooseai_ResubmitFineTuningJobRequest,
    requestDeserialize: deserialize_gooseai_ResubmitFineTuningJobRequest,
    responseSerialize: serialize_gooseai_ResubmitFineTuningJobResponse,
    responseDeserialize: deserialize_gooseai_ResubmitFineTuningJobResponse,
  },
  // Get a list of FineTuningJobs by user id
getFineTuningJobsByUserId: {
    path: '/gooseai.FineTuningService/GetFineTuningJobsByUserId',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.GetFineTuningJobsByUserIdRequest,
    responseType: finetuning_pb.GetFineTuningJobsByUserIdResponse,
    requestSerialize: serialize_gooseai_GetFineTuningJobsByUserIdRequest,
    requestDeserialize: deserialize_gooseai_GetFineTuningJobsByUserIdRequest,
    responseSerialize: serialize_gooseai_GetFineTuningJobsByUserIdResponse,
    responseDeserialize: deserialize_gooseai_GetFineTuningJobsByUserIdResponse,
  },
  // Get a list of FineTuningJobs by org id
getFineTuningJobsByOrgId: {
    path: '/gooseai.FineTuningService/GetFineTuningJobsByOrgId',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.GetFineTuningJobsByOrgIdRequest,
    responseType: finetuning_pb.GetFineTuningJobsByOrgIdResponse,
    requestSerialize: serialize_gooseai_GetFineTuningJobsByOrgIdRequest,
    requestDeserialize: deserialize_gooseai_GetFineTuningJobsByOrgIdRequest,
    responseSerialize: serialize_gooseai_GetFineTuningJobsByOrgIdResponse,
    responseDeserialize: deserialize_gooseai_GetFineTuningJobsByOrgIdResponse,
  },
};

exports.FineTuningServiceClient = grpc.makeGenericClientConstructor(FineTuningServiceService);
