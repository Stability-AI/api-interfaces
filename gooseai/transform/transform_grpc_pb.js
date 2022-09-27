// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var transform_pb = require('./transform_pb.js');

function serialize_gooseai_Request(arg) {
  if (!(arg instanceof transform_pb.Request)) {
    throw new Error('Expected argument of type gooseai.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_Request(buffer_arg) {
  return transform_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_Result(arg) {
  if (!(arg instanceof transform_pb.Result)) {
    throw new Error('Expected argument of type gooseai.Result');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_Result(buffer_arg) {
  return transform_pb.Result.deserializeBinary(new Uint8Array(buffer_arg));
}


var TransformServiceService = exports.TransformServiceService = {
  transform: {
    path: '/gooseai.TransformService/Transform',
    requestStream: false,
    responseStream: true,
    requestType: transform_pb.Request,
    responseType: transform_pb.Result,
    requestSerialize: serialize_gooseai_Request,
    requestDeserialize: deserialize_gooseai_Request,
    responseSerialize: serialize_gooseai_Result,
    responseDeserialize: deserialize_gooseai_Result,
  },
};

exports.TransformServiceClient = grpc.makeGenericClientConstructor(TransformServiceService);
