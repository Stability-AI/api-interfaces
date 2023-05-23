// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var finetuning_pb = require('./finetuning_pb.js');

function serialize_gooseai_CreateModelRequest(arg) {
  if (!(arg instanceof finetuning_pb.CreateModelRequest)) {
    throw new Error('Expected argument of type gooseai.CreateModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_CreateModelRequest(buffer_arg) {
  return finetuning_pb.CreateModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_CreateModelResponse(arg) {
  if (!(arg instanceof finetuning_pb.CreateModelResponse)) {
    throw new Error('Expected argument of type gooseai.CreateModelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_CreateModelResponse(buffer_arg) {
  return finetuning_pb.CreateModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_DeleteModelRequest(arg) {
  if (!(arg instanceof finetuning_pb.DeleteModelRequest)) {
    throw new Error('Expected argument of type gooseai.DeleteModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_DeleteModelRequest(buffer_arg) {
  return finetuning_pb.DeleteModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_DeleteModelResponse(arg) {
  if (!(arg instanceof finetuning_pb.DeleteModelResponse)) {
    throw new Error('Expected argument of type gooseai.DeleteModelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_DeleteModelResponse(buffer_arg) {
  return finetuning_pb.DeleteModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetModelRequest(arg) {
  if (!(arg instanceof finetuning_pb.GetModelRequest)) {
    throw new Error('Expected argument of type gooseai.GetModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetModelRequest(buffer_arg) {
  return finetuning_pb.GetModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetModelResponse(arg) {
  if (!(arg instanceof finetuning_pb.GetModelResponse)) {
    throw new Error('Expected argument of type gooseai.GetModelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetModelResponse(buffer_arg) {
  return finetuning_pb.GetModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_ListModelsRequest(arg) {
  if (!(arg instanceof finetuning_pb.ListModelsRequest)) {
    throw new Error('Expected argument of type gooseai.ListModelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_ListModelsRequest(buffer_arg) {
  return finetuning_pb.ListModelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_ListModelsResponse(arg) {
  if (!(arg instanceof finetuning_pb.ListModelsResponse)) {
    throw new Error('Expected argument of type gooseai.ListModelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_ListModelsResponse(buffer_arg) {
  return finetuning_pb.ListModelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_ResubmitModelRequest(arg) {
  if (!(arg instanceof finetuning_pb.ResubmitModelRequest)) {
    throw new Error('Expected argument of type gooseai.ResubmitModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_ResubmitModelRequest(buffer_arg) {
  return finetuning_pb.ResubmitModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_ResubmitModelResponse(arg) {
  if (!(arg instanceof finetuning_pb.ResubmitModelResponse)) {
    throw new Error('Expected argument of type gooseai.ResubmitModelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_ResubmitModelResponse(buffer_arg) {
  return finetuning_pb.ResubmitModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_UpdateModelRequest(arg) {
  if (!(arg instanceof finetuning_pb.UpdateModelRequest)) {
    throw new Error('Expected argument of type gooseai.UpdateModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_UpdateModelRequest(buffer_arg) {
  return finetuning_pb.UpdateModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_UpdateModelResponse(arg) {
  if (!(arg instanceof finetuning_pb.UpdateModelResponse)) {
    throw new Error('Expected argument of type gooseai.UpdateModelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_UpdateModelResponse(buffer_arg) {
  return finetuning_pb.UpdateModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FineTuningServiceService = exports.FineTuningServiceService = {
  // Create a new model and begin the fine tuning process
createModel: {
    path: '/gooseai.FineTuningService/CreateModel',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.CreateModelRequest,
    responseType: finetuning_pb.CreateModelResponse,
    requestSerialize: serialize_gooseai_CreateModelRequest,
    requestDeserialize: deserialize_gooseai_CreateModelRequest,
    responseSerialize: serialize_gooseai_CreateModelResponse,
    responseDeserialize: deserialize_gooseai_CreateModelResponse,
  },
  // Get a FineTuningModel
getModel: {
    path: '/gooseai.FineTuningService/GetModel',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.GetModelRequest,
    responseType: finetuning_pb.GetModelResponse,
    requestSerialize: serialize_gooseai_GetModelRequest,
    requestDeserialize: deserialize_gooseai_GetModelRequest,
    responseSerialize: serialize_gooseai_GetModelResponse,
    responseDeserialize: deserialize_gooseai_GetModelResponse,
  },
  // Update a FineTuningModel by id
updateModel: {
    path: '/gooseai.FineTuningService/UpdateModel',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.UpdateModelRequest,
    responseType: finetuning_pb.UpdateModelResponse,
    requestSerialize: serialize_gooseai_UpdateModelRequest,
    requestDeserialize: deserialize_gooseai_UpdateModelRequest,
    responseSerialize: serialize_gooseai_UpdateModelResponse,
    responseDeserialize: deserialize_gooseai_UpdateModelResponse,
  },
  // Delete a fine tuned model
deleteModel: {
    path: '/gooseai.FineTuningService/DeleteModel',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.DeleteModelRequest,
    responseType: finetuning_pb.DeleteModelResponse,
    requestSerialize: serialize_gooseai_DeleteModelRequest,
    requestDeserialize: deserialize_gooseai_DeleteModelRequest,
    responseSerialize: serialize_gooseai_DeleteModelResponse,
    responseDeserialize: deserialize_gooseai_DeleteModelResponse,
  },
  // Re-run training, does not create a new model
resubmitModel: {
    path: '/gooseai.FineTuningService/ResubmitModel',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.ResubmitModelRequest,
    responseType: finetuning_pb.ResubmitModelResponse,
    requestSerialize: serialize_gooseai_ResubmitModelRequest,
    requestDeserialize: deserialize_gooseai_ResubmitModelRequest,
    responseSerialize: serialize_gooseai_ResubmitModelResponse,
    responseDeserialize: deserialize_gooseai_ResubmitModelResponse,
  },
  // List all the fine tuned models for an organization or user
listModels: {
    path: '/gooseai.FineTuningService/ListModels',
    requestStream: false,
    responseStream: false,
    requestType: finetuning_pb.ListModelsRequest,
    responseType: finetuning_pb.ListModelsResponse,
    requestSerialize: serialize_gooseai_ListModelsRequest,
    requestDeserialize: deserialize_gooseai_ListModelsRequest,
    responseSerialize: serialize_gooseai_ListModelsResponse,
    responseDeserialize: deserialize_gooseai_ListModelsResponse,
  },
};

exports.FineTuningServiceClient = grpc.makeGenericClientConstructor(FineTuningServiceService);
