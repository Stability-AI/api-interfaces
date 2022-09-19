var __getOwnPropNames = Object.getOwnPropertyNames;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// engines/engines_pb.js
var require_engines_pb = __commonJS({
  "engines/engines_pb.js"(exports) {
    var jspb = __require("google-protobuf");
    var goog = jspb;
    var global = function() {
      return this || window || global || self || Function("return this")();
    }.call(null);
    goog.exportSymbol("proto.gooseai.EngineInfo", null, global);
    goog.exportSymbol("proto.gooseai.EngineTokenizer", null, global);
    goog.exportSymbol("proto.gooseai.EngineType", null, global);
    goog.exportSymbol("proto.gooseai.Engines", null, global);
    goog.exportSymbol("proto.gooseai.ListEnginesRequest", null, global);
    proto.gooseai.EngineInfo = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.EngineInfo, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.EngineInfo.displayName = "proto.gooseai.EngineInfo";
    }
    proto.gooseai.ListEnginesRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.ListEnginesRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.ListEnginesRequest.displayName = "proto.gooseai.ListEnginesRequest";
    }
    proto.gooseai.Engines = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.Engines.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.Engines, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Engines.displayName = "proto.gooseai.Engines";
    }
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.EngineInfo.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.EngineInfo.toObject(opt_includeInstance, this);
      };
      proto.gooseai.EngineInfo.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          owner: jspb.Message.getFieldWithDefault(msg, 2, ""),
          ready: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
          type: jspb.Message.getFieldWithDefault(msg, 4, 0),
          tokenizer: jspb.Message.getFieldWithDefault(msg, 5, 0),
          name: jspb.Message.getFieldWithDefault(msg, 6, ""),
          description: jspb.Message.getFieldWithDefault(msg, 7, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.EngineInfo.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.EngineInfo();
      return proto.gooseai.EngineInfo.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.EngineInfo.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setId(value);
            break;
          case 2:
            var value = reader.readString();
            msg.setOwner(value);
            break;
          case 3:
            var value = reader.readBool();
            msg.setReady(value);
            break;
          case 4:
            var value = reader.readEnum();
            msg.setType(value);
            break;
          case 5:
            var value = reader.readEnum();
            msg.setTokenizer(value);
            break;
          case 6:
            var value = reader.readString();
            msg.setName(value);
            break;
          case 7:
            var value = reader.readString();
            msg.setDescription(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.EngineInfo.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.EngineInfo.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.EngineInfo.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getOwner();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getReady();
      if (f) {
        writer.writeBool(
          3,
          f
        );
      }
      f = message.getType();
      if (f !== 0) {
        writer.writeEnum(
          4,
          f
        );
      }
      f = message.getTokenizer();
      if (f !== 0) {
        writer.writeEnum(
          5,
          f
        );
      }
      f = message.getName();
      if (f.length > 0) {
        writer.writeString(
          6,
          f
        );
      }
      f = message.getDescription();
      if (f.length > 0) {
        writer.writeString(
          7,
          f
        );
      }
    };
    proto.gooseai.EngineInfo.prototype.getId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.EngineInfo.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.EngineInfo.prototype.getOwner = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.gooseai.EngineInfo.prototype.setOwner = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.gooseai.EngineInfo.prototype.getReady = function() {
      return jspb.Message.getBooleanFieldWithDefault(this, 3, false);
    };
    proto.gooseai.EngineInfo.prototype.setReady = function(value) {
      return jspb.Message.setProto3BooleanField(this, 3, value);
    };
    proto.gooseai.EngineInfo.prototype.getType = function() {
      return jspb.Message.getFieldWithDefault(this, 4, 0);
    };
    proto.gooseai.EngineInfo.prototype.setType = function(value) {
      return jspb.Message.setProto3EnumField(this, 4, value);
    };
    proto.gooseai.EngineInfo.prototype.getTokenizer = function() {
      return jspb.Message.getFieldWithDefault(this, 5, 0);
    };
    proto.gooseai.EngineInfo.prototype.setTokenizer = function(value) {
      return jspb.Message.setProto3EnumField(this, 5, value);
    };
    proto.gooseai.EngineInfo.prototype.getName = function() {
      return jspb.Message.getFieldWithDefault(this, 6, "");
    };
    proto.gooseai.EngineInfo.prototype.setName = function(value) {
      return jspb.Message.setProto3StringField(this, 6, value);
    };
    proto.gooseai.EngineInfo.prototype.getDescription = function() {
      return jspb.Message.getFieldWithDefault(this, 7, "");
    };
    proto.gooseai.EngineInfo.prototype.setDescription = function(value) {
      return jspb.Message.setProto3StringField(this, 7, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.ListEnginesRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.ListEnginesRequest.toObject(opt_includeInstance, this);
      };
      proto.gooseai.ListEnginesRequest.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.ListEnginesRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.ListEnginesRequest();
      return proto.gooseai.ListEnginesRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.ListEnginesRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.ListEnginesRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.ListEnginesRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.ListEnginesRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    proto.gooseai.Engines.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Engines.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Engines.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Engines.toObject = function(includeInstance, msg) {
        var f, obj = {
          engineList: jspb.Message.toObjectList(
            msg.getEngineList(),
            proto.gooseai.EngineInfo.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Engines.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Engines();
      return proto.gooseai.Engines.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Engines.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.gooseai.EngineInfo();
            reader.readMessage(value, proto.gooseai.EngineInfo.deserializeBinaryFromReader);
            msg.addEngine(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Engines.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Engines.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Engines.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getEngineList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          1,
          f,
          proto.gooseai.EngineInfo.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.Engines.prototype.getEngineList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.EngineInfo, 1);
    };
    proto.gooseai.Engines.prototype.setEngineList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 1, value);
    };
    proto.gooseai.Engines.prototype.addEngine = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gooseai.EngineInfo, opt_index);
    };
    proto.gooseai.Engines.prototype.clearEngineList = function() {
      return this.setEngineList([]);
    };
    proto.gooseai.EngineType = {
      TEXT: 0,
      PICTURE: 1,
      AUDIO: 2,
      VIDEO: 3,
      CLASSIFICATION: 4,
      STORAGE: 5
    };
    proto.gooseai.EngineTokenizer = {
      GPT2: 0,
      PILE: 1
    };
    goog.object.extend(exports, proto.gooseai);
  }
});

// engines/engines_pb_service.js
var require_engines_pb_service = __commonJS({
  "engines/engines_pb_service.js"(exports) {
    var engines_pb = require_engines_pb();
    var grpc = __require("@improbable-eng/grpc-web").grpc;
    var EnginesService = function() {
      function EnginesService2() {
      }
      EnginesService2.serviceName = "gooseai.EnginesService";
      return EnginesService2;
    }();
    EnginesService.ListEngines = {
      methodName: "ListEngines",
      service: EnginesService,
      requestStream: false,
      responseStream: false,
      requestType: engines_pb.ListEnginesRequest,
      responseType: engines_pb.Engines
    };
    exports.EnginesService = EnginesService;
    function EnginesServiceClient(serviceHost, options) {
      this.serviceHost = serviceHost;
      this.options = options || {};
    }
    EnginesServiceClient.prototype.listEngines = function listEngines(requestMessage, metadata, callback) {
      if (arguments.length === 2) {
        callback = arguments[1];
      }
      var client = grpc.unary(EnginesService.ListEngines, {
        request: requestMessage,
        host: this.serviceHost,
        metadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function(response) {
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
        cancel: function() {
          callback = null;
          client.close();
        }
      };
    };
    exports.EnginesServiceClient = EnginesServiceClient;
  }
});
export default require_engines_pb_service();
