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

// completion/completion_pb.js
var require_completion_pb = __commonJS({
  "completion/completion_pb.js"(exports) {
    var jspb = __require("google-protobuf");
    var goog = jspb;
    var global = function() {
      return this || window || global || self || Function("return this")();
    }.call(null);
    goog.exportSymbol("proto.gooseai.Answer", null, global);
    goog.exportSymbol("proto.gooseai.AnswerMeta", null, global);
    goog.exportSymbol("proto.gooseai.Completion", null, global);
    goog.exportSymbol("proto.gooseai.Echo", null, global);
    goog.exportSymbol("proto.gooseai.Embedding", null, global);
    goog.exportSymbol("proto.gooseai.Embedding.EmbeddingCase", null, global);
    goog.exportSymbol("proto.gooseai.EngineParams", null, global);
    goog.exportSymbol("proto.gooseai.FinishReason", null, global);
    goog.exportSymbol("proto.gooseai.FrequencyParams", null, global);
    goog.exportSymbol("proto.gooseai.LogProb", null, global);
    goog.exportSymbol("proto.gooseai.LogProbs", null, global);
    goog.exportSymbol("proto.gooseai.LogitBias", null, global);
    goog.exportSymbol("proto.gooseai.LogitBiases", null, global);
    goog.exportSymbol("proto.gooseai.ModelParams", null, global);
    goog.exportSymbol("proto.gooseai.ModuleEmbedding", null, global);
    goog.exportSymbol("proto.gooseai.NumType", null, global);
    goog.exportSymbol("proto.gooseai.Prompt", null, global);
    goog.exportSymbol("proto.gooseai.Prompt.PromptCase", null, global);
    goog.exportSymbol("proto.gooseai.Request", null, global);
    goog.exportSymbol("proto.gooseai.RequestMeta", null, global);
    goog.exportSymbol("proto.gooseai.SamplingMethod", null, global);
    goog.exportSymbol("proto.gooseai.SamplingParams", null, global);
    goog.exportSymbol("proto.gooseai.Tensor", null, global);
    goog.exportSymbol("proto.gooseai.Token", null, global);
    goog.exportSymbol("proto.gooseai.TokenLogProbs", null, global);
    goog.exportSymbol("proto.gooseai.Tokens", null, global);
    proto.gooseai.Token = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.Token, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Token.displayName = "proto.gooseai.Token";
    }
    proto.gooseai.Tokens = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.Tokens.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.Tokens, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Tokens.displayName = "proto.gooseai.Tokens";
    }
    proto.gooseai.Prompt = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.gooseai.Prompt.oneofGroups_);
    };
    goog.inherits(proto.gooseai.Prompt, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Prompt.displayName = "proto.gooseai.Prompt";
    }
    proto.gooseai.LogitBias = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.LogitBias, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.LogitBias.displayName = "proto.gooseai.LogitBias";
    }
    proto.gooseai.LogitBiases = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.LogitBiases.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.LogitBiases, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.LogitBiases.displayName = "proto.gooseai.LogitBiases";
    }
    proto.gooseai.FrequencyParams = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.FrequencyParams, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.FrequencyParams.displayName = "proto.gooseai.FrequencyParams";
    }
    proto.gooseai.SamplingParams = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.SamplingParams.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.SamplingParams, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.SamplingParams.displayName = "proto.gooseai.SamplingParams";
    }
    proto.gooseai.ModelParams = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.ModelParams, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.ModelParams.displayName = "proto.gooseai.ModelParams";
    }
    proto.gooseai.Echo = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.Echo, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Echo.displayName = "proto.gooseai.Echo";
    }
    proto.gooseai.ModuleEmbedding = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.ModuleEmbedding, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.ModuleEmbedding.displayName = "proto.gooseai.ModuleEmbedding";
    }
    proto.gooseai.Tensor = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.Tensor.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.Tensor, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Tensor.displayName = "proto.gooseai.Tensor";
    }
    proto.gooseai.Embedding = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.gooseai.Embedding.oneofGroups_);
    };
    goog.inherits(proto.gooseai.Embedding, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Embedding.displayName = "proto.gooseai.Embedding";
    }
    proto.gooseai.EngineParams = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.EngineParams.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.EngineParams, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.EngineParams.displayName = "proto.gooseai.EngineParams";
    }
    proto.gooseai.RequestMeta = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.RequestMeta, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.RequestMeta.displayName = "proto.gooseai.RequestMeta";
    }
    proto.gooseai.Request = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.Request.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.Request, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Request.displayName = "proto.gooseai.Request";
    }
    proto.gooseai.LogProb = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.LogProb, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.LogProb.displayName = "proto.gooseai.LogProb";
    }
    proto.gooseai.TokenLogProbs = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.TokenLogProbs.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.TokenLogProbs, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.TokenLogProbs.displayName = "proto.gooseai.TokenLogProbs";
    }
    proto.gooseai.LogProbs = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.LogProbs.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.LogProbs, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.LogProbs.displayName = "proto.gooseai.LogProbs";
    }
    proto.gooseai.Completion = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.Completion, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Completion.displayName = "proto.gooseai.Completion";
    }
    proto.gooseai.AnswerMeta = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.AnswerMeta, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.AnswerMeta.displayName = "proto.gooseai.AnswerMeta";
    }
    proto.gooseai.Answer = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.Answer.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.Answer, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Answer.displayName = "proto.gooseai.Answer";
    }
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Token.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Token.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Token.toObject = function(includeInstance, msg) {
        var f, obj = {
          text: jspb.Message.getFieldWithDefault(msg, 1, ""),
          id: jspb.Message.getFieldWithDefault(msg, 2, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Token.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Token();
      return proto.gooseai.Token.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Token.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setText(value);
            break;
          case 2:
            var value = reader.readUint32();
            msg.setId(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Token.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Token.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Token.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getText();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getId();
      if (f !== 0) {
        writer.writeUint32(
          2,
          f
        );
      }
    };
    proto.gooseai.Token.prototype.getText = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.Token.prototype.setText = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.Token.prototype.getId = function() {
      return jspb.Message.getFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.Token.prototype.setId = function(value) {
      return jspb.Message.setProto3IntField(this, 2, value);
    };
    proto.gooseai.Tokens.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Tokens.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Tokens.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Tokens.toObject = function(includeInstance, msg) {
        var f, obj = {
          tokensList: jspb.Message.toObjectList(
            msg.getTokensList(),
            proto.gooseai.Token.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Tokens.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Tokens();
      return proto.gooseai.Tokens.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Tokens.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.gooseai.Token();
            reader.readMessage(value, proto.gooseai.Token.deserializeBinaryFromReader);
            msg.addTokens(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Tokens.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Tokens.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Tokens.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getTokensList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          1,
          f,
          proto.gooseai.Token.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.Tokens.prototype.getTokensList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Token, 1);
    };
    proto.gooseai.Tokens.prototype.setTokensList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 1, value);
    };
    proto.gooseai.Tokens.prototype.addTokens = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gooseai.Token, opt_index);
    };
    proto.gooseai.Tokens.prototype.clearTokensList = function() {
      return this.setTokensList([]);
    };
    proto.gooseai.Prompt.oneofGroups_ = [[1, 2]];
    proto.gooseai.Prompt.PromptCase = {
      PROMPT_NOT_SET: 0,
      TEXT: 1,
      TOKENS: 2
    };
    proto.gooseai.Prompt.prototype.getPromptCase = function() {
      return jspb.Message.computeOneofCase(this, proto.gooseai.Prompt.oneofGroups_[0]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Prompt.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Prompt.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Prompt.toObject = function(includeInstance, msg) {
        var f, obj = {
          text: jspb.Message.getFieldWithDefault(msg, 1, ""),
          tokens: (f = msg.getTokens()) && proto.gooseai.Tokens.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Prompt.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Prompt();
      return proto.gooseai.Prompt.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Prompt.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setText(value);
            break;
          case 2:
            var value = new proto.gooseai.Tokens();
            reader.readMessage(value, proto.gooseai.Tokens.deserializeBinaryFromReader);
            msg.setTokens(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Prompt.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Prompt.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Prompt.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getTokens();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.gooseai.Tokens.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.Prompt.prototype.getText = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.Prompt.prototype.setText = function(value) {
      return jspb.Message.setOneofField(this, 1, proto.gooseai.Prompt.oneofGroups_[0], value);
    };
    proto.gooseai.Prompt.prototype.clearText = function() {
      return jspb.Message.setOneofField(this, 1, proto.gooseai.Prompt.oneofGroups_[0], void 0);
    };
    proto.gooseai.Prompt.prototype.hasText = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.Prompt.prototype.getTokens = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.Tokens, 2);
    };
    proto.gooseai.Prompt.prototype.setTokens = function(value) {
      return jspb.Message.setOneofWrapperField(this, 2, proto.gooseai.Prompt.oneofGroups_[0], value);
    };
    proto.gooseai.Prompt.prototype.clearTokens = function() {
      return this.setTokens(void 0);
    };
    proto.gooseai.Prompt.prototype.hasTokens = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.LogitBias.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.LogitBias.toObject(opt_includeInstance, this);
      };
      proto.gooseai.LogitBias.toObject = function(includeInstance, msg) {
        var f, obj = {
          tokens: (f = msg.getTokens()) && proto.gooseai.Tokens.toObject(includeInstance, f),
          bias: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.LogitBias.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.LogitBias();
      return proto.gooseai.LogitBias.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.LogitBias.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.gooseai.Tokens();
            reader.readMessage(value, proto.gooseai.Tokens.deserializeBinaryFromReader);
            msg.setTokens(value);
            break;
          case 2:
            var value = reader.readDouble();
            msg.setBias(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.LogitBias.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.LogitBias.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.LogitBias.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getTokens();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.gooseai.Tokens.serializeBinaryToWriter
        );
      }
      f = message.getBias();
      if (f !== 0) {
        writer.writeDouble(
          2,
          f
        );
      }
    };
    proto.gooseai.LogitBias.prototype.getTokens = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.Tokens, 1);
    };
    proto.gooseai.LogitBias.prototype.setTokens = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.gooseai.LogitBias.prototype.clearTokens = function() {
      return this.setTokens(void 0);
    };
    proto.gooseai.LogitBias.prototype.hasTokens = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.LogitBias.prototype.getBias = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.LogitBias.prototype.setBias = function(value) {
      return jspb.Message.setProto3FloatField(this, 2, value);
    };
    proto.gooseai.LogitBiases.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.LogitBiases.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.LogitBiases.toObject(opt_includeInstance, this);
      };
      proto.gooseai.LogitBiases.toObject = function(includeInstance, msg) {
        var f, obj = {
          biasesList: jspb.Message.toObjectList(
            msg.getBiasesList(),
            proto.gooseai.LogitBias.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.LogitBiases.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.LogitBiases();
      return proto.gooseai.LogitBiases.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.LogitBiases.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.gooseai.LogitBias();
            reader.readMessage(value, proto.gooseai.LogitBias.deserializeBinaryFromReader);
            msg.addBiases(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.LogitBiases.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.LogitBiases.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.LogitBiases.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getBiasesList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          1,
          f,
          proto.gooseai.LogitBias.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.LogitBiases.prototype.getBiasesList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.LogitBias, 1);
    };
    proto.gooseai.LogitBiases.prototype.setBiasesList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 1, value);
    };
    proto.gooseai.LogitBiases.prototype.addBiases = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gooseai.LogitBias, opt_index);
    };
    proto.gooseai.LogitBiases.prototype.clearBiasesList = function() {
      return this.setBiasesList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.FrequencyParams.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.FrequencyParams.toObject(opt_includeInstance, this);
      };
      proto.gooseai.FrequencyParams.toObject = function(includeInstance, msg) {
        var f, obj = {
          presencePenalty: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0),
          frequencyPenalty: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0),
          repetitionPenalty: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0),
          repetitionPenaltySlope: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0),
          repetitionPenaltyRange: jspb.Message.getFieldWithDefault(msg, 5, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.FrequencyParams.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.FrequencyParams();
      return proto.gooseai.FrequencyParams.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.FrequencyParams.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readDouble();
            msg.setPresencePenalty(value);
            break;
          case 2:
            var value = reader.readDouble();
            msg.setFrequencyPenalty(value);
            break;
          case 3:
            var value = reader.readDouble();
            msg.setRepetitionPenalty(value);
            break;
          case 4:
            var value = reader.readDouble();
            msg.setRepetitionPenaltySlope(value);
            break;
          case 5:
            var value = reader.readUint32();
            msg.setRepetitionPenaltyRange(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.FrequencyParams.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.FrequencyParams.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.FrequencyParams.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeDouble(
          1,
          f
        );
      }
      f = jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeDouble(
          2,
          f
        );
      }
      f = jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeDouble(
          3,
          f
        );
      }
      f = jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeDouble(
          4,
          f
        );
      }
      f = jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeUint32(
          5,
          f
        );
      }
    };
    proto.gooseai.FrequencyParams.prototype.getPresencePenalty = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0);
    };
    proto.gooseai.FrequencyParams.prototype.setPresencePenalty = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.gooseai.FrequencyParams.prototype.clearPresencePenalty = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.gooseai.FrequencyParams.prototype.hasPresencePenalty = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.FrequencyParams.prototype.getFrequencyPenalty = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.FrequencyParams.prototype.setFrequencyPenalty = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.gooseai.FrequencyParams.prototype.clearFrequencyPenalty = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.gooseai.FrequencyParams.prototype.hasFrequencyPenalty = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.FrequencyParams.prototype.getRepetitionPenalty = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0);
    };
    proto.gooseai.FrequencyParams.prototype.setRepetitionPenalty = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.gooseai.FrequencyParams.prototype.clearRepetitionPenalty = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.gooseai.FrequencyParams.prototype.hasRepetitionPenalty = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.gooseai.FrequencyParams.prototype.getRepetitionPenaltySlope = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0);
    };
    proto.gooseai.FrequencyParams.prototype.setRepetitionPenaltySlope = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.gooseai.FrequencyParams.prototype.clearRepetitionPenaltySlope = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.gooseai.FrequencyParams.prototype.hasRepetitionPenaltySlope = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.gooseai.FrequencyParams.prototype.getRepetitionPenaltyRange = function() {
      return jspb.Message.getFieldWithDefault(this, 5, 0);
    };
    proto.gooseai.FrequencyParams.prototype.setRepetitionPenaltyRange = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.gooseai.FrequencyParams.prototype.clearRepetitionPenaltyRange = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.gooseai.FrequencyParams.prototype.hasRepetitionPenaltyRange = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.gooseai.SamplingParams.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.SamplingParams.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.SamplingParams.toObject(opt_includeInstance, this);
      };
      proto.gooseai.SamplingParams.toObject = function(includeInstance, msg) {
        var f, obj = {
          orderList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? void 0 : f,
          temperature: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0),
          topP: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0),
          topK: jspb.Message.getFieldWithDefault(msg, 4, 0),
          tailFreeSampling: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0),
          typicalP: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0),
          topA: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.SamplingParams.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.SamplingParams();
      return proto.gooseai.SamplingParams.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.SamplingParams.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var values = reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()];
            for (var i = 0; i < values.length; i++) {
              msg.addOrder(values[i]);
            }
            break;
          case 2:
            var value = reader.readDouble();
            msg.setTemperature(value);
            break;
          case 3:
            var value = reader.readDouble();
            msg.setTopP(value);
            break;
          case 4:
            var value = reader.readUint32();
            msg.setTopK(value);
            break;
          case 5:
            var value = reader.readDouble();
            msg.setTailFreeSampling(value);
            break;
          case 6:
            var value = reader.readDouble();
            msg.setTypicalP(value);
            break;
          case 7:
            var value = reader.readDouble();
            msg.setTopA(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.SamplingParams.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.SamplingParams.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.SamplingParams.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getOrderList();
      if (f.length > 0) {
        writer.writePackedEnum(
          1,
          f
        );
      }
      f = jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeDouble(
          2,
          f
        );
      }
      f = jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeDouble(
          3,
          f
        );
      }
      f = jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeUint32(
          4,
          f
        );
      }
      f = jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeDouble(
          5,
          f
        );
      }
      f = jspb.Message.getField(message, 6);
      if (f != null) {
        writer.writeDouble(
          6,
          f
        );
      }
      f = jspb.Message.getField(message, 7);
      if (f != null) {
        writer.writeDouble(
          7,
          f
        );
      }
    };
    proto.gooseai.SamplingParams.prototype.getOrderList = function() {
      return jspb.Message.getRepeatedField(this, 1);
    };
    proto.gooseai.SamplingParams.prototype.setOrderList = function(value) {
      return jspb.Message.setField(this, 1, value || []);
    };
    proto.gooseai.SamplingParams.prototype.addOrder = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
    };
    proto.gooseai.SamplingParams.prototype.clearOrderList = function() {
      return this.setOrderList([]);
    };
    proto.gooseai.SamplingParams.prototype.getTemperature = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.SamplingParams.prototype.setTemperature = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.gooseai.SamplingParams.prototype.clearTemperature = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.gooseai.SamplingParams.prototype.hasTemperature = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.SamplingParams.prototype.getTopP = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0);
    };
    proto.gooseai.SamplingParams.prototype.setTopP = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.gooseai.SamplingParams.prototype.clearTopP = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.gooseai.SamplingParams.prototype.hasTopP = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.gooseai.SamplingParams.prototype.getTopK = function() {
      return jspb.Message.getFieldWithDefault(this, 4, 0);
    };
    proto.gooseai.SamplingParams.prototype.setTopK = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.gooseai.SamplingParams.prototype.clearTopK = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.gooseai.SamplingParams.prototype.hasTopK = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.gooseai.SamplingParams.prototype.getTailFreeSampling = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0);
    };
    proto.gooseai.SamplingParams.prototype.setTailFreeSampling = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.gooseai.SamplingParams.prototype.clearTailFreeSampling = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.gooseai.SamplingParams.prototype.hasTailFreeSampling = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.gooseai.SamplingParams.prototype.getTypicalP = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0);
    };
    proto.gooseai.SamplingParams.prototype.setTypicalP = function(value) {
      return jspb.Message.setField(this, 6, value);
    };
    proto.gooseai.SamplingParams.prototype.clearTypicalP = function() {
      return jspb.Message.setField(this, 6, void 0);
    };
    proto.gooseai.SamplingParams.prototype.hasTypicalP = function() {
      return jspb.Message.getField(this, 6) != null;
    };
    proto.gooseai.SamplingParams.prototype.getTopA = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0);
    };
    proto.gooseai.SamplingParams.prototype.setTopA = function(value) {
      return jspb.Message.setField(this, 7, value);
    };
    proto.gooseai.SamplingParams.prototype.clearTopA = function() {
      return jspb.Message.setField(this, 7, void 0);
    };
    proto.gooseai.SamplingParams.prototype.hasTopA = function() {
      return jspb.Message.getField(this, 7) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.ModelParams.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.ModelParams.toObject(opt_includeInstance, this);
      };
      proto.gooseai.ModelParams.toObject = function(includeInstance, msg) {
        var f, obj = {
          samplingParams: (f = msg.getSamplingParams()) && proto.gooseai.SamplingParams.toObject(includeInstance, f),
          frequencyParams: (f = msg.getFrequencyParams()) && proto.gooseai.FrequencyParams.toObject(includeInstance, f),
          logitBias: (f = msg.getLogitBias()) && proto.gooseai.LogitBiases.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.ModelParams.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.ModelParams();
      return proto.gooseai.ModelParams.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.ModelParams.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.gooseai.SamplingParams();
            reader.readMessage(value, proto.gooseai.SamplingParams.deserializeBinaryFromReader);
            msg.setSamplingParams(value);
            break;
          case 2:
            var value = new proto.gooseai.FrequencyParams();
            reader.readMessage(value, proto.gooseai.FrequencyParams.deserializeBinaryFromReader);
            msg.setFrequencyParams(value);
            break;
          case 3:
            var value = new proto.gooseai.LogitBiases();
            reader.readMessage(value, proto.gooseai.LogitBiases.deserializeBinaryFromReader);
            msg.setLogitBias(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.ModelParams.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.ModelParams.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.ModelParams.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSamplingParams();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.gooseai.SamplingParams.serializeBinaryToWriter
        );
      }
      f = message.getFrequencyParams();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.gooseai.FrequencyParams.serializeBinaryToWriter
        );
      }
      f = message.getLogitBias();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.gooseai.LogitBiases.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.ModelParams.prototype.getSamplingParams = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.SamplingParams, 1);
    };
    proto.gooseai.ModelParams.prototype.setSamplingParams = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.gooseai.ModelParams.prototype.clearSamplingParams = function() {
      return this.setSamplingParams(void 0);
    };
    proto.gooseai.ModelParams.prototype.hasSamplingParams = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.ModelParams.prototype.getFrequencyParams = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.FrequencyParams, 2);
    };
    proto.gooseai.ModelParams.prototype.setFrequencyParams = function(value) {
      return jspb.Message.setWrapperField(this, 2, value);
    };
    proto.gooseai.ModelParams.prototype.clearFrequencyParams = function() {
      return this.setFrequencyParams(void 0);
    };
    proto.gooseai.ModelParams.prototype.hasFrequencyParams = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.ModelParams.prototype.getLogitBias = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.LogitBiases, 3);
    };
    proto.gooseai.ModelParams.prototype.setLogitBias = function(value) {
      return jspb.Message.setWrapperField(this, 3, value);
    };
    proto.gooseai.ModelParams.prototype.clearLogitBias = function() {
      return this.setLogitBias(void 0);
    };
    proto.gooseai.ModelParams.prototype.hasLogitBias = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Echo.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Echo.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Echo.toObject = function(includeInstance, msg) {
        var f, obj = {
          index: jspb.Message.getFieldWithDefault(msg, 1, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Echo.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Echo();
      return proto.gooseai.Echo.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Echo.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readInt32();
            msg.setIndex(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Echo.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Echo.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Echo.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeInt32(
          1,
          f
        );
      }
    };
    proto.gooseai.Echo.prototype.getIndex = function() {
      return jspb.Message.getFieldWithDefault(this, 1, 0);
    };
    proto.gooseai.Echo.prototype.setIndex = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.gooseai.Echo.prototype.clearIndex = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.gooseai.Echo.prototype.hasIndex = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.ModuleEmbedding.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.ModuleEmbedding.toObject(opt_includeInstance, this);
      };
      proto.gooseai.ModuleEmbedding.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          key: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.ModuleEmbedding.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.ModuleEmbedding();
      return proto.gooseai.ModuleEmbedding.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.ModuleEmbedding.deserializeBinaryFromReader = function(msg, reader) {
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
            msg.setKey(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.ModuleEmbedding.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.ModuleEmbedding.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.ModuleEmbedding.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getKey();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
    };
    proto.gooseai.ModuleEmbedding.prototype.getId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.ModuleEmbedding.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.ModuleEmbedding.prototype.getKey = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.gooseai.ModuleEmbedding.prototype.setKey = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.gooseai.Tensor.repeatedFields_ = [2];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Tensor.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Tensor.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Tensor.toObject = function(includeInstance, msg) {
        var f, obj = {
          typ: jspb.Message.getFieldWithDefault(msg, 1, 0),
          dimsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? void 0 : f,
          data: msg.getData_asB64()
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Tensor.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Tensor();
      return proto.gooseai.Tensor.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Tensor.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readEnum();
            msg.setTyp(value);
            break;
          case 2:
            var values = reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()];
            for (var i = 0; i < values.length; i++) {
              msg.addDims(values[i]);
            }
            break;
          case 3:
            var value = reader.readBytes();
            msg.setData(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Tensor.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Tensor.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Tensor.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getTyp();
      if (f !== 0) {
        writer.writeEnum(
          1,
          f
        );
      }
      f = message.getDimsList();
      if (f.length > 0) {
        writer.writePackedUint32(
          2,
          f
        );
      }
      f = message.getData_asU8();
      if (f.length > 0) {
        writer.writeBytes(
          3,
          f
        );
      }
    };
    proto.gooseai.Tensor.prototype.getTyp = function() {
      return jspb.Message.getFieldWithDefault(this, 1, 0);
    };
    proto.gooseai.Tensor.prototype.setTyp = function(value) {
      return jspb.Message.setProto3EnumField(this, 1, value);
    };
    proto.gooseai.Tensor.prototype.getDimsList = function() {
      return jspb.Message.getRepeatedField(this, 2);
    };
    proto.gooseai.Tensor.prototype.setDimsList = function(value) {
      return jspb.Message.setField(this, 2, value || []);
    };
    proto.gooseai.Tensor.prototype.addDims = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
    };
    proto.gooseai.Tensor.prototype.clearDimsList = function() {
      return this.setDimsList([]);
    };
    proto.gooseai.Tensor.prototype.getData = function() {
      return jspb.Message.getFieldWithDefault(this, 3, "");
    };
    proto.gooseai.Tensor.prototype.getData_asB64 = function() {
      return jspb.Message.bytesAsB64(
        this.getData()
      );
    };
    proto.gooseai.Tensor.prototype.getData_asU8 = function() {
      return jspb.Message.bytesAsU8(
        this.getData()
      );
    };
    proto.gooseai.Tensor.prototype.setData = function(value) {
      return jspb.Message.setProto3BytesField(this, 3, value);
    };
    proto.gooseai.Embedding.oneofGroups_ = [[1, 2]];
    proto.gooseai.Embedding.EmbeddingCase = {
      EMBEDDING_NOT_SET: 0,
      RAW: 1,
      MODULE: 2
    };
    proto.gooseai.Embedding.prototype.getEmbeddingCase = function() {
      return jspb.Message.computeOneofCase(this, proto.gooseai.Embedding.oneofGroups_[0]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Embedding.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Embedding.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Embedding.toObject = function(includeInstance, msg) {
        var f, obj = {
          raw: (f = msg.getRaw()) && proto.gooseai.Tensor.toObject(includeInstance, f),
          module: (f = msg.getModule()) && proto.gooseai.ModuleEmbedding.toObject(includeInstance, f),
          pos: jspb.Message.getFieldWithDefault(msg, 3, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Embedding.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Embedding();
      return proto.gooseai.Embedding.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Embedding.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.gooseai.Tensor();
            reader.readMessage(value, proto.gooseai.Tensor.deserializeBinaryFromReader);
            msg.setRaw(value);
            break;
          case 2:
            var value = new proto.gooseai.ModuleEmbedding();
            reader.readMessage(value, proto.gooseai.ModuleEmbedding.deserializeBinaryFromReader);
            msg.setModule(value);
            break;
          case 3:
            var value = reader.readUint32();
            msg.setPos(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Embedding.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Embedding.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Embedding.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getRaw();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.gooseai.Tensor.serializeBinaryToWriter
        );
      }
      f = message.getModule();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.gooseai.ModuleEmbedding.serializeBinaryToWriter
        );
      }
      f = jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeUint32(
          3,
          f
        );
      }
    };
    proto.gooseai.Embedding.prototype.getRaw = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.Tensor, 1);
    };
    proto.gooseai.Embedding.prototype.setRaw = function(value) {
      return jspb.Message.setOneofWrapperField(this, 1, proto.gooseai.Embedding.oneofGroups_[0], value);
    };
    proto.gooseai.Embedding.prototype.clearRaw = function() {
      return this.setRaw(void 0);
    };
    proto.gooseai.Embedding.prototype.hasRaw = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.Embedding.prototype.getModule = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.ModuleEmbedding, 2);
    };
    proto.gooseai.Embedding.prototype.setModule = function(value) {
      return jspb.Message.setOneofWrapperField(this, 2, proto.gooseai.Embedding.oneofGroups_[0], value);
    };
    proto.gooseai.Embedding.prototype.clearModule = function() {
      return this.setModule(void 0);
    };
    proto.gooseai.Embedding.prototype.hasModule = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.Embedding.prototype.getPos = function() {
      return jspb.Message.getFieldWithDefault(this, 3, 0);
    };
    proto.gooseai.Embedding.prototype.setPos = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.gooseai.Embedding.prototype.clearPos = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.gooseai.Embedding.prototype.hasPos = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.gooseai.EngineParams.repeatedFields_ = [6];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.EngineParams.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.EngineParams.toObject(opt_includeInstance, this);
      };
      proto.gooseai.EngineParams.toObject = function(includeInstance, msg) {
        var f, obj = {
          maxTokens: jspb.Message.getFieldWithDefault(msg, 1, 0),
          completions: jspb.Message.getFieldWithDefault(msg, 2, 0),
          logprobs: jspb.Message.getFieldWithDefault(msg, 3, 0),
          echo: (f = msg.getEcho()) && proto.gooseai.Echo.toObject(includeInstance, f),
          bestOf: jspb.Message.getFieldWithDefault(msg, 5, 0),
          stopList: jspb.Message.toObjectList(
            msg.getStopList(),
            proto.gooseai.Prompt.toObject,
            includeInstance
          ),
          minTokens: jspb.Message.getFieldWithDefault(msg, 7, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.EngineParams.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.EngineParams();
      return proto.gooseai.EngineParams.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.EngineParams.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readUint32();
            msg.setMaxTokens(value);
            break;
          case 2:
            var value = reader.readUint32();
            msg.setCompletions(value);
            break;
          case 3:
            var value = reader.readUint32();
            msg.setLogprobs(value);
            break;
          case 4:
            var value = new proto.gooseai.Echo();
            reader.readMessage(value, proto.gooseai.Echo.deserializeBinaryFromReader);
            msg.setEcho(value);
            break;
          case 5:
            var value = reader.readUint32();
            msg.setBestOf(value);
            break;
          case 6:
            var value = new proto.gooseai.Prompt();
            reader.readMessage(value, proto.gooseai.Prompt.deserializeBinaryFromReader);
            msg.addStop(value);
            break;
          case 7:
            var value = reader.readUint32();
            msg.setMinTokens(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.EngineParams.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.EngineParams.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.EngineParams.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeUint32(
          1,
          f
        );
      }
      f = jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeUint32(
          2,
          f
        );
      }
      f = jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeUint32(
          3,
          f
        );
      }
      f = message.getEcho();
      if (f != null) {
        writer.writeMessage(
          4,
          f,
          proto.gooseai.Echo.serializeBinaryToWriter
        );
      }
      f = jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeUint32(
          5,
          f
        );
      }
      f = message.getStopList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          6,
          f,
          proto.gooseai.Prompt.serializeBinaryToWriter
        );
      }
      f = jspb.Message.getField(message, 7);
      if (f != null) {
        writer.writeUint32(
          7,
          f
        );
      }
    };
    proto.gooseai.EngineParams.prototype.getMaxTokens = function() {
      return jspb.Message.getFieldWithDefault(this, 1, 0);
    };
    proto.gooseai.EngineParams.prototype.setMaxTokens = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.gooseai.EngineParams.prototype.clearMaxTokens = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.gooseai.EngineParams.prototype.hasMaxTokens = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.EngineParams.prototype.getCompletions = function() {
      return jspb.Message.getFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.EngineParams.prototype.setCompletions = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.gooseai.EngineParams.prototype.clearCompletions = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.gooseai.EngineParams.prototype.hasCompletions = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.EngineParams.prototype.getLogprobs = function() {
      return jspb.Message.getFieldWithDefault(this, 3, 0);
    };
    proto.gooseai.EngineParams.prototype.setLogprobs = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.gooseai.EngineParams.prototype.clearLogprobs = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.gooseai.EngineParams.prototype.hasLogprobs = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.gooseai.EngineParams.prototype.getEcho = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.Echo, 4);
    };
    proto.gooseai.EngineParams.prototype.setEcho = function(value) {
      return jspb.Message.setWrapperField(this, 4, value);
    };
    proto.gooseai.EngineParams.prototype.clearEcho = function() {
      return this.setEcho(void 0);
    };
    proto.gooseai.EngineParams.prototype.hasEcho = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.gooseai.EngineParams.prototype.getBestOf = function() {
      return jspb.Message.getFieldWithDefault(this, 5, 0);
    };
    proto.gooseai.EngineParams.prototype.setBestOf = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.gooseai.EngineParams.prototype.clearBestOf = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.gooseai.EngineParams.prototype.hasBestOf = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.gooseai.EngineParams.prototype.getStopList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Prompt, 6);
    };
    proto.gooseai.EngineParams.prototype.setStopList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 6, value);
    };
    proto.gooseai.EngineParams.prototype.addStop = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.gooseai.Prompt, opt_index);
    };
    proto.gooseai.EngineParams.prototype.clearStopList = function() {
      return this.setStopList([]);
    };
    proto.gooseai.EngineParams.prototype.getMinTokens = function() {
      return jspb.Message.getFieldWithDefault(this, 7, 0);
    };
    proto.gooseai.EngineParams.prototype.setMinTokens = function(value) {
      return jspb.Message.setField(this, 7, value);
    };
    proto.gooseai.EngineParams.prototype.clearMinTokens = function() {
      return jspb.Message.setField(this, 7, void 0);
    };
    proto.gooseai.EngineParams.prototype.hasMinTokens = function() {
      return jspb.Message.getField(this, 7) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.RequestMeta.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.RequestMeta.toObject(opt_includeInstance, this);
      };
      proto.gooseai.RequestMeta.toObject = function(includeInstance, msg) {
        var f, obj = {
          streaming: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.RequestMeta.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.RequestMeta();
      return proto.gooseai.RequestMeta.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.RequestMeta.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readBool();
            msg.setStreaming(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.RequestMeta.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.RequestMeta.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.RequestMeta.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeBool(
          1,
          f
        );
      }
    };
    proto.gooseai.RequestMeta.prototype.getStreaming = function() {
      return jspb.Message.getBooleanFieldWithDefault(this, 1, false);
    };
    proto.gooseai.RequestMeta.prototype.setStreaming = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.gooseai.RequestMeta.prototype.clearStreaming = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.gooseai.RequestMeta.prototype.hasStreaming = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.Request.repeatedFields_ = [2, 6];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Request.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Request.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Request.toObject = function(includeInstance, msg) {
        var f, obj = {
          engineId: jspb.Message.getFieldWithDefault(msg, 1, ""),
          promptList: jspb.Message.toObjectList(
            msg.getPromptList(),
            proto.gooseai.Prompt.toObject,
            includeInstance
          ),
          modelParams: (f = msg.getModelParams()) && proto.gooseai.ModelParams.toObject(includeInstance, f),
          engineParams: (f = msg.getEngineParams()) && proto.gooseai.EngineParams.toObject(includeInstance, f),
          requestId: jspb.Message.getFieldWithDefault(msg, 5, ""),
          embeddingsList: jspb.Message.toObjectList(
            msg.getEmbeddingsList(),
            proto.gooseai.Embedding.toObject,
            includeInstance
          ),
          originReceived: jspb.Message.getFieldWithDefault(msg, 7, 0),
          meta: (f = msg.getMeta()) && proto.gooseai.RequestMeta.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Request.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Request();
      return proto.gooseai.Request.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Request.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setEngineId(value);
            break;
          case 2:
            var value = new proto.gooseai.Prompt();
            reader.readMessage(value, proto.gooseai.Prompt.deserializeBinaryFromReader);
            msg.addPrompt(value);
            break;
          case 3:
            var value = new proto.gooseai.ModelParams();
            reader.readMessage(value, proto.gooseai.ModelParams.deserializeBinaryFromReader);
            msg.setModelParams(value);
            break;
          case 4:
            var value = new proto.gooseai.EngineParams();
            reader.readMessage(value, proto.gooseai.EngineParams.deserializeBinaryFromReader);
            msg.setEngineParams(value);
            break;
          case 5:
            var value = reader.readString();
            msg.setRequestId(value);
            break;
          case 6:
            var value = new proto.gooseai.Embedding();
            reader.readMessage(value, proto.gooseai.Embedding.deserializeBinaryFromReader);
            msg.addEmbeddings(value);
            break;
          case 7:
            var value = reader.readUint64();
            msg.setOriginReceived(value);
            break;
          case 8:
            var value = new proto.gooseai.RequestMeta();
            reader.readMessage(value, proto.gooseai.RequestMeta.deserializeBinaryFromReader);
            msg.setMeta(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Request.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Request.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Request.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getEngineId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getPromptList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          2,
          f,
          proto.gooseai.Prompt.serializeBinaryToWriter
        );
      }
      f = message.getModelParams();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.gooseai.ModelParams.serializeBinaryToWriter
        );
      }
      f = message.getEngineParams();
      if (f != null) {
        writer.writeMessage(
          4,
          f,
          proto.gooseai.EngineParams.serializeBinaryToWriter
        );
      }
      f = jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeString(
          5,
          f
        );
      }
      f = message.getEmbeddingsList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          6,
          f,
          proto.gooseai.Embedding.serializeBinaryToWriter
        );
      }
      f = jspb.Message.getField(message, 7);
      if (f != null) {
        writer.writeUint64(
          7,
          f
        );
      }
      f = message.getMeta();
      if (f != null) {
        writer.writeMessage(
          8,
          f,
          proto.gooseai.RequestMeta.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.Request.prototype.getEngineId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.Request.prototype.setEngineId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.Request.prototype.getPromptList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Prompt, 2);
    };
    proto.gooseai.Request.prototype.setPromptList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 2, value);
    };
    proto.gooseai.Request.prototype.addPrompt = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.gooseai.Prompt, opt_index);
    };
    proto.gooseai.Request.prototype.clearPromptList = function() {
      return this.setPromptList([]);
    };
    proto.gooseai.Request.prototype.getModelParams = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.ModelParams, 3);
    };
    proto.gooseai.Request.prototype.setModelParams = function(value) {
      return jspb.Message.setWrapperField(this, 3, value);
    };
    proto.gooseai.Request.prototype.clearModelParams = function() {
      return this.setModelParams(void 0);
    };
    proto.gooseai.Request.prototype.hasModelParams = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.gooseai.Request.prototype.getEngineParams = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.EngineParams, 4);
    };
    proto.gooseai.Request.prototype.setEngineParams = function(value) {
      return jspb.Message.setWrapperField(this, 4, value);
    };
    proto.gooseai.Request.prototype.clearEngineParams = function() {
      return this.setEngineParams(void 0);
    };
    proto.gooseai.Request.prototype.hasEngineParams = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.gooseai.Request.prototype.getRequestId = function() {
      return jspb.Message.getFieldWithDefault(this, 5, "");
    };
    proto.gooseai.Request.prototype.setRequestId = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.gooseai.Request.prototype.clearRequestId = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.gooseai.Request.prototype.hasRequestId = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.gooseai.Request.prototype.getEmbeddingsList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Embedding, 6);
    };
    proto.gooseai.Request.prototype.setEmbeddingsList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 6, value);
    };
    proto.gooseai.Request.prototype.addEmbeddings = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.gooseai.Embedding, opt_index);
    };
    proto.gooseai.Request.prototype.clearEmbeddingsList = function() {
      return this.setEmbeddingsList([]);
    };
    proto.gooseai.Request.prototype.getOriginReceived = function() {
      return jspb.Message.getFieldWithDefault(this, 7, 0);
    };
    proto.gooseai.Request.prototype.setOriginReceived = function(value) {
      return jspb.Message.setField(this, 7, value);
    };
    proto.gooseai.Request.prototype.clearOriginReceived = function() {
      return jspb.Message.setField(this, 7, void 0);
    };
    proto.gooseai.Request.prototype.hasOriginReceived = function() {
      return jspb.Message.getField(this, 7) != null;
    };
    proto.gooseai.Request.prototype.getMeta = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.RequestMeta, 8);
    };
    proto.gooseai.Request.prototype.setMeta = function(value) {
      return jspb.Message.setWrapperField(this, 8, value);
    };
    proto.gooseai.Request.prototype.clearMeta = function() {
      return this.setMeta(void 0);
    };
    proto.gooseai.Request.prototype.hasMeta = function() {
      return jspb.Message.getField(this, 8) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.LogProb.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.LogProb.toObject(opt_includeInstance, this);
      };
      proto.gooseai.LogProb.toObject = function(includeInstance, msg) {
        var f, obj = {
          token: (f = msg.getToken()) && proto.gooseai.Token.toObject(includeInstance, f),
          logprob: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0),
          logprobBefore: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.LogProb.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.LogProb();
      return proto.gooseai.LogProb.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.LogProb.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.gooseai.Token();
            reader.readMessage(value, proto.gooseai.Token.deserializeBinaryFromReader);
            msg.setToken(value);
            break;
          case 2:
            var value = reader.readDouble();
            msg.setLogprob(value);
            break;
          case 3:
            var value = reader.readDouble();
            msg.setLogprobBefore(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.LogProb.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.LogProb.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.LogProb.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getToken();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.gooseai.Token.serializeBinaryToWriter
        );
      }
      f = jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeDouble(
          2,
          f
        );
      }
      f = jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeDouble(
          3,
          f
        );
      }
    };
    proto.gooseai.LogProb.prototype.getToken = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.Token, 1);
    };
    proto.gooseai.LogProb.prototype.setToken = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.gooseai.LogProb.prototype.clearToken = function() {
      return this.setToken(void 0);
    };
    proto.gooseai.LogProb.prototype.hasToken = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.LogProb.prototype.getLogprob = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.LogProb.prototype.setLogprob = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.gooseai.LogProb.prototype.clearLogprob = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.gooseai.LogProb.prototype.hasLogprob = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.LogProb.prototype.getLogprobBefore = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0);
    };
    proto.gooseai.LogProb.prototype.setLogprobBefore = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.gooseai.LogProb.prototype.clearLogprobBefore = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.gooseai.LogProb.prototype.hasLogprobBefore = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.gooseai.TokenLogProbs.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.TokenLogProbs.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.TokenLogProbs.toObject(opt_includeInstance, this);
      };
      proto.gooseai.TokenLogProbs.toObject = function(includeInstance, msg) {
        var f, obj = {
          logprobsList: jspb.Message.toObjectList(
            msg.getLogprobsList(),
            proto.gooseai.LogProb.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.TokenLogProbs.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.TokenLogProbs();
      return proto.gooseai.TokenLogProbs.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.TokenLogProbs.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.gooseai.LogProb();
            reader.readMessage(value, proto.gooseai.LogProb.deserializeBinaryFromReader);
            msg.addLogprobs(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.TokenLogProbs.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.TokenLogProbs.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.TokenLogProbs.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getLogprobsList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          1,
          f,
          proto.gooseai.LogProb.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.TokenLogProbs.prototype.getLogprobsList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.LogProb, 1);
    };
    proto.gooseai.TokenLogProbs.prototype.setLogprobsList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 1, value);
    };
    proto.gooseai.TokenLogProbs.prototype.addLogprobs = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gooseai.LogProb, opt_index);
    };
    proto.gooseai.TokenLogProbs.prototype.clearLogprobsList = function() {
      return this.setLogprobsList([]);
    };
    proto.gooseai.LogProbs.repeatedFields_ = [2, 3, 4];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.LogProbs.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.LogProbs.toObject(opt_includeInstance, this);
      };
      proto.gooseai.LogProbs.toObject = function(includeInstance, msg) {
        var f, obj = {
          tokens: (f = msg.getTokens()) && proto.gooseai.TokenLogProbs.toObject(includeInstance, f),
          textOffsetList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? void 0 : f,
          topList: jspb.Message.toObjectList(
            msg.getTopList(),
            proto.gooseai.TokenLogProbs.toObject,
            includeInstance
          ),
          topBeforeList: jspb.Message.toObjectList(
            msg.getTopBeforeList(),
            proto.gooseai.TokenLogProbs.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.LogProbs.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.LogProbs();
      return proto.gooseai.LogProbs.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.LogProbs.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.gooseai.TokenLogProbs();
            reader.readMessage(value, proto.gooseai.TokenLogProbs.deserializeBinaryFromReader);
            msg.setTokens(value);
            break;
          case 2:
            var values = reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()];
            for (var i = 0; i < values.length; i++) {
              msg.addTextOffset(values[i]);
            }
            break;
          case 3:
            var value = new proto.gooseai.TokenLogProbs();
            reader.readMessage(value, proto.gooseai.TokenLogProbs.deserializeBinaryFromReader);
            msg.addTop(value);
            break;
          case 4:
            var value = new proto.gooseai.TokenLogProbs();
            reader.readMessage(value, proto.gooseai.TokenLogProbs.deserializeBinaryFromReader);
            msg.addTopBefore(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.LogProbs.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.LogProbs.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.LogProbs.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getTokens();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.gooseai.TokenLogProbs.serializeBinaryToWriter
        );
      }
      f = message.getTextOffsetList();
      if (f.length > 0) {
        writer.writePackedUint32(
          2,
          f
        );
      }
      f = message.getTopList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          3,
          f,
          proto.gooseai.TokenLogProbs.serializeBinaryToWriter
        );
      }
      f = message.getTopBeforeList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          4,
          f,
          proto.gooseai.TokenLogProbs.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.LogProbs.prototype.getTokens = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.TokenLogProbs, 1);
    };
    proto.gooseai.LogProbs.prototype.setTokens = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.gooseai.LogProbs.prototype.clearTokens = function() {
      return this.setTokens(void 0);
    };
    proto.gooseai.LogProbs.prototype.hasTokens = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.LogProbs.prototype.getTextOffsetList = function() {
      return jspb.Message.getRepeatedField(this, 2);
    };
    proto.gooseai.LogProbs.prototype.setTextOffsetList = function(value) {
      return jspb.Message.setField(this, 2, value || []);
    };
    proto.gooseai.LogProbs.prototype.addTextOffset = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
    };
    proto.gooseai.LogProbs.prototype.clearTextOffsetList = function() {
      return this.setTextOffsetList([]);
    };
    proto.gooseai.LogProbs.prototype.getTopList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.TokenLogProbs, 3);
    };
    proto.gooseai.LogProbs.prototype.setTopList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 3, value);
    };
    proto.gooseai.LogProbs.prototype.addTop = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.gooseai.TokenLogProbs, opt_index);
    };
    proto.gooseai.LogProbs.prototype.clearTopList = function() {
      return this.setTopList([]);
    };
    proto.gooseai.LogProbs.prototype.getTopBeforeList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.TokenLogProbs, 4);
    };
    proto.gooseai.LogProbs.prototype.setTopBeforeList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 4, value);
    };
    proto.gooseai.LogProbs.prototype.addTopBefore = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.gooseai.TokenLogProbs, opt_index);
    };
    proto.gooseai.LogProbs.prototype.clearTopBeforeList = function() {
      return this.setTopBeforeList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Completion.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Completion.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Completion.toObject = function(includeInstance, msg) {
        var f, obj = {
          text: jspb.Message.getFieldWithDefault(msg, 1, ""),
          index: jspb.Message.getFieldWithDefault(msg, 2, 0),
          logprobs: (f = msg.getLogprobs()) && proto.gooseai.LogProbs.toObject(includeInstance, f),
          finishReason: jspb.Message.getFieldWithDefault(msg, 4, 0),
          tokenIndex: jspb.Message.getFieldWithDefault(msg, 5, 0),
          started: jspb.Message.getFieldWithDefault(msg, 6, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Completion.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Completion();
      return proto.gooseai.Completion.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Completion.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setText(value);
            break;
          case 2:
            var value = reader.readUint32();
            msg.setIndex(value);
            break;
          case 3:
            var value = new proto.gooseai.LogProbs();
            reader.readMessage(value, proto.gooseai.LogProbs.deserializeBinaryFromReader);
            msg.setLogprobs(value);
            break;
          case 4:
            var value = reader.readEnum();
            msg.setFinishReason(value);
            break;
          case 5:
            var value = reader.readUint32();
            msg.setTokenIndex(value);
            break;
          case 6:
            var value = reader.readUint64();
            msg.setStarted(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Completion.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Completion.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Completion.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getText();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getIndex();
      if (f !== 0) {
        writer.writeUint32(
          2,
          f
        );
      }
      f = message.getLogprobs();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.gooseai.LogProbs.serializeBinaryToWriter
        );
      }
      f = message.getFinishReason();
      if (f !== 0) {
        writer.writeEnum(
          4,
          f
        );
      }
      f = message.getTokenIndex();
      if (f !== 0) {
        writer.writeUint32(
          5,
          f
        );
      }
      f = message.getStarted();
      if (f !== 0) {
        writer.writeUint64(
          6,
          f
        );
      }
    };
    proto.gooseai.Completion.prototype.getText = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.Completion.prototype.setText = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.Completion.prototype.getIndex = function() {
      return jspb.Message.getFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.Completion.prototype.setIndex = function(value) {
      return jspb.Message.setProto3IntField(this, 2, value);
    };
    proto.gooseai.Completion.prototype.getLogprobs = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.LogProbs, 3);
    };
    proto.gooseai.Completion.prototype.setLogprobs = function(value) {
      return jspb.Message.setWrapperField(this, 3, value);
    };
    proto.gooseai.Completion.prototype.clearLogprobs = function() {
      return this.setLogprobs(void 0);
    };
    proto.gooseai.Completion.prototype.hasLogprobs = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.gooseai.Completion.prototype.getFinishReason = function() {
      return jspb.Message.getFieldWithDefault(this, 4, 0);
    };
    proto.gooseai.Completion.prototype.setFinishReason = function(value) {
      return jspb.Message.setProto3EnumField(this, 4, value);
    };
    proto.gooseai.Completion.prototype.getTokenIndex = function() {
      return jspb.Message.getFieldWithDefault(this, 5, 0);
    };
    proto.gooseai.Completion.prototype.setTokenIndex = function(value) {
      return jspb.Message.setProto3IntField(this, 5, value);
    };
    proto.gooseai.Completion.prototype.getStarted = function() {
      return jspb.Message.getFieldWithDefault(this, 6, 0);
    };
    proto.gooseai.Completion.prototype.setStarted = function(value) {
      return jspb.Message.setProto3IntField(this, 6, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.AnswerMeta.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.AnswerMeta.toObject(opt_includeInstance, this);
      };
      proto.gooseai.AnswerMeta.toObject = function(includeInstance, msg) {
        var f, obj = {
          gpuId: jspb.Message.getFieldWithDefault(msg, 1, ""),
          cpuId: jspb.Message.getFieldWithDefault(msg, 2, ""),
          nodeId: jspb.Message.getFieldWithDefault(msg, 3, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.AnswerMeta.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.AnswerMeta();
      return proto.gooseai.AnswerMeta.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.AnswerMeta.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setGpuId(value);
            break;
          case 2:
            var value = reader.readString();
            msg.setCpuId(value);
            break;
          case 3:
            var value = reader.readString();
            msg.setNodeId(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.AnswerMeta.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.AnswerMeta.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.AnswerMeta.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeString(
          1,
          f
        );
      }
      f = jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeString(
          2,
          f
        );
      }
      f = jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeString(
          3,
          f
        );
      }
    };
    proto.gooseai.AnswerMeta.prototype.getGpuId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.AnswerMeta.prototype.setGpuId = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.gooseai.AnswerMeta.prototype.clearGpuId = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.gooseai.AnswerMeta.prototype.hasGpuId = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.AnswerMeta.prototype.getCpuId = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.gooseai.AnswerMeta.prototype.setCpuId = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.gooseai.AnswerMeta.prototype.clearCpuId = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.gooseai.AnswerMeta.prototype.hasCpuId = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.AnswerMeta.prototype.getNodeId = function() {
      return jspb.Message.getFieldWithDefault(this, 3, "");
    };
    proto.gooseai.AnswerMeta.prototype.setNodeId = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.gooseai.AnswerMeta.prototype.clearNodeId = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.gooseai.AnswerMeta.prototype.hasNodeId = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.gooseai.Answer.repeatedFields_ = [4];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Answer.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Answer.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Answer.toObject = function(includeInstance, msg) {
        var f, obj = {
          answerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
          created: jspb.Message.getFieldWithDefault(msg, 2, 0),
          model: jspb.Message.getFieldWithDefault(msg, 3, ""),
          choicesList: jspb.Message.toObjectList(
            msg.getChoicesList(),
            proto.gooseai.Completion.toObject,
            includeInstance
          ),
          requestId: jspb.Message.getFieldWithDefault(msg, 5, ""),
          inferenceReceived: jspb.Message.getFieldWithDefault(msg, 6, 0),
          meta: (f = msg.getMeta()) && proto.gooseai.AnswerMeta.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Answer.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Answer();
      return proto.gooseai.Answer.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Answer.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setAnswerId(value);
            break;
          case 2:
            var value = reader.readUint64();
            msg.setCreated(value);
            break;
          case 3:
            var value = reader.readString();
            msg.setModel(value);
            break;
          case 4:
            var value = new proto.gooseai.Completion();
            reader.readMessage(value, proto.gooseai.Completion.deserializeBinaryFromReader);
            msg.addChoices(value);
            break;
          case 5:
            var value = reader.readString();
            msg.setRequestId(value);
            break;
          case 6:
            var value = reader.readUint64();
            msg.setInferenceReceived(value);
            break;
          case 7:
            var value = new proto.gooseai.AnswerMeta();
            reader.readMessage(value, proto.gooseai.AnswerMeta.deserializeBinaryFromReader);
            msg.setMeta(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Answer.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Answer.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Answer.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getAnswerId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getCreated();
      if (f !== 0) {
        writer.writeUint64(
          2,
          f
        );
      }
      f = message.getModel();
      if (f.length > 0) {
        writer.writeString(
          3,
          f
        );
      }
      f = message.getChoicesList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          4,
          f,
          proto.gooseai.Completion.serializeBinaryToWriter
        );
      }
      f = jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeString(
          5,
          f
        );
      }
      f = message.getInferenceReceived();
      if (f !== 0) {
        writer.writeUint64(
          6,
          f
        );
      }
      f = message.getMeta();
      if (f != null) {
        writer.writeMessage(
          7,
          f,
          proto.gooseai.AnswerMeta.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.Answer.prototype.getAnswerId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.Answer.prototype.setAnswerId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.Answer.prototype.getCreated = function() {
      return jspb.Message.getFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.Answer.prototype.setCreated = function(value) {
      return jspb.Message.setProto3IntField(this, 2, value);
    };
    proto.gooseai.Answer.prototype.getModel = function() {
      return jspb.Message.getFieldWithDefault(this, 3, "");
    };
    proto.gooseai.Answer.prototype.setModel = function(value) {
      return jspb.Message.setProto3StringField(this, 3, value);
    };
    proto.gooseai.Answer.prototype.getChoicesList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Completion, 4);
    };
    proto.gooseai.Answer.prototype.setChoicesList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 4, value);
    };
    proto.gooseai.Answer.prototype.addChoices = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.gooseai.Completion, opt_index);
    };
    proto.gooseai.Answer.prototype.clearChoicesList = function() {
      return this.setChoicesList([]);
    };
    proto.gooseai.Answer.prototype.getRequestId = function() {
      return jspb.Message.getFieldWithDefault(this, 5, "");
    };
    proto.gooseai.Answer.prototype.setRequestId = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.gooseai.Answer.prototype.clearRequestId = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.gooseai.Answer.prototype.hasRequestId = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.gooseai.Answer.prototype.getInferenceReceived = function() {
      return jspb.Message.getFieldWithDefault(this, 6, 0);
    };
    proto.gooseai.Answer.prototype.setInferenceReceived = function(value) {
      return jspb.Message.setProto3IntField(this, 6, value);
    };
    proto.gooseai.Answer.prototype.getMeta = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.AnswerMeta, 7);
    };
    proto.gooseai.Answer.prototype.setMeta = function(value) {
      return jspb.Message.setWrapperField(this, 7, value);
    };
    proto.gooseai.Answer.prototype.clearMeta = function() {
      return this.setMeta(void 0);
    };
    proto.gooseai.Answer.prototype.hasMeta = function() {
      return jspb.Message.getField(this, 7) != null;
    };
    proto.gooseai.FinishReason = {
      NULL: 0,
      LENGTH: 1,
      STOP: 2,
      ERROR: 3
    };
    proto.gooseai.SamplingMethod = {
      NONE: 0,
      TEMPERATURE: 1,
      TOP_K: 2,
      TOP_P: 3,
      TFS: 4,
      TOP_A: 5,
      TYPICAL_P: 6
    };
    proto.gooseai.NumType = {
      FP16: 0,
      FP32: 1,
      BF16: 2
    };
    goog.object.extend(exports, proto.gooseai);
  }
});

// completion/completion_grpc_pb.js
var require_completion_grpc_pb = __commonJS({
  "completion/completion_grpc_pb.js"(exports) {
    var grpc = __require("grpc");
    var completion_pb = require_completion_pb();
    function serialize_gooseai_Answer(arg) {
      if (!(arg instanceof completion_pb.Answer)) {
        throw new Error("Expected argument of type gooseai.Answer");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_Answer(buffer_arg) {
      return completion_pb.Answer.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_Request(arg) {
      if (!(arg instanceof completion_pb.Request)) {
        throw new Error("Expected argument of type gooseai.Request");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_Request(buffer_arg) {
      return completion_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var CompletionServiceService = exports.CompletionServiceService = {
      completion: {
        path: "/gooseai.CompletionService/Completion",
        requestStream: false,
        responseStream: true,
        requestType: completion_pb.Request,
        responseType: completion_pb.Answer,
        requestSerialize: serialize_gooseai_Request,
        requestDeserialize: deserialize_gooseai_Request,
        responseSerialize: serialize_gooseai_Answer,
        responseDeserialize: deserialize_gooseai_Answer
      }
    };
    exports.CompletionServiceClient = grpc.makeGenericClientConstructor(CompletionServiceService);
  }
});
export default require_completion_grpc_pb();
