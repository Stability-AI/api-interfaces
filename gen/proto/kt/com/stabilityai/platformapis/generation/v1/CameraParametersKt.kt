// Generated by the protocol buffer compiler. DO NOT EDIT!
// source: stability_api/platform/generation/v1/generation.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package com.stabilityai.platformapis.generation.v1;

@kotlin.jvm.JvmName("-initializecameraParameters")
public inline fun cameraParameters(block: com.stabilityai.platformapis.generation.v1.CameraParametersKt.Dsl.() -> kotlin.Unit): com.stabilityai.platformapis.generation.v1.CameraParameters =
  com.stabilityai.platformapis.generation.v1.CameraParametersKt.Dsl._create(com.stabilityai.platformapis.generation.v1.CameraParameters.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `stabilityai.platformapis.generation.v1.CameraParameters`
 */
public object CameraParametersKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: com.stabilityai.platformapis.generation.v1.CameraParameters.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.stabilityai.platformapis.generation.v1.CameraParameters.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.stabilityai.platformapis.generation.v1.CameraParameters = _builder.build()

    /**
     * `.stabilityai.platformapis.generation.v1.CameraType camera_type = 1 [json_name = "cameraType"];`
     */
    public var cameraType: com.stabilityai.platformapis.generation.v1.CameraType
      @JvmName("getCameraType")
      get() = _builder.getCameraType()
      @JvmName("setCameraType")
      set(value) {
        _builder.setCameraType(value)
      }
    public var cameraTypeValue: kotlin.Int
      @JvmName("getCameraTypeValue")
      get() = _builder.getCameraTypeValue()
      @JvmName("setCameraTypeValue")
      set(value) {
        _builder.setCameraTypeValue(value)
      }
    /**
     * `.stabilityai.platformapis.generation.v1.CameraType camera_type = 1 [json_name = "cameraType"];`
     */
    public fun clearCameraType() {
      _builder.clearCameraType()
    }

    /**
     * ```
     * Nearest plane depth of a rendered frustum
     * ```
     *
     * `float near_plane = 2 [json_name = "nearPlane"];`
     */
    public var nearPlane: kotlin.Float
      @JvmName("getNearPlane")
      get() = _builder.getNearPlane()
      @JvmName("setNearPlane")
      set(value) {
        _builder.setNearPlane(value)
      }
    /**
     * ```
     * Nearest plane depth of a rendered frustum
     * ```
     *
     * `float near_plane = 2 [json_name = "nearPlane"];`
     */
    public fun clearNearPlane() {
      _builder.clearNearPlane()
    }

    /**
     * ```
     * Farthest plane depth of a rendered frustum
     * ```
     *
     * `float far_plane = 3 [json_name = "farPlane"];`
     */
    public var farPlane: kotlin.Float
      @JvmName("getFarPlane")
      get() = _builder.getFarPlane()
      @JvmName("setFarPlane")
      set(value) {
        _builder.setFarPlane(value)
      }
    /**
     * ```
     * Farthest plane depth of a rendered frustum
     * ```
     *
     * `float far_plane = 3 [json_name = "farPlane"];`
     */
    public fun clearFarPlane() {
      _builder.clearFarPlane()
    }

    /**
     * ```
     * Camera field of view (in degrees). Must be set for CAMERA_PERSPECTIVE type.
     * ```
     *
     * `optional float fov = 4 [json_name = "fov"];`
     */
    public var fov: kotlin.Float
      @JvmName("getFov")
      get() = _builder.getFov()
      @JvmName("setFov")
      set(value) {
        _builder.setFov(value)
      }
    /**
     * ```
     * Camera field of view (in degrees). Must be set for CAMERA_PERSPECTIVE type.
     * ```
     *
     * `optional float fov = 4 [json_name = "fov"];`
     */
    public fun clearFov() {
      _builder.clearFov()
    }
    /**
     * ```
     * Camera field of view (in degrees). Must be set for CAMERA_PERSPECTIVE type.
     * ```
     *
     * `optional float fov = 4 [json_name = "fov"];`
     * @return Whether the fov field is set.
     */
    public fun hasFov(): kotlin.Boolean {
      return _builder.hasFov()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun com.stabilityai.platformapis.generation.v1.CameraParameters.copy(block: com.stabilityai.platformapis.generation.v1.CameraParametersKt.Dsl.() -> kotlin.Unit): com.stabilityai.platformapis.generation.v1.CameraParameters =
  com.stabilityai.platformapis.generation.v1.CameraParametersKt.Dsl._create(this.toBuilder()).apply { block() }._build()
