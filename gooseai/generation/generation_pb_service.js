// package: gooseai
// file: generation.proto

var generation_pb = require("./generation_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var GenerationService = (function () {
  function GenerationService() {}
  GenerationService.serviceName = "gooseai.GenerationService";
  return GenerationService;
}());

GenerationService.Generate = {
  methodName: "Generate",
  service: GenerationService,
  requestStream: false,
  responseStream: true,
  requestType: generation_pb.Request,
  responseType: generation_pb.Answer
};

GenerationService.ChainGenerate = {
  methodName: "ChainGenerate",
  service: GenerationService,
  requestStream: false,
  responseStream: true,
  requestType: generation_pb.ChainRequest,
  responseType: generation_pb.Answer
};

GenerationService.EstimateCost = {
  methodName: "EstimateCost",
  service: GenerationService,
  requestStream: false,
  responseStream: false,
  requestType: generation_pb.Request,
  responseType: generation_pb.EstimateCostResponse
};

exports.GenerationService = GenerationService;

function GenerationServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

GenerationServiceClient.prototype.generate = function generate(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(GenerationService.Generate, {
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

GenerationServiceClient.prototype.chainGenerate = function chainGenerate(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(GenerationService.ChainGenerate, {
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

GenerationServiceClient.prototype.estimateCost = function estimateCost(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GenerationService.EstimateCost, {
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

exports.GenerationServiceClient = GenerationServiceClient;

