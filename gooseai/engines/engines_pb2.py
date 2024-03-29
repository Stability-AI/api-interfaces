# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: engines.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\rengines.proto\x12\x07gooseai\"\xd5\x01\n\nEngineInfo\x12\n\n\x02id\x18\x01 \x01(\t\x12\r\n\x05owner\x18\x02 \x01(\t\x12\r\n\x05ready\x18\x03 \x01(\x08\x12!\n\x04type\x18\x04 \x01(\x0e\x32\x13.gooseai.EngineType\x12+\n\ttokenizer\x18\x05 \x01(\x0e\x32\x18.gooseai.EngineTokenizer\x12\x0c\n\x04name\x18\x06 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x07 \x01(\t\x12\x15\n\rcan_fine_tune\x18\x08 \x01(\x08\x12\x13\n\x0bis_adaptive\x18\t \x01(\x08\"\x14\n\x12ListEnginesRequest\".\n\x07\x45ngines\x12#\n\x06\x65ngine\x18\x01 \x03(\x0b\x32\x13.gooseai.EngineInfo*Z\n\nEngineType\x12\x08\n\x04TEXT\x10\x00\x12\x0b\n\x07PICTURE\x10\x01\x12\t\n\x05\x41UDIO\x10\x02\x12\t\n\x05VIDEO\x10\x03\x12\x12\n\x0e\x43LASSIFICATION\x10\x04\x12\x0b\n\x07STORAGE\x10\x05*%\n\x0f\x45ngineTokenizer\x12\x08\n\x04GPT2\x10\x00\x12\x08\n\x04PILE\x10\x01\x32P\n\x0e\x45nginesService\x12>\n\x0bListEngines\x12\x1b.gooseai.ListEnginesRequest\x1a\x10.gooseai.Engines\"\x00\x42\x38Z6github.com/stability-ai/api-interfaces/gooseai/enginesb\x06proto3')

_ENGINETYPE = DESCRIPTOR.enum_types_by_name['EngineType']
EngineType = enum_type_wrapper.EnumTypeWrapper(_ENGINETYPE)
_ENGINETOKENIZER = DESCRIPTOR.enum_types_by_name['EngineTokenizer']
EngineTokenizer = enum_type_wrapper.EnumTypeWrapper(_ENGINETOKENIZER)
TEXT = 0
PICTURE = 1
AUDIO = 2
VIDEO = 3
CLASSIFICATION = 4
STORAGE = 5
GPT2 = 0
PILE = 1


_ENGINEINFO = DESCRIPTOR.message_types_by_name['EngineInfo']
_LISTENGINESREQUEST = DESCRIPTOR.message_types_by_name['ListEnginesRequest']
_ENGINES = DESCRIPTOR.message_types_by_name['Engines']
EngineInfo = _reflection.GeneratedProtocolMessageType('EngineInfo', (_message.Message,), {
  'DESCRIPTOR' : _ENGINEINFO,
  '__module__' : 'engines_pb2'
  # @@protoc_insertion_point(class_scope:gooseai.EngineInfo)
  })
_sym_db.RegisterMessage(EngineInfo)

ListEnginesRequest = _reflection.GeneratedProtocolMessageType('ListEnginesRequest', (_message.Message,), {
  'DESCRIPTOR' : _LISTENGINESREQUEST,
  '__module__' : 'engines_pb2'
  # @@protoc_insertion_point(class_scope:gooseai.ListEnginesRequest)
  })
_sym_db.RegisterMessage(ListEnginesRequest)

Engines = _reflection.GeneratedProtocolMessageType('Engines', (_message.Message,), {
  'DESCRIPTOR' : _ENGINES,
  '__module__' : 'engines_pb2'
  # @@protoc_insertion_point(class_scope:gooseai.Engines)
  })
_sym_db.RegisterMessage(Engines)

_ENGINESSERVICE = DESCRIPTOR.services_by_name['EnginesService']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z6github.com/stability-ai/api-interfaces/gooseai/engines'
  _ENGINETYPE._serialized_start=312
  _ENGINETYPE._serialized_end=402
  _ENGINETOKENIZER._serialized_start=404
  _ENGINETOKENIZER._serialized_end=441
  _ENGINEINFO._serialized_start=27
  _ENGINEINFO._serialized_end=240
  _LISTENGINESREQUEST._serialized_start=242
  _LISTENGINESREQUEST._serialized_end=262
  _ENGINES._serialized_start=264
  _ENGINES._serialized_end=310
  _ENGINESSERVICE._serialized_start=443
  _ENGINESSERVICE._serialized_end=523
# @@protoc_insertion_point(module_scope)
