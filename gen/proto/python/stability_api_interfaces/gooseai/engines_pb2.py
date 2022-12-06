
'Generated protocol buffer code.'
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
_sym_db = _symbol_database.Default()
DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x15gooseai/engines.proto\x12\x07gooseai"\xdf\x01\n\nEngineInfo\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x14\n\x05owner\x18\x02 \x01(\tR\x05owner\x12\x14\n\x05ready\x18\x03 \x01(\x08R\x05ready\x12\'\n\x04type\x18\x04 \x01(\x0e2\x13.gooseai.EngineTypeR\x04type\x126\n\ttokenizer\x18\x05 \x01(\x0e2\x18.gooseai.EngineTokenizerR\ttokenizer\x12\x12\n\x04name\x18\x06 \x01(\tR\x04name\x12 \n\x0bdescription\x18\x07 \x01(\tR\x0bdescription"\x14\n\x12ListEnginesRequest"6\n\x07Engines\x12+\n\x06engine\x18\x01 \x03(\x0b2\x13.gooseai.EngineInfoR\x06engine*Z\n\nEngineType\x12\x08\n\x04TEXT\x10\x00\x12\x0b\n\x07PICTURE\x10\x01\x12\t\n\x05AUDIO\x10\x02\x12\t\n\x05VIDEO\x10\x03\x12\x12\n\x0eCLASSIFICATION\x10\x04\x12\x0b\n\x07STORAGE\x10\x05*%\n\x0fEngineTokenizer\x12\x08\n\x04GPT2\x10\x00\x12\x08\n\x04PILE\x10\x012P\n\x0eEnginesService\x12>\n\x0bListEngines\x12\x1b.gooseai.ListEnginesRequest\x1a\x10.gooseai.Engines"\x00B\x94\x01\n\x0bcom.gooseaiB\x0cEnginesProtoP\x01Z;github.com/stability-ai/api-interfaces/gen/proto/go/gooseai\xa2\x02\x03GXX\xaa\x02\x07Gooseai\xca\x02\x07Gooseai\xe2\x02\x13Gooseai\\GPBMetadata\xea\x02\x07Gooseaib\x06proto3')
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'gooseai.engines_pb2', globals())
if (_descriptor._USE_C_DESCRIPTORS == False):
    DESCRIPTOR._options = None
    DESCRIPTOR._serialized_options = b'\n\x0bcom.gooseaiB\x0cEnginesProtoP\x01Z;github.com/stability-ai/api-interfaces/gen/proto/go/gooseai\xa2\x02\x03GXX\xaa\x02\x07Gooseai\xca\x02\x07Gooseai\xe2\x02\x13Gooseai\\GPBMetadata\xea\x02\x07Gooseai'
    _ENGINETYPE._serialized_start = 338
    _ENGINETYPE._serialized_end = 428
    _ENGINETOKENIZER._serialized_start = 430
    _ENGINETOKENIZER._serialized_end = 467
    _ENGINEINFO._serialized_start = 35
    _ENGINEINFO._serialized_end = 258
    _LISTENGINESREQUEST._serialized_start = 260
    _LISTENGINESREQUEST._serialized_end = 280
    _ENGINES._serialized_start = 282
    _ENGINES._serialized_end = 336
    _ENGINESSERVICE._serialized_start = 469
    _ENGINESSERVICE._serialized_end = 549
