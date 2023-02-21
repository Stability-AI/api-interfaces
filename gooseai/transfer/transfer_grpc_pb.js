// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var transfer_pb = require('./transfer_pb.js');

function serialize_gooseai_TransferRequest(arg) {
  if (!(arg instanceof transfer_pb.TransferRequest)) {
    throw new Error('Expected argument of type gooseai.TransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_TransferRequest(buffer_arg) {
  return transfer_pb.TransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_TransferResponse(arg) {
  if (!(arg instanceof transfer_pb.TransferResponse)) {
    throw new Error('Expected argument of type gooseai.TransferResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_TransferResponse(buffer_arg) {
  return transfer_pb.TransferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TransferServiceService = exports.TransferServiceService = {
  transfer: {
    path: '/gooseai.TransferService/Transfer',
    requestStream: false,
    responseStream: false,
    requestType: transfer_pb.TransferRequest,
    responseType: transfer_pb.TransferResponse,
    requestSerialize: serialize_gooseai_TransferRequest,
    requestDeserialize: deserialize_gooseai_TransferRequest,
    responseSerialize: serialize_gooseai_TransferResponse,
    responseDeserialize: deserialize_gooseai_TransferResponse,
  },
};

exports.TransferServiceClient = grpc.makeGenericClientConstructor(TransferServiceService);
