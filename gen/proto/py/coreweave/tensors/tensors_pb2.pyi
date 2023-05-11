from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Dtype(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    DT_INVALID: _ClassVar[Dtype]
    DT_FLOAT32: _ClassVar[Dtype]
    DT_FLOAT64: _ClassVar[Dtype]
    DT_FLOAT16: _ClassVar[Dtype]
    DT_BFLOAT16: _ClassVar[Dtype]
    DT_COMPLEX32: _ClassVar[Dtype]
    DT_COMPLEX64: _ClassVar[Dtype]
    DT_COMPLEX128: _ClassVar[Dtype]
    DT_UINT8: _ClassVar[Dtype]
    DT_INT8: _ClassVar[Dtype]
    DT_INT16: _ClassVar[Dtype]
    DT_INT32: _ClassVar[Dtype]
    DT_INT64: _ClassVar[Dtype]
    DT_BOOL: _ClassVar[Dtype]
    DT_QUINT8: _ClassVar[Dtype]
    DT_QINT8: _ClassVar[Dtype]
    DT_QINT32: _ClassVar[Dtype]
    DT_QUINT4_2: _ClassVar[Dtype]

class AttributeType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    AT_PARAMETER: _ClassVar[AttributeType]
    AT_BUFFER: _ClassVar[AttributeType]
DT_INVALID: Dtype
DT_FLOAT32: Dtype
DT_FLOAT64: Dtype
DT_FLOAT16: Dtype
DT_BFLOAT16: Dtype
DT_COMPLEX32: Dtype
DT_COMPLEX64: Dtype
DT_COMPLEX128: Dtype
DT_UINT8: Dtype
DT_INT8: Dtype
DT_INT16: Dtype
DT_INT32: Dtype
DT_INT64: Dtype
DT_BOOL: Dtype
DT_QUINT8: Dtype
DT_QINT8: Dtype
DT_QINT32: Dtype
DT_QUINT4_2: Dtype
AT_PARAMETER: AttributeType
AT_BUFFER: AttributeType

class Tensor(_message.Message):
    __slots__ = ["dtype", "shape", "data", "attr_type"]
    DTYPE_FIELD_NUMBER: _ClassVar[int]
    SHAPE_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    ATTR_TYPE_FIELD_NUMBER: _ClassVar[int]
    dtype: Dtype
    shape: _containers.RepeatedScalarFieldContainer[int]
    data: bytes
    attr_type: AttributeType
    def __init__(self, dtype: _Optional[_Union[Dtype, str]] = ..., shape: _Optional[_Iterable[int]] = ..., data: _Optional[bytes] = ..., attr_type: _Optional[_Union[AttributeType, str]] = ...) -> None: ...

class Attribute(_message.Message):
    __slots__ = ["name", "module", "tensor", "string", "int64", "float", "bool"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    MODULE_FIELD_NUMBER: _ClassVar[int]
    TENSOR_FIELD_NUMBER: _ClassVar[int]
    STRING_FIELD_NUMBER: _ClassVar[int]
    INT64_FIELD_NUMBER: _ClassVar[int]
    FLOAT_FIELD_NUMBER: _ClassVar[int]
    BOOL_FIELD_NUMBER: _ClassVar[int]
    name: str
    module: Module
    tensor: Tensor
    string: str
    int64: int
    float: float
    bool: bool
    def __init__(self, name: _Optional[str] = ..., module: _Optional[_Union[Module, _Mapping]] = ..., tensor: _Optional[_Union[Tensor, _Mapping]] = ..., string: _Optional[str] = ..., int64: _Optional[int] = ..., float: _Optional[float] = ..., bool: bool = ...) -> None: ...

class Module(_message.Message):
    __slots__ = ["name", "names", "attributes"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    NAMES_FIELD_NUMBER: _ClassVar[int]
    ATTRIBUTES_FIELD_NUMBER: _ClassVar[int]
    name: str
    names: _containers.RepeatedScalarFieldContainer[str]
    attributes: _containers.RepeatedCompositeFieldContainer[Attribute]
    def __init__(self, name: _Optional[str] = ..., names: _Optional[_Iterable[str]] = ..., attributes: _Optional[_Iterable[_Union[Attribute, _Mapping]]] = ...) -> None: ...
