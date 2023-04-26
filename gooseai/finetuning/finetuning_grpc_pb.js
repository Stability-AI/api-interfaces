// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var finetuning_pb = require('./finetuning_pb.js');
var dashboard_pb = require('./dashboard_pb.js');
var project_pb = require('./project_pb.js');

function serialize_gooseai_CreateFineTuningModelRequest(arg) {
  if (!(arg instanceof finetuning_pb.CreateFineTuningModelRequest)) {
    throw new Error('Expected argument of type gooseai.CreateFineTuningModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_CreateFineTuningModelRequest(buffer_arg) {
  return finetuning_pb.CreateFineTuningModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_CreateFineTuningModelResponse(arg) {
  if (!(arg instanceof finetuning_pb.CreateFineTuningModelResponse)) {
    throw new Error('Expected argument of type gooseai.CreateFineTuningModelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_CreateFineTuningModelResponse(buffer_arg) {
  return finetuning_pb.CreateFineTuningModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_DeleteFineTuningModelRequest(arg) {
  if (!(arg instanceof finetuning_pb.DeleteFineTuningModelRequest)) {
    throw new Error('Expected argument of type gooseai.DeleteFineTuningModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_DeleteFineTuningModelRequest(buffer_arg) {
  return finetuning_pb.DeleteFineTuningModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_DeleteFineTuningModelResponse(arg) {
  if (!(arg instanceof finetuning_pb.DeleteFineTuningModelResponse)) {
    throw new Error('Expected argument of type gooseai.DeleteFineTuningModelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_DeleteFineTuningModelResponse(buffer_arg) {
  return finetuning_pb.DeleteFineTuningModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetFineTuningModelByIdRequest(arg) {
  if (!(arg instanceof finetuning_pb.GetFineTuningModelByIdRequest)) {
    throw new Error('Expected argument of type gooseai.GetFineTuningModelByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetFineTuningModelByIdRequest(buffer_arg) {
  return finetuning_pb.GetFineTuningModelByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetFineTuningModelByIdResponse(arg) {
  if (!(arg instanceof finetuning_pb.GetFineTuningModelByIdResponse)) {
    throw new Error('Expected argument of type gooseai.GetFineTuningModelByIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetFineTuningModelByIdResponse(buffer_arg) {
  return finetuning_pb.GetFineTuningModelByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetFineTuningModelStatusRequest(arg) {
  if (!(arg instanceof finetuning_pb.GetFineTuningModelStatusRequest)) {
    throw new Error('Expected argument of type gooseai.GetFineTuningModelStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetFineTuningModelStatusRequest(buffer_arg) {
  return finetuning_pb.GetFineTuningModelStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetFineTuningModelStatusResponse(arg) {
  if (!(arg instanceof finetuning_pb.GetFineTuningModelStatusResponse)) {
    throw new Error('Expected argument of type gooseai.GetFineTuningModelStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetFineTuningModelStatusResponse(buffer_arg) {
  return finetuning_pb.GetFineTuningModelStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetFineTuningModelsByOrgIdRequest(arg) {
  if (!(arg instanceof finetuning_pb.GetFineTuningModelsByOrgIdRequest)) {
    throw new Error('Expected argument of type gooseai.GetFineTuningModelsByOrgIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetFineTuningModelsByOrgIdRequest(buffer_arg) {
  return finetuning_pb.GetFineTuningModelsByOrgIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetFineTuningModelsByOrgIdResponse(arg) {
  if (!(arg instanceof finetuning_pb.GetFineTuningModelsByOrgIdResponse)) {
    throw new Error('Expected argument of type gooseai.GetFineTuningModelsByOrgIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetFineTuningModelsByOrgIdResponse(buffer_arg) {
  return finetuning_pb.GetFineTuningModelsByOrgIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetFineTuningModelsByUserIdRequest(arg) {
  if (!(arg instanceof finetuning_pb.GetFineTuningModelsByUserIdRequest)) {
    throw new Error('Expected argument of type gooseai.GetFineTuningModelsByUserIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetFineTuningModelsByUserIdRequest(buffer_arg) {
  return finetuning_pb.GetFineTuningModelsByUserIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetFineTuningModelsByUserIdResponse(arg) {
  if (!(arg instanceof finetuning_pb.GetFineTuningModelsByUserIdResponse)) {
    throw new Error('Expected argument of type gooseai.GetFineTuningModelsByUserIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetFineTuningModelsByUserIdResponse(buffer_arg) {
  return finetuning_pb.GetFineTuningModelsByUserIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_ResubmitFineTuningModelRequest(arg) {
  if (!(arg instanceof finetuning_pb.ResubmitFineTuningModelRequest)) {
    throw new Error('Expected argument of type gooseai.ResubmitFineTuningModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_ResubmitFineTuningModelRequest(buffer_arg) {
  return finetuning_pb.ResubmitFineTuningModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_ResubmitFineTuningModelResponse(arg) {
  if (!(arg instanceof finetuning_pb.ResubmitFineTuningModelResponse)) {
    throw new Error('Expected argument of type gooseai.ResubmitFineTuningModelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_ResubmitFineTuningModelResponse(buffer_arg) {
  return finetuning_pb.ResubmitFineTuningModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_UpdateFineTuningModelRequest(arg) {
  if (!(arg instanceof finetuning_pb.UpdateFineTuningModelRequest)) {
    throw new Error('Expected argument of type gooseai.UpdateFineTuningModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_UpdateFineTuningModelRequest(buffer_arg) {
  return finetuning_pb.UpdateFineTuningModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_UpdateFineTuningModelResponse(arg) {
  if (!(arg instanceof finetuning_pb.UpdateFineTuningModelResponse)) {
    throw new Error('Expected argument of type gooseai.UpdateFineTuningModelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_UpdateFineTuningModelResponse(buffer_arg) {
  return finetuning_pb.UpdateFineTuningModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FineTuningServiceService = exports.FineTuningServiceService = {
  // Create a new project if it does not exist, and runs it
createFineTuningModel: {
    path: '/gooseai.FineTuningService/CreateFineTuningModel',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.CreateFineTuningModelRequest,
    responseType: finetuning_pb.CreateFineTuningModelResponse,
    requestSerialize: serialize_gooseai_CreateFineTuningModelRequest,
    requestDeserialize: deserialize_gooseai_CreateFineTuningModelRequest,
    responseSerialize: serialize_gooseai_CreateFineTuningModelResponse,
    responseDeserialize: deserialize_gooseai_CreateFineTuningModelResponse,
  },
  // Get a FineTuningModel by id
getFineTuningModelById: {
    path: '/gooseai.FineTuningService/GetFineTuningModelById',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.GetFineTuningModelByIdRequest,
    responseType: finetuning_pb.GetFineTuningModelByIdResponse,
    requestSerialize: serialize_gooseai_GetFineTuningModelByIdRequest,
    requestDeserialize: deserialize_gooseai_GetFineTuningModelByIdRequest,
    responseSerialize: serialize_gooseai_GetFineTuningModelByIdResponse,
    responseDeserialize: deserialize_gooseai_GetFineTuningModelByIdResponse,
  },
  // Update a FineTuningModel by id
updateFineTuningModel: {
    path: '/gooseai.FineTuningService/UpdateFineTuningModel',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.UpdateFineTuningModelRequest,
    responseType: finetuning_pb.UpdateFineTuningModelResponse,
    requestSerialize: serialize_gooseai_UpdateFineTuningModelRequest,
    requestDeserialize: deserialize_gooseai_UpdateFineTuningModelRequest,
    responseSerialize: serialize_gooseai_UpdateFineTuningModelResponse,
    responseDeserialize: deserialize_gooseai_UpdateFineTuningModelResponse,
  },
  // Delete a FineTuningModel by id
deleteFineTuningModel: {
    path: '/gooseai.FineTuningService/DeleteFineTuningModel',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.DeleteFineTuningModelRequest,
    responseType: finetuning_pb.DeleteFineTuningModelResponse,
    requestSerialize: serialize_gooseai_DeleteFineTuningModelRequest,
    requestDeserialize: deserialize_gooseai_DeleteFineTuningModelRequest,
    responseSerialize: serialize_gooseai_DeleteFineTuningModelResponse,
    responseDeserialize: deserialize_gooseai_DeleteFineTuningModelResponse,
  },
  // Check the progress of a FineTuningModel by id
getFineTuningModelStatus: {
    path: '/gooseai.FineTuningService/GetFineTuningModelStatus',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.GetFineTuningModelStatusRequest,
    responseType: finetuning_pb.GetFineTuningModelStatusResponse,
    requestSerialize: serialize_gooseai_GetFineTuningModelStatusRequest,
    requestDeserialize: deserialize_gooseai_GetFineTuningModelStatusRequest,
    responseSerialize: serialize_gooseai_GetFineTuningModelStatusResponse,
    responseDeserialize: deserialize_gooseai_GetFineTuningModelStatusResponse,
  },
  // Re-run training API call, does not create a new model in the DB
resubmitFineTuningModel: {
    path: '/gooseai.FineTuningService/ResubmitFineTuningModel',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.ResubmitFineTuningModelRequest,
    responseType: finetuning_pb.ResubmitFineTuningModelResponse,
    requestSerialize: serialize_gooseai_ResubmitFineTuningModelRequest,
    requestDeserialize: deserialize_gooseai_ResubmitFineTuningModelRequest,
    responseSerialize: serialize_gooseai_ResubmitFineTuningModelResponse,
    responseDeserialize: deserialize_gooseai_ResubmitFineTuningModelResponse,
  },
  // Get a list of FineTuningModels by user id
getFineTuningModelsByUserId: {
    path: '/gooseai.FineTuningService/GetFineTuningModelsByUserId',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.GetFineTuningModelsByUserIdRequest,
    responseType: finetuning_pb.GetFineTuningModelsByUserIdResponse,
    requestSerialize: serialize_gooseai_GetFineTuningModelsByUserIdRequest,
    requestDeserialize: deserialize_gooseai_GetFineTuningModelsByUserIdRequest,
    responseSerialize: serialize_gooseai_GetFineTuningModelsByUserIdResponse,
    responseDeserialize: deserialize_gooseai_GetFineTuningModelsByUserIdResponse,
  },
  // Get a list of FineTuningModels by org id
getFineTuningModelsByOrgId: {
    path: '/gooseai.FineTuningService/GetFineTuningModelsByOrgId',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.GetFineTuningModelsByOrgIdRequest,
    responseType: finetuning_pb.GetFineTuningModelsByOrgIdResponse,
    requestSerialize: serialize_gooseai_GetFineTuningModelsByOrgIdRequest,
    requestDeserialize: deserialize_gooseai_GetFineTuningModelsByOrgIdRequest,
    responseSerialize: serialize_gooseai_GetFineTuningModelsByOrgIdResponse,
    responseDeserialize: deserialize_gooseai_GetFineTuningModelsByOrgIdResponse,
  },
};

exports.FineTuningServiceClient = grpc.makeGenericClientConstructor(FineTuningServiceService);
