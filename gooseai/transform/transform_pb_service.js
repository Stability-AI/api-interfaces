// package: gooseai
// file: transform.proto

var transform_pb = require("./transform_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TransformService = (function () {
  function TransformService() {}
  TransformService.serviceName = "gooseai.TransformService";
  return TransformService;
}());

TransformService.Transform = {
  methodName: "Transform",
  service: TransformService,
  requestStream: false,
  responseStream: true,
  requestType: transform_pb.Request,
  responseType: transform_pb.Result
};

exports.TransformService = TransformService;

function TransformServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TransformServiceClient.prototype.transform = function transform(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TransformService.Transform, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.TransformServiceClient = TransformServiceClient;

