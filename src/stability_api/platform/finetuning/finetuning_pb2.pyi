from google.protobuf import struct_pb2 as _struct_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class FineTuningMode(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    FINE_TUNING_MODE_UNSPECIFIED: _ClassVar[FineTuningMode]
    FINE_TUNING_MODE_FACE: _ClassVar[FineTuningMode]
    FINE_TUNING_MODE_STYLE: _ClassVar[FineTuningMode]
    FINE_TUNING_MODE_OBJECT: _ClassVar[FineTuningMode]

class FineTuningStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    FINE_TUNING_STATUS_NOT_STARTED: _ClassVar[FineTuningStatus]
    FINE_TUNING_STATUS_RUNNING: _ClassVar[FineTuningStatus]
    FINE_TUNING_STATUS_COMPLETED: _ClassVar[FineTuningStatus]
    FINE_TUNING_STATUS_FAILED: _ClassVar[FineTuningStatus]
    FINE_TUNING_STATUS_SUBMITTED: _ClassVar[FineTuningStatus]
FINE_TUNING_MODE_UNSPECIFIED: FineTuningMode
FINE_TUNING_MODE_FACE: FineTuningMode
FINE_TUNING_MODE_STYLE: FineTuningMode
FINE_TUNING_MODE_OBJECT: FineTuningMode
FINE_TUNING_STATUS_NOT_STARTED: FineTuningStatus
FINE_TUNING_STATUS_RUNNING: FineTuningStatus
FINE_TUNING_STATUS_COMPLETED: FineTuningStatus
FINE_TUNING_STATUS_FAILED: FineTuningStatus
FINE_TUNING_STATUS_SUBMITTED: FineTuningStatus

class FineTuningModel(_message.Message):
    __slots__ = ["id", "user_id", "name", "mode", "object_prompt", "project_id", "duration", "status", "engine_id", "failure_reason"]
    ID_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    MODE_FIELD_NUMBER: _ClassVar[int]
    OBJECT_PROMPT_FIELD_NUMBER: _ClassVar[int]
    PROJECT_ID_FIELD_NUMBER: _ClassVar[int]
    DURATION_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    ENGINE_ID_FIELD_NUMBER: _ClassVar[int]
    FAILURE_REASON_FIELD_NUMBER: _ClassVar[int]
    id: str
    user_id: str
    name: str
    mode: FineTuningMode
    object_prompt: str
    project_id: str
    duration: float
    status: FineTuningStatus
    engine_id: str
    failure_reason: str
    def __init__(self, id: _Optional[str] = ..., user_id: _Optional[str] = ..., name: _Optional[str] = ..., mode: _Optional[_Union[FineTuningMode, str]] = ..., object_prompt: _Optional[str] = ..., project_id: _Optional[str] = ..., duration: _Optional[float] = ..., status: _Optional[_Union[FineTuningStatus, str]] = ..., engine_id: _Optional[str] = ..., failure_reason: _Optional[str] = ...) -> None: ...

class CreateModelRequest(_message.Message):
    __slots__ = ["name", "mode", "object_prompt", "project_id", "engine_id", "extras"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    MODE_FIELD_NUMBER: _ClassVar[int]
    OBJECT_PROMPT_FIELD_NUMBER: _ClassVar[int]
    PROJECT_ID_FIELD_NUMBER: _ClassVar[int]
    ENGINE_ID_FIELD_NUMBER: _ClassVar[int]
    EXTRAS_FIELD_NUMBER: _ClassVar[int]
    name: str
    mode: FineTuningMode
    object_prompt: str
    project_id: str
    engine_id: str
    extras: _struct_pb2.Struct
    def __init__(self, name: _Optional[str] = ..., mode: _Optional[_Union[FineTuningMode, str]] = ..., object_prompt: _Optional[str] = ..., project_id: _Optional[str] = ..., engine_id: _Optional[str] = ..., extras: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ...) -> None: ...

class CreateModelResponse(_message.Message):
    __slots__ = ["model"]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    model: FineTuningModel
    def __init__(self, model: _Optional[_Union[FineTuningModel, _Mapping]] = ...) -> None: ...

class GetModelRequest(_message.Message):
    __slots__ = ["id"]
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...

class GetModelResponse(_message.Message):
    __slots__ = ["model"]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    model: FineTuningModel
    def __init__(self, model: _Optional[_Union[FineTuningModel, _Mapping]] = ...) -> None: ...

class UpdateModelRequest(_message.Message):
    __slots__ = ["id", "name", "mode", "object_prompt", "engine_id"]
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    MODE_FIELD_NUMBER: _ClassVar[int]
    OBJECT_PROMPT_FIELD_NUMBER: _ClassVar[int]
    ENGINE_ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    mode: FineTuningMode
    object_prompt: str
    engine_id: str
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., mode: _Optional[_Union[FineTuningMode, str]] = ..., object_prompt: _Optional[str] = ..., engine_id: _Optional[str] = ...) -> None: ...

class UpdateModelResponse(_message.Message):
    __slots__ = ["model"]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    model: FineTuningModel
    def __init__(self, model: _Optional[_Union[FineTuningModel, _Mapping]] = ...) -> None: ...

class DeleteModelRequest(_message.Message):
    __slots__ = ["id"]
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...

class DeleteModelResponse(_message.Message):
    __slots__ = ["model"]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    model: FineTuningModel
    def __init__(self, model: _Optional[_Union[FineTuningModel, _Mapping]] = ...) -> None: ...

class ResubmitModelRequest(_message.Message):
    __slots__ = ["id"]
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...

class ResubmitModelResponse(_message.Message):
    __slots__ = ["model"]
    MODEL_FIELD_NUMBER: _ClassVar[int]
    model: FineTuningModel
    def __init__(self, model: _Optional[_Union[FineTuningModel, _Mapping]] = ...) -> None: ...

class ListModelsRequest(_message.Message):
    __slots__ = ["org_id", "user_id"]
    ORG_ID_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    org_id: str
    user_id: str
    def __init__(self, org_id: _Optional[str] = ..., user_id: _Optional[str] = ...) -> None: ...

class ListModelsResponse(_message.Message):
    __slots__ = ["models"]
    MODELS_FIELD_NUMBER: _ClassVar[int]
    models: _containers.RepeatedCompositeFieldContainer[FineTuningModel]
    def __init__(self, models: _Optional[_Iterable[_Union[FineTuningModel, _Mapping]]] = ...) -> None: ...
