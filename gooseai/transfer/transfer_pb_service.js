// package: gooseai
// file: transfer.proto

var transfer_pb = require("./transfer_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TransferService = (function () {
  function TransferService() {}
  TransferService.serviceName = "gooseai.TransferService";
  return TransferService;
}());

TransferService.Transfer = {
  methodName: "Transfer",
  service: TransferService,
  requestStream: false,
  responseStream: false,
  requestType: transfer_pb.TransferRequest,
  responseType: transfer_pb.TransferResponse
};

exports.TransferService = TransferService;

function TransferServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TransferServiceClient.prototype.transfer = function transfer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TransferService.Transfer, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.TransferServiceClient = TransferServiceClient;

