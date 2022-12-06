
'Generated protocol buffer code.'
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
_sym_db = _symbol_database.Default()
from ..tensorizer.proto import tensors_pb2 as tensorizer_dot_proto_dot_tensors__pb2
DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x18gooseai/generation.proto\x12\x07gooseai\x1a\x1etensorizer/proto/tensors.proto"9\n\x05Token\x12\x17\n\x04text\x18\x01 \x01(\tH\x00R\x04text\x88\x01\x01\x12\x0e\n\x02id\x18\x02 \x01(\rR\x02idB\x07\n\x05_text"i\n\x06Tokens\x12&\n\x06tokens\x18\x01 \x03(\x0b2\x0e.gooseai.TokenR\x06tokens\x12&\n\x0ctokenizer_id\x18\x02 \x01(\tH\x00R\x0btokenizerId\x88\x01\x01B\x0f\n\r_tokenizer_id"\xdb\x03\n\x08Artifact\x12\x0e\n\x02id\x18\x01 \x01(\x04R\x02id\x12)\n\x04type\x18\x02 \x01(\x0e2\x15.gooseai.ArtifactTypeR\x04type\x12\x12\n\x04mime\x18\x03 \x01(\tR\x04mime\x12\x19\n\x05magic\x18\x04 \x01(\tH\x01R\x05magic\x88\x01\x01\x12\x18\n\x06binary\x18\x05 \x01(\x0cH\x00R\x06binary\x12\x14\n\x04text\x18\x06 \x01(\tH\x00R\x04text\x12)\n\x06tokens\x18\x07 \x01(\x0b2\x0f.gooseai.TokensH\x00R\x06tokens\x12?\n\nclassifier\x18\x0b \x01(\x0b2\x1d.gooseai.ClassifierParametersH\x00R\nclassifier\x12)\n\x06tensor\x18\x0e \x01(\x0b2\x0f.tensors.TensorH\x00R\x06tensor\x12\x14\n\x05index\x18\x08 \x01(\rR\x05index\x12:\n\rfinish_reason\x18\t \x01(\x0e2\x15.gooseai.FinishReasonR\x0cfinishReason\x12\x12\n\x04seed\x18\n \x01(\rR\x04seed\x12\x12\n\x04uuid\x18\x0c \x01(\tR\x04uuid\x12\x12\n\x04size\x18\r \x01(\x04R\x04sizeB\x06\n\x04dataB\x08\n\x06_magic"\\\n\x10PromptParameters\x12\x17\n\x04init\x18\x01 \x01(\x08H\x00R\x04init\x88\x01\x01\x12\x1b\n\x06weight\x18\x02 \x01(\x02H\x01R\x06weight\x88\x01\x01B\x07\n\x05_initB\t\n\x07_weight"\xd3\x01\n\x06Prompt\x12>\n\nparameters\x18\x01 \x01(\x0b2\x19.gooseai.PromptParametersH\x01R\nparameters\x88\x01\x01\x12\x14\n\x04text\x18\x02 \x01(\tH\x00R\x04text\x12)\n\x06tokens\x18\x03 \x01(\x0b2\x0f.gooseai.TokensH\x00R\x06tokens\x12/\n\x08artifact\x18\x04 \x01(\x0b2\x11.gooseai.ArtifactH\x00R\x08artifactB\x08\n\x06promptB\r\n\x0b_parameters"\xf5\x02\n\x11SamplerParameters\x12\x15\n\x03eta\x18\x01 \x01(\x02H\x00R\x03eta\x88\x01\x01\x12*\n\x0esampling_steps\x18\x02 \x01(\x04H\x01R\rsamplingSteps\x88\x01\x01\x12,\n\x0flatent_channels\x18\x03 \x01(\x04H\x02R\x0elatentChannels\x88\x01\x01\x124\n\x13downsampling_factor\x18\x04 \x01(\x04H\x03R\x12downsamplingFactor\x88\x01\x01\x12 \n\tcfg_scale\x18\x05 \x01(\x02H\x04R\x08cfgScale\x88\x01\x01\x12-\n\x10init_noise_scale\x18\x06 \x01(\x02H\x05R\x0einitNoiseScale\x88\x01\x01B\x06\n\x04_etaB\x11\n\x0f_sampling_stepsB\x12\n\x10_latent_channelsB\x16\n\x14_downsampling_factorB\x0c\n\n_cfg_scaleB\x13\n\x11_init_noise_scale"\xab\x01\n\x15ConditionerParameters\x123\n\x13vector_adjust_prior\x18\x01 \x01(\tH\x00R\x11vectorAdjustPrior\x88\x01\x01\x125\n\x0bconditioner\x18\x02 \x01(\x0b2\x0e.gooseai.ModelH\x01R\x0bconditioner\x88\x01\x01B\x16\n\x14_vector_adjust_priorB\x0e\n\x0c_conditioner"}\n\x12ScheduleParameters\x12\x19\n\x05start\x18\x01 \x01(\x02H\x00R\x05start\x88\x01\x01\x12\x15\n\x03end\x18\x02 \x01(\x02H\x01R\x03end\x88\x01\x01\x12\x19\n\x05value\x18\x03 \x01(\x02H\x02R\x05value\x88\x01\x01B\x08\n\x06_startB\x06\n\x04_endB\x08\n\x06_value"\x8d\x02\n\rStepParameter\x12\x1f\n\x0bscaled_step\x18\x01 \x01(\x02R\nscaledStep\x129\n\x07sampler\x18\x02 \x01(\x0b2\x1a.gooseai.SamplerParametersH\x00R\x07sampler\x88\x01\x01\x12<\n\x08schedule\x18\x03 \x01(\x0b2\x1b.gooseai.ScheduleParametersH\x01R\x08schedule\x88\x01\x01\x12<\n\x08guidance\x18\x04 \x01(\x0b2\x1b.gooseai.GuidanceParametersH\x02R\x08guidance\x88\x01\x01B\n\n\x08_samplerB\x0b\n\t_scheduleB\x0b\n\t_guidance"\xda\x01\n\x05Model\x12>\n\x0carchitecture\x18\x01 \x01(\x0e2\x1a.gooseai.ModelArchitectureR\x0carchitecture\x12\x1c\n\tpublisher\x18\x02 \x01(\tR\tpublisher\x12\x18\n\x07dataset\x18\x03 \x01(\tR\x07dataset\x12\x18\n\x07version\x18\x04 \x01(\x02R\x07version\x12)\n\x10semantic_version\x18\x05 \x01(\tR\x0fsemanticVersion\x12\x14\n\x05alias\x18\x06 \x01(\tR\x05alias"\xe3\x01\n\x10CutoutParameters\x123\n\x07cutouts\x18\x01 \x03(\x0b2\x19.gooseai.CutoutParametersR\x07cutouts\x12\x19\n\x05count\x18\x02 \x01(\rH\x00R\x05count\x88\x01\x01\x12\x17\n\x04gray\x18\x03 \x01(\x02H\x01R\x04gray\x88\x01\x01\x12\x17\n\x04blur\x18\x04 \x01(\x02H\x02R\x04blur\x88\x01\x01\x12"\n\nsize_power\x18\x05 \x01(\x02H\x03R\tsizePower\x88\x01\x01B\x08\n\x06_countB\x07\n\x05_grayB\x07\n\x05_blurB\r\n\x0b_size_power"N\n\x1aGuidanceScheduleParameters\x12\x1a\n\x08duration\x18\x01 \x01(\x02R\x08duration\x12\x14\n\x05value\x18\x02 \x01(\x02R\x05value"\xcc\x02\n\x1aGuidanceInstanceParameters\x12&\n\x06models\x18\x02 \x03(\x0b2\x0e.gooseai.ModelR\x06models\x120\n\x11guidance_strength\x18\x03 \x01(\x02H\x00R\x10guidanceStrength\x88\x01\x01\x12?\n\x08schedule\x18\x04 \x03(\x0b2#.gooseai.GuidanceScheduleParametersR\x08schedule\x128\n\x07cutouts\x18\x05 \x01(\x0b2\x19.gooseai.CutoutParametersH\x01R\x07cutouts\x88\x01\x01\x12,\n\x06prompt\x18\x06 \x01(\x0b2\x0f.gooseai.PromptH\x02R\x06prompt\x88\x01\x01B\x14\n\x12_guidance_strengthB\n\n\x08_cutoutsB\t\n\x07_prompt"\x99\x01\n\x12GuidanceParameters\x12@\n\x0fguidance_preset\x18\x01 \x01(\x0e2\x17.gooseai.GuidancePresetR\x0eguidancePreset\x12A\n\tinstances\x18\x02 \x03(\x0b2#.gooseai.GuidanceInstanceParametersR\tinstances"\x83\x01\n\rTransformType\x129\n\tdiffusion\x18\x01 \x01(\x0e2\x19.gooseai.DiffusionSamplerH\x00R\tdiffusion\x12/\n\x08upscaler\x18\x02 \x01(\x0e2\x11.gooseai.UpscalerH\x00R\x08upscalerB\x06\n\x04type"\xf3\x03\n\x0fImageParameters\x12\x1b\n\x06height\x18\x01 \x01(\x04H\x00R\x06height\x88\x01\x01\x12\x19\n\x05width\x18\x02 \x01(\x04H\x01R\x05width\x88\x01\x01\x12\x12\n\x04seed\x18\x03 \x03(\rR\x04seed\x12\x1d\n\x07samples\x18\x04 \x01(\x04H\x02R\x07samples\x88\x01\x01\x12\x19\n\x05steps\x18\x05 \x01(\x04H\x03R\x05steps\x88\x01\x01\x129\n\ttransform\x18\x06 \x01(\x0b2\x16.gooseai.TransformTypeH\x04R\ttransform\x88\x01\x01\x126\n\nparameters\x18\x07 \x03(\x0b2\x16.gooseai.StepParameterR\nparameters\x12F\n\x10masked_area_init\x18\x08 \x01(\x0e2\x17.gooseai.MaskedAreaInitH\x05R\x0emaskedAreaInit\x88\x01\x01\x12?\n\rweight_method\x18\t \x01(\x0e2\x15.gooseai.WeightMethodH\x06R\x0cweightMethod\x88\x01\x01B\t\n\x07_heightB\x08\n\x06_widthB\n\n\x08_samplesB\x08\n\x06_stepsB\x0c\n\n_transformB\x13\n\x11_masked_area_initB\x10\n\x0e_weight_method"^\n\x11ClassifierConcept\x12\x18\n\x07concept\x18\x01 \x01(\tR\x07concept\x12!\n\tthreshold\x18\x02 \x01(\x02H\x00R\tthreshold\x88\x01\x01B\x0c\n\n_threshold"\xa8\x02\n\x12ClassifierCategory\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x126\n\x08concepts\x18\x02 \x03(\x0b2\x1a.gooseai.ClassifierConceptR\x08concepts\x12#\n\nadjustment\x18\x03 \x01(\x02H\x00R\nadjustment\x88\x01\x01\x12,\n\x06action\x18\x04 \x01(\x0e2\x0f.gooseai.ActionH\x01R\x06action\x88\x01\x01\x12E\n\x0fclassifier_mode\x18\x05 \x01(\x0e2\x17.gooseai.ClassifierModeH\x02R\x0eclassifierMode\x88\x01\x01B\r\n\x0b_adjustmentB\t\n\x07_actionB\x12\n\x10_classifier_mode"\xdd\x01\n\x14ClassifierParameters\x12;\n\ncategories\x18\x01 \x03(\x0b2\x1b.gooseai.ClassifierCategoryR\ncategories\x125\n\x07exceeds\x18\x02 \x03(\x0b2\x1b.gooseai.ClassifierCategoryR\x07exceeds\x12=\n\x0frealized_action\x18\x03 \x01(\x0e2\x0f.gooseai.ActionH\x00R\x0erealizedAction\x88\x01\x01B\x12\n\x10_realized_action"\x83\x01\n\x0fAssetParameters\x12,\n\x06action\x18\x01 \x01(\x0e2\x14.gooseai.AssetActionR\x06action\x12\x1d\n\nproject_id\x18\x02 \x01(\tR\tprojectId\x12#\n\x03use\x18\x03 \x01(\x0e2\x11.gooseai.AssetUseR\x03use"\xb4\x01\n\nAnswerMeta\x12\x1a\n\x06gpu_id\x18\x01 \x01(\tH\x00R\x05gpuId\x88\x01\x01\x12\x1a\n\x06cpu_id\x18\x02 \x01(\tH\x01R\x05cpuId\x88\x01\x01\x12\x1c\n\x07node_id\x18\x03 \x01(\tH\x02R\x06nodeId\x88\x01\x01\x12 \n\tengine_id\x18\x04 \x01(\tH\x03R\x08engineId\x88\x01\x01B\t\n\x07_gpu_idB\t\n\x07_cpu_idB\n\n\x08_node_idB\x0c\n\n_engine_id"\xe2\x01\n\x06Answer\x12\x1b\n\tanswer_id\x18\x01 \x01(\tR\x08answerId\x12\x1d\n\nrequest_id\x18\x02 \x01(\tR\trequestId\x12\x1a\n\x08received\x18\x03 \x01(\x04R\x08received\x12\x18\n\x07created\x18\x04 \x01(\x04R\x07created\x12,\n\x04meta\x18\x06 \x01(\x0b2\x13.gooseai.AnswerMetaH\x00R\x04meta\x88\x01\x01\x12/\n\tartifacts\x18\x07 \x03(\x0b2\x11.gooseai.ArtifactR\tartifactsB\x07\n\x05_meta"\xbe\x03\n\x07Request\x12\x1b\n\tengine_id\x18\x01 \x01(\tR\x08engineId\x12\x1d\n\nrequest_id\x18\x02 \x01(\tR\trequestId\x12<\n\x0erequested_type\x18\x03 \x01(\x0e2\x15.gooseai.ArtifactTypeR\rrequestedType\x12\'\n\x06prompt\x18\x04 \x03(\x0b2\x0f.gooseai.PromptR\x06prompt\x120\n\x05image\x18\x05 \x01(\x0b2\x18.gooseai.ImageParametersH\x00R\x05image\x12?\n\nclassifier\x18\x07 \x01(\x0b2\x1d.gooseai.ClassifierParametersH\x00R\nclassifier\x120\n\x05asset\x18\x08 \x01(\x0b2\x18.gooseai.AssetParametersH\x00R\x05asset\x12E\n\x0bconditioner\x18\x06 \x01(\x0b2\x1e.gooseai.ConditionerParametersH\x01R\x0bconditioner\x88\x01\x01B\x08\n\x06paramsB\x0e\n\x0c_conditionerJ\x04\x08\t\x10\nJ\x04\x08\n\x10\x0b"\x8f\x01\n\x08OnStatus\x12-\n\x06reason\x18\x01 \x03(\x0e2\x15.gooseai.FinishReasonR\x06reason\x12\x1b\n\x06target\x18\x02 \x01(\tH\x00R\x06target\x88\x01\x01\x12,\n\x06action\x18\x03 \x03(\x0e2\x14.gooseai.StageActionR\x06actionB\t\n\x07_target"s\n\x05Stage\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12*\n\x07request\x18\x02 \x01(\x0b2\x10.gooseai.RequestR\x07request\x12.\n\ton_status\x18\x03 \x03(\x0b2\x11.gooseai.OnStatusR\x08onStatus"S\n\x0cChainRequest\x12\x1d\n\nrequest_id\x18\x01 \x01(\tR\trequestId\x12$\n\x05stage\x18\x02 \x03(\x0b2\x0e.gooseai.StageR\x05stage*E\n\x0cFinishReason\x12\x08\n\x04NULL\x10\x00\x12\n\n\x06LENGTH\x10\x01\x12\x08\n\x04STOP\x10\x02\x12\t\n\x05ERROR\x10\x03\x12\n\n\x06FILTER\x10\x04*\xe4\x01\n\x0cArtifactType\x12\x11\n\rARTIFACT_NONE\x10\x00\x12\x12\n\x0eARTIFACT_IMAGE\x10\x01\x12\x12\n\x0eARTIFACT_VIDEO\x10\x02\x12\x11\n\rARTIFACT_TEXT\x10\x03\x12\x13\n\x0fARTIFACT_TOKENS\x10\x04\x12\x16\n\x12ARTIFACT_EMBEDDING\x10\x05\x12\x1c\n\x18ARTIFACT_CLASSIFICATIONS\x10\x06\x12\x11\n\rARTIFACT_MASK\x10\x07\x12\x13\n\x0fARTIFACT_LATENT\x10\x08\x12\x13\n\x0fARTIFACT_TENSOR\x10\t*g\n\x0eMaskedAreaInit\x12\x19\n\x15MASKED_AREA_INIT_ZERO\x10\x00\x12\x1b\n\x17MASKED_AREA_INIT_RANDOM\x10\x01\x12\x1d\n\x19MASKED_AREA_INIT_ORIGINAL\x10\x02*5\n\x0cWeightMethod\x12\x10\n\x0cTEXT_ENCODER\x10\x00\x12\x13\n\x0fCROSS_ATTENTION\x10\x01*\xff\x01\n\x10DiffusionSampler\x12\x10\n\x0cSAMPLER_DDIM\x10\x00\x12\x10\n\x0cSAMPLER_DDPM\x10\x01\x12\x13\n\x0fSAMPLER_K_EULER\x10\x02\x12\x1d\n\x19SAMPLER_K_EULER_ANCESTRAL\x10\x03\x12\x12\n\x0eSAMPLER_K_HEUN\x10\x04\x12\x13\n\x0fSAMPLER_K_DPM_2\x10\x05\x12\x1d\n\x19SAMPLER_K_DPM_2_ANCESTRAL\x10\x06\x12\x11\n\rSAMPLER_K_LMS\x10\x07\x12 \n\x1cSAMPLER_K_DPMPP_2S_ANCESTRAL\x10\x08\x12\x16\n\x12SAMPLER_K_DPMPP_2M\x10\t*F\n\x08Upscaler\x12\x10\n\x0cUPSCALER_RGB\x10\x00\x12\x13\n\x0fUPSCALER_GFPGAN\x10\x01\x12\x13\n\x0fUPSCALER_ESRGAN\x10\x02*\xd8\x01\n\x0eGuidancePreset\x12\x18\n\x14GUIDANCE_PRESET_NONE\x10\x00\x12\x1a\n\x16GUIDANCE_PRESET_SIMPLE\x10\x01\x12\x1d\n\x19GUIDANCE_PRESET_FAST_BLUE\x10\x02\x12\x1e\n\x1aGUIDANCE_PRESET_FAST_GREEN\x10\x03\x12\x18\n\x14GUIDANCE_PRESET_SLOW\x10\x04\x12\x1a\n\x16GUIDANCE_PRESET_SLOWER\x10\x05\x12\x1b\n\x17GUIDANCE_PRESET_SLOWEST\x10\x06*\x91\x01\n\x11ModelArchitecture\x12\x1b\n\x17MODEL_ARCHITECTURE_NONE\x10\x00\x12\x1f\n\x1bMODEL_ARCHITECTURE_CLIP_VIT\x10\x01\x12"\n\x1eMODEL_ARCHITECTURE_CLIP_RESNET\x10\x02\x12\x1a\n\x16MODEL_ARCHITECTURE_LDM\x10\x03*\xa2\x01\n\x06Action\x12\x16\n\x12ACTION_PASSTHROUGH\x10\x00\x12\x1f\n\x1bACTION_REGENERATE_DUPLICATE\x10\x01\x12\x15\n\x11ACTION_REGENERATE\x10\x02\x12\x1e\n\x1aACTION_OBFUSCATE_DUPLICATE\x10\x03\x12\x14\n\x10ACTION_OBFUSCATE\x10\x04\x12\x12\n\x0eACTION_DISCARD\x10\x05*D\n\x0eClassifierMode\x12\x17\n\x13CLSFR_MODE_ZEROSHOT\x10\x00\x12\x19\n\x15CLSFR_MODE_MULTICLASS\x10\x01*=\n\x0bAssetAction\x12\r\n\tASSET_PUT\x10\x00\x12\r\n\tASSET_GET\x10\x01\x12\x10\n\x0cASSET_DELETE\x10\x02*\x81\x01\n\x08AssetUse\x12\x17\n\x13ASSET_USE_UNDEFINED\x10\x00\x12\x13\n\x0fASSET_USE_INPUT\x10\x01\x12\x14\n\x10ASSET_USE_OUTPUT\x10\x02\x12\x1a\n\x16ASSET_USE_INTERMEDIATE\x10\x03\x12\x15\n\x11ASSET_USE_PROJECT\x10\x04*W\n\x0bStageAction\x12\x15\n\x11STAGE_ACTION_PASS\x10\x00\x12\x18\n\x14STAGE_ACTION_DISCARD\x10\x01\x12\x17\n\x13STAGE_ACTION_RETURN\x10\x022\x83\x01\n\x11GenerationService\x121\n\x08Generate\x12\x10.gooseai.Request\x1a\x0f.gooseai.Answer"\x000\x01\x12;\n\rChainGenerate\x12\x15.gooseai.ChainRequest\x1a\x0f.gooseai.Answer"\x000\x01B\x97\x01\n\x0bcom.gooseaiB\x0fGenerationProtoP\x01Z;github.com/stability-ai/api-interfaces/gen/proto/go/gooseai\xa2\x02\x03GXX\xaa\x02\x07Gooseai\xca\x02\x07Gooseai\xe2\x02\x13Gooseai\\GPBMetadata\xea\x02\x07Gooseaib\x06proto3')
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'gooseai.generation_pb2', globals())
if (_descriptor._USE_C_DESCRIPTORS == False):
    DESCRIPTOR._options = None
    DESCRIPTOR._serialized_options = b'\n\x0bcom.gooseaiB\x0fGenerationProtoP\x01Z;github.com/stability-ai/api-interfaces/gen/proto/go/gooseai\xa2\x02\x03GXX\xaa\x02\x07Gooseai\xca\x02\x07Gooseai\xe2\x02\x13Gooseai\\GPBMetadata\xea\x02\x07Gooseai'
    _FINISHREASON._serialized_start = 5590
    _FINISHREASON._serialized_end = 5659
    _ARTIFACTTYPE._serialized_start = 5662
    _ARTIFACTTYPE._serialized_end = 5890
    _MASKEDAREAINIT._serialized_start = 5892
    _MASKEDAREAINIT._serialized_end = 5995
    _WEIGHTMETHOD._serialized_start = 5997
    _WEIGHTMETHOD._serialized_end = 6050
    _DIFFUSIONSAMPLER._serialized_start = 6053
    _DIFFUSIONSAMPLER._serialized_end = 6308
    _UPSCALER._serialized_start = 6310
    _UPSCALER._serialized_end = 6380
    _GUIDANCEPRESET._serialized_start = 6383
    _GUIDANCEPRESET._serialized_end = 6599
    _MODELARCHITECTURE._serialized_start = 6602
    _MODELARCHITECTURE._serialized_end = 6747
    _ACTION._serialized_start = 6750
    _ACTION._serialized_end = 6912
    _CLASSIFIERMODE._serialized_start = 6914
    _CLASSIFIERMODE._serialized_end = 6982
    _ASSETACTION._serialized_start = 6984
    _ASSETACTION._serialized_end = 7045
    _ASSETUSE._serialized_start = 7048
    _ASSETUSE._serialized_end = 7177
    _STAGEACTION._serialized_start = 7179
    _STAGEACTION._serialized_end = 7266
    _TOKEN._serialized_start = 69
    _TOKEN._serialized_end = 126
    _TOKENS._serialized_start = 128
    _TOKENS._serialized_end = 233
    _ARTIFACT._serialized_start = 236
    _ARTIFACT._serialized_end = 711
    _PROMPTPARAMETERS._serialized_start = 713
    _PROMPTPARAMETERS._serialized_end = 805
    _PROMPT._serialized_start = 808
    _PROMPT._serialized_end = 1019
    _SAMPLERPARAMETERS._serialized_start = 1022
    _SAMPLERPARAMETERS._serialized_end = 1395
    _CONDITIONERPARAMETERS._serialized_start = 1398
    _CONDITIONERPARAMETERS._serialized_end = 1569
    _SCHEDULEPARAMETERS._serialized_start = 1571
    _SCHEDULEPARAMETERS._serialized_end = 1696
    _STEPPARAMETER._serialized_start = 1699
    _STEPPARAMETER._serialized_end = 1968
    _MODEL._serialized_start = 1971
    _MODEL._serialized_end = 2189
    _CUTOUTPARAMETERS._serialized_start = 2192
    _CUTOUTPARAMETERS._serialized_end = 2419
    _GUIDANCESCHEDULEPARAMETERS._serialized_start = 2421
    _GUIDANCESCHEDULEPARAMETERS._serialized_end = 2499
    _GUIDANCEINSTANCEPARAMETERS._serialized_start = 2502
    _GUIDANCEINSTANCEPARAMETERS._serialized_end = 2834
    _GUIDANCEPARAMETERS._serialized_start = 2837
    _GUIDANCEPARAMETERS._serialized_end = 2990
    _TRANSFORMTYPE._serialized_start = 2993
    _TRANSFORMTYPE._serialized_end = 3124
    _IMAGEPARAMETERS._serialized_start = 3127
    _IMAGEPARAMETERS._serialized_end = 3626
    _CLASSIFIERCONCEPT._serialized_start = 3628
    _CLASSIFIERCONCEPT._serialized_end = 3722
    _CLASSIFIERCATEGORY._serialized_start = 3725
    _CLASSIFIERCATEGORY._serialized_end = 4021
    _CLASSIFIERPARAMETERS._serialized_start = 4024
    _CLASSIFIERPARAMETERS._serialized_end = 4245
    _ASSETPARAMETERS._serialized_start = 4248
    _ASSETPARAMETERS._serialized_end = 4379
    _ANSWERMETA._serialized_start = 4382
    _ANSWERMETA._serialized_end = 4562
    _ANSWER._serialized_start = 4565
    _ANSWER._serialized_end = 4791
    _REQUEST._serialized_start = 4794
    _REQUEST._serialized_end = 5240
    _ONSTATUS._serialized_start = 5243
    _ONSTATUS._serialized_end = 5386
    _STAGE._serialized_start = 5388
    _STAGE._serialized_end = 5503
    _CHAINREQUEST._serialized_start = 5505
    _CHAINREQUEST._serialized_end = 5588
    _GENERATIONSERVICE._serialized_start = 7269
    _GENERATIONSERVICE._serialized_end = 7400
