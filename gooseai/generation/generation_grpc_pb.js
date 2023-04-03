// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var generation_pb = require('./generation_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var tensors_pb = require('./tensors_pb.js');

function serialize_gooseai_Answer(arg) {
  if (!(arg instanceof generation_pb.Answer)) {
    throw new Error('Expected argument of type gooseai.Answer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_Answer(buffer_arg) {
  return generation_pb.Answer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_AnswerBatch(arg) {
  if (!(arg instanceof generation_pb.AnswerBatch)) {
    throw new Error('Expected argument of type gooseai.AnswerBatch');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_AnswerBatch(buffer_arg) {
  return generation_pb.AnswerBatch.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_BatchRequest(arg) {
  if (!(arg instanceof generation_pb.BatchRequest)) {
    throw new Error('Expected argument of type gooseai.BatchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_BatchRequest(buffer_arg) {
  return generation_pb.BatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_ChainRequest(arg) {
  if (!(arg instanceof generation_pb.ChainRequest)) {
    throw new Error('Expected argument of type gooseai.ChainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_ChainRequest(buffer_arg) {
  return generation_pb.ChainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_Request(arg) {
  if (!(arg instanceof generation_pb.Request)) {
    throw new Error('Expected argument of type gooseai.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_Request(buffer_arg) {
  return generation_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// gRPC services
//
var GenerationServiceService = exports.GenerationServiceService = {
  generate: {
    path: '/gooseai.GenerationService/Generate',
    requestStream: false,
    responseStream: true,
    requestType: generation_pb.Request,
    responseType: generation_pb.Answer,
    requestSerialize: serialize_gooseai_Request,
    requestDeserialize: deserialize_gooseai_Request,
    responseSerialize: serialize_gooseai_Answer,
    responseDeserialize: deserialize_gooseai_Answer,
  },
  chainGenerate: {
    path: '/gooseai.GenerationService/ChainGenerate',
    requestStream: false,
    responseStream: true,
    requestType: generation_pb.ChainRequest,
    responseType: generation_pb.Answer,
    requestSerialize: serialize_gooseai_ChainRequest,
    requestDeserialize: deserialize_gooseai_ChainRequest,
    responseSerialize: serialize_gooseai_Answer,
    responseDeserialize: deserialize_gooseai_Answer,
  },
  // Unary version of ChainGenerate
batchGenerate: {
    path: '/gooseai.GenerationService/BatchGenerate',
    requestStream: false,
    responseStream: false,
    requestType: generation_pb.BatchRequest,
    responseType: generation_pb.AnswerBatch,
    requestSerialize: serialize_gooseai_BatchRequest,
    requestDeserialize: deserialize_gooseai_BatchRequest,
    responseSerialize: serialize_gooseai_AnswerBatch,
    responseDeserialize: deserialize_gooseai_AnswerBatch,
  },
};

exports.GenerationServiceClient = grpc.makeGenericClientConstructor(GenerationServiceService);
