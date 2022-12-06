
'Generated protocol buffer code.'
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
_sym_db = _symbol_database.Default()
DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1etensorizer/proto/tensors.proto\x12\x07tensors"\xa0\x01\n\x06Tensor\x12$\n\x05dtype\x18\x01 \x01(\x0e2\x0e.tensors.DtypeR\x05dtype\x12\x14\n\x05shape\x18\x02 \x03(\x03R\x05shape\x12\x12\n\x04data\x18\x03 \x01(\x0cR\x04data\x128\n\tattr_type\x18\x04 \x01(\x0e2\x16.tensors.AttributeTypeH\x00R\x08attrType\x88\x01\x01B\x0c\n\n_attr_type"\xde\x01\n\tAttribute\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12)\n\x06module\x18\x03 \x01(\x0b2\x0f.tensors.ModuleH\x00R\x06module\x12)\n\x06tensor\x18\x04 \x01(\x0b2\x0f.tensors.TensorH\x00R\x06tensor\x12\x18\n\x06string\x18\x05 \x01(\tH\x00R\x06string\x12\x16\n\x05int64\x18\x06 \x01(\x03H\x00R\x05int64\x12\x16\n\x05float\x18\x07 \x01(\x02H\x00R\x05float\x12\x14\n\x04bool\x18\x08 \x01(\x08H\x00R\x04boolB\x07\n\x05value"f\n\x06Module\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12\x14\n\x05names\x18\x02 \x03(\tR\x05names\x122\n\nattributes\x18\x03 \x03(\x0b2\x12.tensors.AttributeR\nattributes*\x9e\x02\n\x05Dtype\x12\x0e\n\nDT_INVALID\x10\x00\x12\x0e\n\nDT_FLOAT32\x10\x01\x12\x0e\n\nDT_FLOAT64\x10\x02\x12\x0e\n\nDT_FLOAT16\x10\x03\x12\x0f\n\x0bDT_BFLOAT16\x10\x04\x12\x10\n\x0cDT_COMPLEX32\x10\x05\x12\x10\n\x0cDT_COMPLEX64\x10\x06\x12\x11\n\rDT_COMPLEX128\x10\x07\x12\x0c\n\x08DT_UINT8\x10\x08\x12\x0b\n\x07DT_INT8\x10\t\x12\x0c\n\x08DT_INT16\x10\n\x12\x0c\n\x08DT_INT32\x10\x0b\x12\x0c\n\x08DT_INT64\x10\x0c\x12\x0b\n\x07DT_BOOL\x10\r\x12\r\n\tDT_QUINT8\x10\x0e\x12\x0c\n\x08DT_QINT8\x10\x0f\x12\r\n\tDT_QINT32\x10\x10\x12\x0f\n\x0bDT_QUINT4_2\x10\x11*0\n\rAttributeType\x12\x10\n\x0cAT_PARAMETER\x10\x00\x12\r\n\tAT_BUFFER\x10\x01B\x9d\x01\n\x0bcom.tensorsB\x0cTensorsProtoP\x01ZDgithub.com/stability-ai/api-interfaces/gen/proto/go/tensorizer/proto\xa2\x02\x03TXX\xaa\x02\x07Tensors\xca\x02\x07Tensors\xe2\x02\x13Tensors\\GPBMetadata\xea\x02\x07Tensorsb\x06proto3')
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'tensorizer.proto.tensors_pb2', globals())
if (_descriptor._USE_C_DESCRIPTORS == False):
    DESCRIPTOR._options = None
    DESCRIPTOR._serialized_options = b'\n\x0bcom.tensorsB\x0cTensorsProtoP\x01ZDgithub.com/stability-ai/api-interfaces/gen/proto/go/tensorizer/proto\xa2\x02\x03TXX\xaa\x02\x07Tensors\xca\x02\x07Tensors\xe2\x02\x13Tensors\\GPBMetadata\xea\x02\x07Tensors'
    _DTYPE._serialized_start = 536
    _DTYPE._serialized_end = 822
    _ATTRIBUTETYPE._serialized_start = 824
    _ATTRIBUTETYPE._serialized_end = 872
    _TENSOR._serialized_start = 44
    _TENSOR._serialized_end = 204
    _ATTRIBUTE._serialized_start = 207
    _ATTRIBUTE._serialized_end = 429
    _MODULE._serialized_start = 431
    _MODULE._serialized_end = 533
