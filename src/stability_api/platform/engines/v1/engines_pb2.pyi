from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class EngineType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    TEXT: _ClassVar[EngineType]
    PICTURE: _ClassVar[EngineType]
    AUDIO: _ClassVar[EngineType]
    VIDEO: _ClassVar[EngineType]
    CLASSIFICATION: _ClassVar[EngineType]
    STORAGE: _ClassVar[EngineType]

class EngineTokenizer(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    GPT2: _ClassVar[EngineTokenizer]
    PILE: _ClassVar[EngineTokenizer]
TEXT: EngineType
PICTURE: EngineType
AUDIO: EngineType
VIDEO: EngineType
CLASSIFICATION: EngineType
STORAGE: EngineType
GPT2: EngineTokenizer
PILE: EngineTokenizer

class EngineInfo(_message.Message):
    __slots__ = ["id", "owner", "ready", "type", "tokenizer", "name", "description", "can_fine_tune"]
    ID_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    READY_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    TOKENIZER_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    CAN_FINE_TUNE_FIELD_NUMBER: _ClassVar[int]
    id: str
    owner: str
    ready: bool
    type: EngineType
    tokenizer: EngineTokenizer
    name: str
    description: str
    can_fine_tune: bool
    def __init__(self, id: _Optional[str] = ..., owner: _Optional[str] = ..., ready: bool = ..., type: _Optional[_Union[EngineType, str]] = ..., tokenizer: _Optional[_Union[EngineTokenizer, str]] = ..., name: _Optional[str] = ..., description: _Optional[str] = ..., can_fine_tune: bool = ...) -> None: ...

class ListEnginesRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class Engines(_message.Message):
    __slots__ = ["engine"]
    ENGINE_FIELD_NUMBER: _ClassVar[int]
    engine: _containers.RepeatedCompositeFieldContainer[EngineInfo]
    def __init__(self, engine: _Optional[_Iterable[_Union[EngineInfo, _Mapping]]] = ...) -> None: ...
