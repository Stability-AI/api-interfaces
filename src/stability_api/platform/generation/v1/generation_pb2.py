# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: stability_api/platform/generation/v1/generation.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import struct_pb2 as google_dot_protobuf_dot_struct__pb2
from stability_api.tensors import tensors_pb2 as stability__api_dot_tensors_dot_tensors__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n5stability_api/platform/generation/v1/generation.proto\x12&stabilityai.platformapis.generation.v1\x1a\x1cgoogle/protobuf/struct.proto\x1a#stability_api/tensors/tensors.proto\"9\n\x05Token\x12\x17\n\x04text\x18\x01 \x01(\tH\x00R\x04text\x88\x01\x01\x12\x0e\n\x02id\x18\x02 \x01(\rR\x02idB\x07\n\x05_text\"\x88\x01\n\x06Tokens\x12\x45\n\x06tokens\x18\x01 \x03(\x0b\x32-.stabilityai.platformapis.generation.v1.TokenR\x06tokens\x12&\n\x0ctokenizer_id\x18\x02 \x01(\tH\x00R\x0btokenizerId\x88\x01\x01\x42\x0f\n\r_tokenizer_id\"\xd7\x04\n\x08\x41rtifact\x12\x0e\n\x02id\x18\x01 \x01(\x04R\x02id\x12H\n\x04type\x18\x02 \x01(\x0e\x32\x34.stabilityai.platformapis.generation.v1.ArtifactTypeR\x04type\x12\x12\n\x04mime\x18\x03 \x01(\tR\x04mime\x12\x19\n\x05magic\x18\x04 \x01(\tH\x01R\x05magic\x88\x01\x01\x12\x18\n\x06\x62inary\x18\x05 \x01(\x0cH\x00R\x06\x62inary\x12\x14\n\x04text\x18\x06 \x01(\tH\x00R\x04text\x12H\n\x06tokens\x18\x07 \x01(\x0b\x32..stabilityai.platformapis.generation.v1.TokensH\x00R\x06tokens\x12^\n\nclassifier\x18\x0b \x01(\x0b\x32<.stabilityai.platformapis.generation.v1.ClassifierParametersH\x00R\nclassifier\x12)\n\x06tensor\x18\x0e \x01(\x0b\x32\x0f.tensors.TensorH\x00R\x06tensor\x12\x14\n\x05index\x18\x08 \x01(\rR\x05index\x12Y\n\rfinish_reason\x18\t \x01(\x0e\x32\x34.stabilityai.platformapis.generation.v1.FinishReasonR\x0c\x66inishReason\x12\x12\n\x04seed\x18\n \x01(\rR\x04seed\x12\x12\n\x04uuid\x18\x0c \x01(\tR\x04uuid\x12\x12\n\x04size\x18\r \x01(\x04R\x04sizeB\x06\n\x04\x64\x61taB\x08\n\x06_magic\"\\\n\x10PromptParameters\x12\x17\n\x04init\x18\x01 \x01(\x08H\x00R\x04init\x88\x01\x01\x12\x1b\n\x06weight\x18\x02 \x01(\x02H\x01R\x06weight\x88\x01\x01\x42\x07\n\x05_initB\t\n\x07_weight\"\xb0\x02\n\x06Prompt\x12]\n\nparameters\x18\x01 \x01(\x0b\x32\x38.stabilityai.platformapis.generation.v1.PromptParametersH\x01R\nparameters\x88\x01\x01\x12\x14\n\x04text\x18\x02 \x01(\tH\x00R\x04text\x12H\n\x06tokens\x18\x03 \x01(\x0b\x32..stabilityai.platformapis.generation.v1.TokensH\x00R\x06tokens\x12N\n\x08\x61rtifact\x18\x04 \x01(\x0b\x32\x30.stabilityai.platformapis.generation.v1.ArtifactH\x00R\x08\x61rtifactB\x08\n\x06promptB\r\n\x0b_parameters\"\xb9\x03\n\x11SamplerParameters\x12\x15\n\x03\x65ta\x18\x01 \x01(\x02H\x00R\x03\x65ta\x88\x01\x01\x12*\n\x0esampling_steps\x18\x02 \x01(\x04H\x01R\rsamplingSteps\x88\x01\x01\x12,\n\x0flatent_channels\x18\x03 \x01(\x04H\x02R\x0elatentChannels\x88\x01\x01\x12\x34\n\x13\x64ownsampling_factor\x18\x04 \x01(\x04H\x03R\x12\x64ownsamplingFactor\x88\x01\x01\x12 \n\tcfg_scale\x18\x05 \x01(\x02H\x04R\x08\x63\x66gScale\x88\x01\x01\x12-\n\x10init_noise_scale\x18\x06 \x01(\x02H\x05R\x0einitNoiseScale\x88\x01\x01\x12-\n\x10step_noise_scale\x18\x07 \x01(\x02H\x06R\x0estepNoiseScale\x88\x01\x01\x42\x06\n\x04_etaB\x11\n\x0f_sampling_stepsB\x12\n\x10_latent_channelsB\x16\n\x14_downsampling_factorB\x0c\n\n_cfg_scaleB\x13\n\x11_init_noise_scaleB\x13\n\x11_step_noise_scale\"\xca\x01\n\x15\x43onditionerParameters\x12\x33\n\x13vector_adjust_prior\x18\x01 \x01(\tH\x00R\x11vectorAdjustPrior\x88\x01\x01\x12T\n\x0b\x63onditioner\x18\x02 \x01(\x0b\x32-.stabilityai.platformapis.generation.v1.ModelH\x01R\x0b\x63onditioner\x88\x01\x01\x42\x16\n\x14_vector_adjust_priorB\x0e\n\x0c_conditioner\"}\n\x12ScheduleParameters\x12\x19\n\x05start\x18\x01 \x01(\x02H\x00R\x05start\x88\x01\x01\x12\x15\n\x03\x65nd\x18\x02 \x01(\x02H\x01R\x03\x65nd\x88\x01\x01\x12\x19\n\x05value\x18\x03 \x01(\x02H\x02R\x05value\x88\x01\x01\x42\x08\n\x06_startB\x06\n\x04_endB\x08\n\x06_value\"\xea\x02\n\rStepParameter\x12\x1f\n\x0bscaled_step\x18\x01 \x01(\x02R\nscaledStep\x12X\n\x07sampler\x18\x02 \x01(\x0b\x32\x39.stabilityai.platformapis.generation.v1.SamplerParametersH\x00R\x07sampler\x88\x01\x01\x12[\n\x08schedule\x18\x03 \x01(\x0b\x32:.stabilityai.platformapis.generation.v1.ScheduleParametersH\x01R\x08schedule\x88\x01\x01\x12[\n\x08guidance\x18\x04 \x01(\x0b\x32:.stabilityai.platformapis.generation.v1.GuidanceParametersH\x02R\x08guidance\x88\x01\x01\x42\n\n\x08_samplerB\x0b\n\t_scheduleB\x0b\n\t_guidance\"\xf9\x01\n\x05Model\x12]\n\x0c\x61rchitecture\x18\x01 \x01(\x0e\x32\x39.stabilityai.platformapis.generation.v1.ModelArchitectureR\x0c\x61rchitecture\x12\x1c\n\tpublisher\x18\x02 \x01(\tR\tpublisher\x12\x18\n\x07\x64\x61taset\x18\x03 \x01(\tR\x07\x64\x61taset\x12\x18\n\x07version\x18\x04 \x01(\x02R\x07version\x12)\n\x10semantic_version\x18\x05 \x01(\tR\x0fsemanticVersion\x12\x14\n\x05\x61lias\x18\x06 \x01(\tR\x05\x61lias\"\x82\x02\n\x10\x43utoutParameters\x12R\n\x07\x63utouts\x18\x01 \x03(\x0b\x32\x38.stabilityai.platformapis.generation.v1.CutoutParametersR\x07\x63utouts\x12\x19\n\x05\x63ount\x18\x02 \x01(\rH\x00R\x05\x63ount\x88\x01\x01\x12\x17\n\x04gray\x18\x03 \x01(\x02H\x01R\x04gray\x88\x01\x01\x12\x17\n\x04\x62lur\x18\x04 \x01(\x02H\x02R\x04\x62lur\x88\x01\x01\x12\"\n\nsize_power\x18\x05 \x01(\x02H\x03R\tsizePower\x88\x01\x01\x42\x08\n\x06_countB\x07\n\x05_grayB\x07\n\x05_blurB\r\n\x0b_size_power\"N\n\x1aGuidanceScheduleParameters\x12\x1a\n\x08\x64uration\x18\x01 \x01(\x02R\x08\x64uration\x12\x14\n\x05value\x18\x02 \x01(\x02R\x05value\"\xc8\x03\n\x1aGuidanceInstanceParameters\x12\x45\n\x06models\x18\x02 \x03(\x0b\x32-.stabilityai.platformapis.generation.v1.ModelR\x06models\x12\x30\n\x11guidance_strength\x18\x03 \x01(\x02H\x00R\x10guidanceStrength\x88\x01\x01\x12^\n\x08schedule\x18\x04 \x03(\x0b\x32\x42.stabilityai.platformapis.generation.v1.GuidanceScheduleParametersR\x08schedule\x12W\n\x07\x63utouts\x18\x05 \x01(\x0b\x32\x38.stabilityai.platformapis.generation.v1.CutoutParametersH\x01R\x07\x63utouts\x88\x01\x01\x12K\n\x06prompt\x18\x06 \x01(\x0b\x32..stabilityai.platformapis.generation.v1.PromptH\x02R\x06prompt\x88\x01\x01\x42\x14\n\x12_guidance_strengthB\n\n\x08_cutoutsB\t\n\x07_prompt\"\xd7\x01\n\x12GuidanceParameters\x12_\n\x0fguidance_preset\x18\x01 \x01(\x0e\x32\x36.stabilityai.platformapis.generation.v1.GuidancePresetR\x0eguidancePreset\x12`\n\tinstances\x18\x02 \x03(\x0b\x32\x42.stabilityai.platformapis.generation.v1.GuidanceInstanceParametersR\tinstances\"\xc1\x01\n\rTransformType\x12X\n\tdiffusion\x18\x01 \x01(\x0e\x32\x38.stabilityai.platformapis.generation.v1.DiffusionSamplerH\x00R\tdiffusion\x12N\n\x08upscaler\x18\x02 \x01(\x0e\x32\x30.stabilityai.platformapis.generation.v1.UpscalerH\x00R\x08upscalerB\x06\n\x04type\"\x9d\x05\n\x0fImageParameters\x12\x1b\n\x06height\x18\x01 \x01(\x04H\x00R\x06height\x88\x01\x01\x12\x19\n\x05width\x18\x02 \x01(\x04H\x01R\x05width\x88\x01\x01\x12\x12\n\x04seed\x18\x03 \x03(\rR\x04seed\x12\x1d\n\x07samples\x18\x04 \x01(\x04H\x02R\x07samples\x88\x01\x01\x12\x19\n\x05steps\x18\x05 \x01(\x04H\x03R\x05steps\x88\x01\x01\x12X\n\ttransform\x18\x06 \x01(\x0b\x32\x35.stabilityai.platformapis.generation.v1.TransformTypeH\x04R\ttransform\x88\x01\x01\x12U\n\nparameters\x18\x07 \x03(\x0b\x32\x35.stabilityai.platformapis.generation.v1.StepParameterR\nparameters\x12\x65\n\x10masked_area_init\x18\x08 \x01(\x0e\x32\x36.stabilityai.platformapis.generation.v1.MaskedAreaInitH\x05R\x0emaskedAreaInit\x88\x01\x01\x12^\n\rweight_method\x18\t \x01(\x0e\x32\x34.stabilityai.platformapis.generation.v1.WeightMethodH\x06R\x0cweightMethod\x88\x01\x01\x12\x1f\n\x08quantize\x18\n \x01(\x08H\x07R\x08quantize\x88\x01\x01\x42\t\n\x07_heightB\x08\n\x06_widthB\n\n\x08_samplesB\x08\n\x06_stepsB\x0c\n\n_transformB\x13\n\x11_masked_area_initB\x10\n\x0e_weight_methodB\x0b\n\t_quantize\"^\n\x11\x43lassifierConcept\x12\x18\n\x07\x63oncept\x18\x01 \x01(\tR\x07\x63oncept\x12!\n\tthreshold\x18\x02 \x01(\x02H\x00R\tthreshold\x88\x01\x01\x42\x0c\n\n_threshold\"\x85\x03\n\x12\x43lassifierCategory\x12\x12\n\x04name\x18\x01 \x01(\tR\x04name\x12U\n\x08\x63oncepts\x18\x02 \x03(\x0b\x32\x39.stabilityai.platformapis.generation.v1.ClassifierConceptR\x08\x63oncepts\x12#\n\nadjustment\x18\x03 \x01(\x02H\x00R\nadjustment\x88\x01\x01\x12K\n\x06\x61\x63tion\x18\x04 \x01(\x0e\x32..stabilityai.platformapis.generation.v1.ActionH\x01R\x06\x61\x63tion\x88\x01\x01\x12\x64\n\x0f\x63lassifier_mode\x18\x05 \x01(\x0e\x32\x36.stabilityai.platformapis.generation.v1.ClassifierModeH\x02R\x0e\x63lassifierMode\x88\x01\x01\x42\r\n\x0b_adjustmentB\t\n\x07_actionB\x12\n\x10_classifier_mode\"\xba\x02\n\x14\x43lassifierParameters\x12Z\n\ncategories\x18\x01 \x03(\x0b\x32:.stabilityai.platformapis.generation.v1.ClassifierCategoryR\ncategories\x12T\n\x07\x65xceeds\x18\x02 \x03(\x0b\x32:.stabilityai.platformapis.generation.v1.ClassifierCategoryR\x07\x65xceeds\x12\\\n\x0frealized_action\x18\x03 \x01(\x0e\x32..stabilityai.platformapis.generation.v1.ActionH\x00R\x0erealizedAction\x88\x01\x01\x42\x12\n\x10_realized_action\"\x8a\x01\n\x15InterpolateParameters\x12\x16\n\x06ratios\x18\x01 \x03(\x02R\x06ratios\x12P\n\x04mode\x18\x02 \x01(\x0e\x32\x37.stabilityai.platformapis.generation.v1.InterpolateModeH\x00R\x04mode\x88\x01\x01\x42\x07\n\x05_mode\"\xbb\x04\n\x14TransformColorAdjust\x12#\n\nbrightness\x18\x01 \x01(\x02H\x00R\nbrightness\x88\x01\x01\x12\x1f\n\x08\x63ontrast\x18\x02 \x01(\x02H\x01R\x08\x63ontrast\x88\x01\x01\x12\x15\n\x03hue\x18\x03 \x01(\x02H\x02R\x03hue\x88\x01\x01\x12#\n\nsaturation\x18\x04 \x01(\x02H\x03R\nsaturation\x88\x01\x01\x12!\n\tlightness\x18\x05 \x01(\x02H\x04R\tlightness\x88\x01\x01\x12V\n\x0bmatch_image\x18\x06 \x01(\x0b\x32\x30.stabilityai.platformapis.generation.v1.ArtifactH\x05R\nmatchImage\x88\x01\x01\x12Z\n\nmatch_mode\x18\x07 \x01(\x0e\x32\x36.stabilityai.platformapis.generation.v1.ColorMatchModeH\x06R\tmatchMode\x88\x01\x01\x12&\n\x0cnoise_amount\x18\x08 \x01(\x02H\x07R\x0bnoiseAmount\x88\x01\x01\x12\"\n\nnoise_seed\x18\t \x01(\rH\x08R\tnoiseSeed\x88\x01\x01\x42\r\n\x0b_brightnessB\x0b\n\t_contrastB\x06\n\x04_hueB\r\n\x0b_saturationB\x0c\n\n_lightnessB\x0e\n\x0c_match_imageB\r\n\x0b_match_modeB\x0f\n\r_noise_amountB\r\n\x0b_noise_seed\"\xae\x01\n\x12TransformDepthCalc\x12&\n\x0c\x62lend_weight\x18\x01 \x01(\x02H\x00R\x0b\x62lendWeight\x88\x01\x01\x12$\n\x0b\x62lur_radius\x18\x02 \x01(\rH\x01R\nblurRadius\x88\x01\x01\x12\x1d\n\x07reverse\x18\x03 \x01(\x08H\x02R\x07reverse\x88\x01\x01\x42\x0f\n\r_blend_weightB\x0e\n\x0c_blur_radiusB\n\n\x08_reverse\")\n\x0fTransformMatrix\x12\x16\n\x04\x64\x61ta\x18\x01 \x03(\x02\x42\x02\x10\x01R\x04\x64\x61ta\"\xa0\x03\n\x11TransformResample\x12S\n\x0b\x62order_mode\x18\x01 \x01(\x0e\x32\x32.stabilityai.platformapis.generation.v1.BorderModeR\nborderMode\x12U\n\ttransform\x18\x02 \x01(\x0b\x32\x37.stabilityai.platformapis.generation.v1.TransformMatrixR\ttransform\x12\x63\n\x0eprev_transform\x18\x03 \x01(\x0b\x32\x37.stabilityai.platformapis.generation.v1.TransformMatrixH\x00R\rprevTransform\x88\x01\x01\x12\"\n\ndepth_warp\x18\x04 \x01(\x02H\x01R\tdepthWarp\x88\x01\x01\x12$\n\x0b\x65xport_mask\x18\x05 \x01(\x08H\x02R\nexportMask\x88\x01\x01\x42\x11\n\x0f_prev_transformB\r\n\x0b_depth_warpB\x0e\n\x0c_export_mask\"\xc2\x01\n\x10\x43\x61meraParameters\x12S\n\x0b\x63\x61mera_type\x18\x01 \x01(\x0e\x32\x32.stabilityai.platformapis.generation.v1.CameraTypeR\ncameraType\x12\x1d\n\nnear_plane\x18\x02 \x01(\x02R\tnearPlane\x12\x1b\n\tfar_plane\x18\x03 \x01(\x02R\x08\x66\x61rPlane\x12\x15\n\x03\x66ov\x18\x04 \x01(\x02H\x00R\x03\x66ov\x88\x01\x01\x42\x06\n\x04_fov\"\xf2\x02\n\x13TransformCameraPose\x12h\n\x14world_to_view_matrix\x18\x01 \x01(\x0b\x32\x37.stabilityai.platformapis.generation.v1.TransformMatrixR\x11worldToViewMatrix\x12\x65\n\x11\x63\x61mera_parameters\x18\x02 \x01(\x0b\x32\x38.stabilityai.platformapis.generation.v1.CameraParametersR\x10\x63\x61meraParameters\x12\x1d\n\ndo_prefill\x18\x05 \x01(\x08R\tdoPrefill\x12S\n\x0brender_mode\x18\x08 \x01(\x0e\x32\x32.stabilityai.platformapis.generation.v1.RenderModeR\nrenderModeJ\x04\x08\x03\x10\x04J\x04\x08\x04\x10\x05J\x04\x08\x06\x10\x07J\x04\x08\x07\x10\x08\"\x9b\x03\n\x13TransformParameters\x12\x61\n\x0c\x63olor_adjust\x18\x02 \x01(\x0b\x32<.stabilityai.platformapis.generation.v1.TransformColorAdjustH\x00R\x0b\x63olorAdjust\x12[\n\ndepth_calc\x18\x04 \x01(\x0b\x32:.stabilityai.platformapis.generation.v1.TransformDepthCalcH\x00R\tdepthCalc\x12W\n\x08resample\x18\x05 \x01(\x0b\x32\x39.stabilityai.platformapis.generation.v1.TransformResampleH\x00R\x08resample\x12^\n\x0b\x63\x61mera_pose\x18\x06 \x01(\x0b\x32;.stabilityai.platformapis.generation.v1.TransformCameraPoseH\x00R\ncameraPoseB\x0b\n\ttransform\"\xc1\x01\n\x0f\x41ssetParameters\x12K\n\x06\x61\x63tion\x18\x01 \x01(\x0e\x32\x33.stabilityai.platformapis.generation.v1.AssetActionR\x06\x61\x63tion\x12\x1d\n\nproject_id\x18\x02 \x01(\tR\tprojectId\x12\x42\n\x03use\x18\x03 \x01(\x0e\x32\x30.stabilityai.platformapis.generation.v1.AssetUseR\x03use\"\xb4\x01\n\nAnswerMeta\x12\x1a\n\x06gpu_id\x18\x01 \x01(\tH\x00R\x05gpuId\x88\x01\x01\x12\x1a\n\x06\x63pu_id\x18\x02 \x01(\tH\x01R\x05\x63puId\x88\x01\x01\x12\x1c\n\x07node_id\x18\x03 \x01(\tH\x02R\x06nodeId\x88\x01\x01\x12 \n\tengine_id\x18\x04 \x01(\tH\x03R\x08\x65ngineId\x88\x01\x01\x42\t\n\x07_gpu_idB\t\n\x07_cpu_idB\n\n\x08_node_idB\x0c\n\n_engine_id\"\xa0\x02\n\x06\x41nswer\x12\x1b\n\tanswer_id\x18\x01 \x01(\tR\x08\x61nswerId\x12\x1d\n\nrequest_id\x18\x02 \x01(\tR\trequestId\x12\x1a\n\x08received\x18\x03 \x01(\x04R\x08received\x12\x18\n\x07\x63reated\x18\x04 \x01(\x04R\x07\x63reated\x12K\n\x04meta\x18\x06 \x01(\x0b\x32\x32.stabilityai.platformapis.generation.v1.AnswerMetaH\x00R\x04meta\x88\x01\x01\x12N\n\tartifacts\x18\x07 \x03(\x0b\x32\x30.stabilityai.platformapis.generation.v1.ArtifactR\tartifactsB\x07\n\x05_meta\"r\n\x0b\x41nswerBatch\x12\x19\n\x08\x62\x61tch_id\x18\x01 \x01(\tR\x07\x62\x61tchId\x12H\n\x07\x61nswers\x18\x02 \x03(\x0b\x32..stabilityai.platformapis.generation.v1.AnswerR\x07\x61nswers\"\xfa\x06\n\x07Request\x12\x1b\n\tengine_id\x18\x01 \x01(\tR\x08\x65ngineId\x12\x1d\n\nrequest_id\x18\x02 \x01(\tR\trequestId\x12[\n\x0erequested_type\x18\x03 \x01(\x0e\x32\x34.stabilityai.platformapis.generation.v1.ArtifactTypeR\rrequestedType\x12\x46\n\x06prompt\x18\x04 \x03(\x0b\x32..stabilityai.platformapis.generation.v1.PromptR\x06prompt\x12O\n\x05image\x18\x05 \x01(\x0b\x32\x37.stabilityai.platformapis.generation.v1.ImageParametersH\x00R\x05image\x12^\n\nclassifier\x18\x07 \x01(\x0b\x32<.stabilityai.platformapis.generation.v1.ClassifierParametersH\x00R\nclassifier\x12O\n\x05\x61sset\x18\x08 \x01(\x0b\x32\x37.stabilityai.platformapis.generation.v1.AssetParametersH\x00R\x05\x61sset\x12\x61\n\x0binterpolate\x18\x0b \x01(\x0b\x32=.stabilityai.platformapis.generation.v1.InterpolateParametersH\x00R\x0binterpolate\x12[\n\ttransform\x18\x0c \x01(\x0b\x32;.stabilityai.platformapis.generation.v1.TransformParametersH\x00R\ttransform\x12\x64\n\x0b\x63onditioner\x18\x06 \x01(\x0b\x32=.stabilityai.platformapis.generation.v1.ConditionerParametersH\x01R\x0b\x63onditioner\x88\x01\x01\x12\x35\n\x06\x65xtras\x18\xff\x0f \x01(\x0b\x32\x17.google.protobuf.StructH\x02R\x06\x65xtras\x88\x01\x01\x42\x08\n\x06paramsB\x0e\n\x0c_conditionerB\t\n\x07_extrasJ\x04\x08\t\x10\nJ\x04\x08\n\x10\x0b\"\xcd\x01\n\x08OnStatus\x12L\n\x06reason\x18\x01 \x03(\x0e\x32\x34.stabilityai.platformapis.generation.v1.FinishReasonR\x06reason\x12\x1b\n\x06target\x18\x02 \x01(\tH\x00R\x06target\x88\x01\x01\x12K\n\x06\x61\x63tion\x18\x03 \x03(\x0e\x32\x33.stabilityai.platformapis.generation.v1.StageActionR\x06\x61\x63tionB\t\n\x07_target\"\xb1\x01\n\x05Stage\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12I\n\x07request\x18\x02 \x01(\x0b\x32/.stabilityai.platformapis.generation.v1.RequestR\x07request\x12M\n\ton_status\x18\x03 \x03(\x0b\x32\x30.stabilityai.platformapis.generation.v1.OnStatusR\x08onStatus\"r\n\x0c\x43hainRequest\x12\x1d\n\nrequest_id\x18\x01 \x01(\tR\trequestId\x12\x43\n\x05stage\x18\x02 \x03(\x0b\x32-.stabilityai.platformapis.generation.v1.StageR\x05stage*E\n\x0c\x46inishReason\x12\x08\n\x04NULL\x10\x00\x12\n\n\x06LENGTH\x10\x01\x12\x08\n\x04STOP\x10\x02\x12\t\n\x05\x45RROR\x10\x03\x12\n\n\x06\x46ILTER\x10\x04*\xf8\x01\n\x0c\x41rtifactType\x12\x11\n\rARTIFACT_NONE\x10\x00\x12\x12\n\x0e\x41RTIFACT_IMAGE\x10\x01\x12\x12\n\x0e\x41RTIFACT_VIDEO\x10\x02\x12\x11\n\rARTIFACT_TEXT\x10\x03\x12\x13\n\x0f\x41RTIFACT_TOKENS\x10\x04\x12\x16\n\x12\x41RTIFACT_EMBEDDING\x10\x05\x12\x1c\n\x18\x41RTIFACT_CLASSIFICATIONS\x10\x06\x12\x11\n\rARTIFACT_MASK\x10\x07\x12\x13\n\x0f\x41RTIFACT_LATENT\x10\x08\x12\x13\n\x0f\x41RTIFACT_TENSOR\x10\t\x12\x12\n\x0e\x41RTIFACT_DEPTH\x10\n*g\n\x0eMaskedAreaInit\x12\x19\n\x15MASKED_AREA_INIT_ZERO\x10\x00\x12\x1b\n\x17MASKED_AREA_INIT_RANDOM\x10\x01\x12\x1d\n\x19MASKED_AREA_INIT_ORIGINAL\x10\x02*5\n\x0cWeightMethod\x12\x10\n\x0cTEXT_ENCODER\x10\x00\x12\x13\n\x0f\x43ROSS_ATTENTION\x10\x01*\x98\x02\n\x10\x44iffusionSampler\x12\x10\n\x0cSAMPLER_DDIM\x10\x00\x12\x10\n\x0cSAMPLER_DDPM\x10\x01\x12\x13\n\x0fSAMPLER_K_EULER\x10\x02\x12\x1d\n\x19SAMPLER_K_EULER_ANCESTRAL\x10\x03\x12\x12\n\x0eSAMPLER_K_HEUN\x10\x04\x12\x13\n\x0fSAMPLER_K_DPM_2\x10\x05\x12\x1d\n\x19SAMPLER_K_DPM_2_ANCESTRAL\x10\x06\x12\x11\n\rSAMPLER_K_LMS\x10\x07\x12 \n\x1cSAMPLER_K_DPMPP_2S_ANCESTRAL\x10\x08\x12\x16\n\x12SAMPLER_K_DPMPP_2M\x10\t\x12\x17\n\x13SAMPLER_K_DPMPP_SDE\x10\n*F\n\x08Upscaler\x12\x10\n\x0cUPSCALER_RGB\x10\x00\x12\x13\n\x0fUPSCALER_GFPGAN\x10\x01\x12\x13\n\x0fUPSCALER_ESRGAN\x10\x02*\xd8\x01\n\x0eGuidancePreset\x12\x18\n\x14GUIDANCE_PRESET_NONE\x10\x00\x12\x1a\n\x16GUIDANCE_PRESET_SIMPLE\x10\x01\x12\x1d\n\x19GUIDANCE_PRESET_FAST_BLUE\x10\x02\x12\x1e\n\x1aGUIDANCE_PRESET_FAST_GREEN\x10\x03\x12\x18\n\x14GUIDANCE_PRESET_SLOW\x10\x04\x12\x1a\n\x16GUIDANCE_PRESET_SLOWER\x10\x05\x12\x1b\n\x17GUIDANCE_PRESET_SLOWEST\x10\x06*\x91\x01\n\x11ModelArchitecture\x12\x1b\n\x17MODEL_ARCHITECTURE_NONE\x10\x00\x12\x1f\n\x1bMODEL_ARCHITECTURE_CLIP_VIT\x10\x01\x12\"\n\x1eMODEL_ARCHITECTURE_CLIP_RESNET\x10\x02\x12\x1a\n\x16MODEL_ARCHITECTURE_LDM\x10\x03*\xa2\x01\n\x06\x41\x63tion\x12\x16\n\x12\x41\x43TION_PASSTHROUGH\x10\x00\x12\x1f\n\x1b\x41\x43TION_REGENERATE_DUPLICATE\x10\x01\x12\x15\n\x11\x41\x43TION_REGENERATE\x10\x02\x12\x1e\n\x1a\x41\x43TION_OBFUSCATE_DUPLICATE\x10\x03\x12\x14\n\x10\x41\x43TION_OBFUSCATE\x10\x04\x12\x12\n\x0e\x41\x43TION_DISCARD\x10\x05*D\n\x0e\x43lassifierMode\x12\x17\n\x13\x43LSFR_MODE_ZEROSHOT\x10\x00\x12\x19\n\x15\x43LSFR_MODE_MULTICLASS\x10\x01*\x8c\x01\n\x0fInterpolateMode\x12\x16\n\x12INTERPOLATE_LINEAR\x10\x00\x12\x14\n\x10INTERPOLATE_RIFE\x10\x01\x12\x1a\n\x16INTERPOLATE_VAE_LINEAR\x10\x02\x12\x19\n\x15INTERPOLATE_VAE_SLERP\x10\x03\x12\x14\n\x10INTERPOLATE_FILM\x10\x04*l\n\nBorderMode\x12\x12\n\x0e\x42ORDER_REFLECT\x10\x00\x12\x14\n\x10\x42ORDER_REPLICATE\x10\x01\x12\x0f\n\x0b\x42ORDER_WRAP\x10\x02\x12\x0f\n\x0b\x42ORDER_ZERO\x10\x03\x12\x12\n\x0e\x42ORDER_PREFILL\x10\x04*O\n\x0e\x43olorMatchMode\x12\x13\n\x0f\x43OLOR_MATCH_HSV\x10\x00\x12\x13\n\x0f\x43OLOR_MATCH_LAB\x10\x01\x12\x13\n\x0f\x43OLOR_MATCH_RGB\x10\x02*=\n\nCameraType\x12\x16\n\x12\x43\x41MERA_PERSPECTIVE\x10\x00\x12\x17\n\x13\x43\x41MERA_ORTHOGRAPHIC\x10\x01*4\n\nRenderMode\x12\x0f\n\x0bRENDER_MESH\x10\x00\x12\x15\n\x11RENDER_POINTCLOUD\x10\x01*=\n\x0b\x41ssetAction\x12\r\n\tASSET_PUT\x10\x00\x12\r\n\tASSET_GET\x10\x01\x12\x10\n\x0c\x41SSET_DELETE\x10\x02*\x81\x01\n\x08\x41ssetUse\x12\x17\n\x13\x41SSET_USE_UNDEFINED\x10\x00\x12\x13\n\x0f\x41SSET_USE_INPUT\x10\x01\x12\x14\n\x10\x41SSET_USE_OUTPUT\x10\x02\x12\x1a\n\x16\x41SSET_USE_INTERMEDIATE\x10\x03\x12\x15\n\x11\x41SSET_USE_PROJECT\x10\x04*W\n\x0bStageAction\x12\x15\n\x11STAGE_ACTION_PASS\x10\x00\x12\x18\n\x14STAGE_ACTION_DISCARD\x10\x01\x12\x17\n\x13STAGE_ACTION_RETURN\x10\x02\x32\xff\x01\n\x11GenerationService\x12o\n\x08Generate\x12/.stabilityai.platformapis.generation.v1.Request\x1a..stabilityai.platformapis.generation.v1.Answer\"\x00\x30\x01\x12y\n\rChainGenerate\x12\x34.stabilityai.platformapis.generation.v1.ChainRequest\x1a..stabilityai.platformapis.generation.v1.Answer\"\x00\x30\x01\x42\xdf\x02\n*com.stabilityai.platformapis.generation.v1B\x0fGenerationProtoP\x01Zegithub.com/stability-ai/api-interfaces/gen/proto/go/stability_api/platform/generation/v1;generationv1\xa2\x02\x03SPG\xaa\x02&Stabilityai.Platformapis.Generation.V1\xca\x02&Stabilityai\\Platformapis\\Generation\\V1\xe2\x02\x32Stabilityai\\Platformapis\\Generation\\V1\\GPBMetadata\xea\x02)Stabilityai::Platformapis::Generation::V1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'stability_api.platform.generation.v1.generation_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n*com.stabilityai.platformapis.generation.v1B\017GenerationProtoP\001Zegithub.com/stability-ai/api-interfaces/gen/proto/go/stability_api/platform/generation/v1;generationv1\242\002\003SPG\252\002&Stabilityai.Platformapis.Generation.V1\312\002&Stabilityai\\Platformapis\\Generation\\V1\342\0022Stabilityai\\Platformapis\\Generation\\V1\\GPBMetadata\352\002)Stabilityai::Platformapis::Generation::V1'
  _TRANSFORMMATRIX.fields_by_name['data']._options = None
  _TRANSFORMMATRIX.fields_by_name['data']._serialized_options = b'\020\001'
  _globals['_FINISHREASON']._serialized_start=9970
  _globals['_FINISHREASON']._serialized_end=10039
  _globals['_ARTIFACTTYPE']._serialized_start=10042
  _globals['_ARTIFACTTYPE']._serialized_end=10290
  _globals['_MASKEDAREAINIT']._serialized_start=10292
  _globals['_MASKEDAREAINIT']._serialized_end=10395
  _globals['_WEIGHTMETHOD']._serialized_start=10397
  _globals['_WEIGHTMETHOD']._serialized_end=10450
  _globals['_DIFFUSIONSAMPLER']._serialized_start=10453
  _globals['_DIFFUSIONSAMPLER']._serialized_end=10733
  _globals['_UPSCALER']._serialized_start=10735
  _globals['_UPSCALER']._serialized_end=10805
  _globals['_GUIDANCEPRESET']._serialized_start=10808
  _globals['_GUIDANCEPRESET']._serialized_end=11024
  _globals['_MODELARCHITECTURE']._serialized_start=11027
  _globals['_MODELARCHITECTURE']._serialized_end=11172
  _globals['_ACTION']._serialized_start=11175
  _globals['_ACTION']._serialized_end=11337
  _globals['_CLASSIFIERMODE']._serialized_start=11339
  _globals['_CLASSIFIERMODE']._serialized_end=11407
  _globals['_INTERPOLATEMODE']._serialized_start=11410
  _globals['_INTERPOLATEMODE']._serialized_end=11550
  _globals['_BORDERMODE']._serialized_start=11552
  _globals['_BORDERMODE']._serialized_end=11660
  _globals['_COLORMATCHMODE']._serialized_start=11662
  _globals['_COLORMATCHMODE']._serialized_end=11741
  _globals['_CAMERATYPE']._serialized_start=11743
  _globals['_CAMERATYPE']._serialized_end=11804
  _globals['_RENDERMODE']._serialized_start=11806
  _globals['_RENDERMODE']._serialized_end=11858
  _globals['_ASSETACTION']._serialized_start=11860
  _globals['_ASSETACTION']._serialized_end=11921
  _globals['_ASSETUSE']._serialized_start=11924
  _globals['_ASSETUSE']._serialized_end=12053
  _globals['_STAGEACTION']._serialized_start=12055
  _globals['_STAGEACTION']._serialized_end=12142
  _globals['_TOKEN']._serialized_start=164
  _globals['_TOKEN']._serialized_end=221
  _globals['_TOKENS']._serialized_start=224
  _globals['_TOKENS']._serialized_end=360
  _globals['_ARTIFACT']._serialized_start=363
  _globals['_ARTIFACT']._serialized_end=962
  _globals['_PROMPTPARAMETERS']._serialized_start=964
  _globals['_PROMPTPARAMETERS']._serialized_end=1056
  _globals['_PROMPT']._serialized_start=1059
  _globals['_PROMPT']._serialized_end=1363
  _globals['_SAMPLERPARAMETERS']._serialized_start=1366
  _globals['_SAMPLERPARAMETERS']._serialized_end=1807
  _globals['_CONDITIONERPARAMETERS']._serialized_start=1810
  _globals['_CONDITIONERPARAMETERS']._serialized_end=2012
  _globals['_SCHEDULEPARAMETERS']._serialized_start=2014
  _globals['_SCHEDULEPARAMETERS']._serialized_end=2139
  _globals['_STEPPARAMETER']._serialized_start=2142
  _globals['_STEPPARAMETER']._serialized_end=2504
  _globals['_MODEL']._serialized_start=2507
  _globals['_MODEL']._serialized_end=2756
  _globals['_CUTOUTPARAMETERS']._serialized_start=2759
  _globals['_CUTOUTPARAMETERS']._serialized_end=3017
  _globals['_GUIDANCESCHEDULEPARAMETERS']._serialized_start=3019
  _globals['_GUIDANCESCHEDULEPARAMETERS']._serialized_end=3097
  _globals['_GUIDANCEINSTANCEPARAMETERS']._serialized_start=3100
  _globals['_GUIDANCEINSTANCEPARAMETERS']._serialized_end=3556
  _globals['_GUIDANCEPARAMETERS']._serialized_start=3559
  _globals['_GUIDANCEPARAMETERS']._serialized_end=3774
  _globals['_TRANSFORMTYPE']._serialized_start=3777
  _globals['_TRANSFORMTYPE']._serialized_end=3970
  _globals['_IMAGEPARAMETERS']._serialized_start=3973
  _globals['_IMAGEPARAMETERS']._serialized_end=4642
  _globals['_CLASSIFIERCONCEPT']._serialized_start=4644
  _globals['_CLASSIFIERCONCEPT']._serialized_end=4738
  _globals['_CLASSIFIERCATEGORY']._serialized_start=4741
  _globals['_CLASSIFIERCATEGORY']._serialized_end=5130
  _globals['_CLASSIFIERPARAMETERS']._serialized_start=5133
  _globals['_CLASSIFIERPARAMETERS']._serialized_end=5447
  _globals['_INTERPOLATEPARAMETERS']._serialized_start=5450
  _globals['_INTERPOLATEPARAMETERS']._serialized_end=5588
  _globals['_TRANSFORMCOLORADJUST']._serialized_start=5591
  _globals['_TRANSFORMCOLORADJUST']._serialized_end=6162
  _globals['_TRANSFORMDEPTHCALC']._serialized_start=6165
  _globals['_TRANSFORMDEPTHCALC']._serialized_end=6339
  _globals['_TRANSFORMMATRIX']._serialized_start=6341
  _globals['_TRANSFORMMATRIX']._serialized_end=6382
  _globals['_TRANSFORMRESAMPLE']._serialized_start=6385
  _globals['_TRANSFORMRESAMPLE']._serialized_end=6801
  _globals['_CAMERAPARAMETERS']._serialized_start=6804
  _globals['_CAMERAPARAMETERS']._serialized_end=6998
  _globals['_TRANSFORMCAMERAPOSE']._serialized_start=7001
  _globals['_TRANSFORMCAMERAPOSE']._serialized_end=7371
  _globals['_TRANSFORMPARAMETERS']._serialized_start=7374
  _globals['_TRANSFORMPARAMETERS']._serialized_end=7785
  _globals['_ASSETPARAMETERS']._serialized_start=7788
  _globals['_ASSETPARAMETERS']._serialized_end=7981
  _globals['_ANSWERMETA']._serialized_start=7984
  _globals['_ANSWERMETA']._serialized_end=8164
  _globals['_ANSWER']._serialized_start=8167
  _globals['_ANSWER']._serialized_end=8455
  _globals['_ANSWERBATCH']._serialized_start=8457
  _globals['_ANSWERBATCH']._serialized_end=8571
  _globals['_REQUEST']._serialized_start=8574
  _globals['_REQUEST']._serialized_end=9464
  _globals['_ONSTATUS']._serialized_start=9467
  _globals['_ONSTATUS']._serialized_end=9672
  _globals['_STAGE']._serialized_start=9675
  _globals['_STAGE']._serialized_end=9852
  _globals['_CHAINREQUEST']._serialized_start=9854
  _globals['_CHAINREQUEST']._serialized_end=9968
  _globals['_GENERATIONSERVICE']._serialized_start=12145
  _globals['_GENERATIONSERVICE']._serialized_end=12400
# @@protoc_insertion_point(module_scope)