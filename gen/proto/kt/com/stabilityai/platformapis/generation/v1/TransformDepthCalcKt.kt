// Generated by the protocol buffer compiler. DO NOT EDIT!
// source: stability_api/platform/generation/v1/generation.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package com.stabilityai.platformapis.generation.v1;

@kotlin.jvm.JvmName("-initializetransformDepthCalc")
public inline fun transformDepthCalc(block: com.stabilityai.platformapis.generation.v1.TransformDepthCalcKt.Dsl.() -> kotlin.Unit): com.stabilityai.platformapis.generation.v1.TransformDepthCalc =
  com.stabilityai.platformapis.generation.v1.TransformDepthCalcKt.Dsl._create(com.stabilityai.platformapis.generation.v1.TransformDepthCalc.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `stabilityai.platformapis.generation.v1.TransformDepthCalc`
 */
public object TransformDepthCalcKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: com.stabilityai.platformapis.generation.v1.TransformDepthCalc.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.stabilityai.platformapis.generation.v1.TransformDepthCalc.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.stabilityai.platformapis.generation.v1.TransformDepthCalc = _builder.build()

    /**
     * ```
     * blend factor between AdaBins (0.0) and MiDaS (1.0)
     * ```
     *
     * `optional float blend_weight = 1 [json_name = "blendWeight"];`
     */
    public var blendWeight: kotlin.Float
      @JvmName("getBlendWeight")
      get() = _builder.getBlendWeight()
      @JvmName("setBlendWeight")
      set(value) {
        _builder.setBlendWeight(value)
      }
    /**
     * ```
     * blend factor between AdaBins (0.0) and MiDaS (1.0)
     * ```
     *
     * `optional float blend_weight = 1 [json_name = "blendWeight"];`
     */
    public fun clearBlendWeight() {
      _builder.clearBlendWeight()
    }
    /**
     * ```
     * blend factor between AdaBins (0.0) and MiDaS (1.0)
     * ```
     *
     * `optional float blend_weight = 1 [json_name = "blendWeight"];`
     * @return Whether the blendWeight field is set.
     */
    public fun hasBlendWeight(): kotlin.Boolean {
      return _builder.hasBlendWeight()
    }

    /**
     * ```
     * defaults to 0.0
     * ```
     *
     * `optional uint32 blur_radius = 2 [json_name = "blurRadius"];`
     */
    public var blurRadius: kotlin.Int
      @JvmName("getBlurRadius")
      get() = _builder.getBlurRadius()
      @JvmName("setBlurRadius")
      set(value) {
        _builder.setBlurRadius(value)
      }
    /**
     * ```
     * defaults to 0.0
     * ```
     *
     * `optional uint32 blur_radius = 2 [json_name = "blurRadius"];`
     */
    public fun clearBlurRadius() {
      _builder.clearBlurRadius()
    }
    /**
     * ```
     * defaults to 0.0
     * ```
     *
     * `optional uint32 blur_radius = 2 [json_name = "blurRadius"];`
     * @return Whether the blurRadius field is set.
     */
    public fun hasBlurRadius(): kotlin.Boolean {
      return _builder.hasBlurRadius()
    }

    /**
     * ```
     * make near depths have higher values
     * ```
     *
     * `optional bool reverse = 3 [json_name = "reverse"];`
     */
    public var reverse: kotlin.Boolean
      @JvmName("getReverse")
      get() = _builder.getReverse()
      @JvmName("setReverse")
      set(value) {
        _builder.setReverse(value)
      }
    /**
     * ```
     * make near depths have higher values
     * ```
     *
     * `optional bool reverse = 3 [json_name = "reverse"];`
     */
    public fun clearReverse() {
      _builder.clearReverse()
    }
    /**
     * ```
     * make near depths have higher values
     * ```
     *
     * `optional bool reverse = 3 [json_name = "reverse"];`
     * @return Whether the reverse field is set.
     */
    public fun hasReverse(): kotlin.Boolean {
      return _builder.hasReverse()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun com.stabilityai.platformapis.generation.v1.TransformDepthCalc.copy(block: com.stabilityai.platformapis.generation.v1.TransformDepthCalcKt.Dsl.() -> kotlin.Unit): com.stabilityai.platformapis.generation.v1.TransformDepthCalc =
  com.stabilityai.platformapis.generation.v1.TransformDepthCalcKt.Dsl._create(this.toBuilder()).apply { block() }._build()
