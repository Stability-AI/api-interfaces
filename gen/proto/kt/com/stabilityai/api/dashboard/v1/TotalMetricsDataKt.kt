// Generated by the protocol buffer compiler. DO NOT EDIT!
// source: stability_api/platform/dashboard/v1/dashboard.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package com.stabilityai.api.dashboard.v1;

@kotlin.jvm.JvmName("-initializetotalMetricsData")
public inline fun totalMetricsData(block: com.stabilityai.api.dashboard.v1.TotalMetricsDataKt.Dsl.() -> kotlin.Unit): com.stabilityai.api.dashboard.v1.TotalMetricsData =
  com.stabilityai.api.dashboard.v1.TotalMetricsDataKt.Dsl._create(com.stabilityai.api.dashboard.v1.TotalMetricsData.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `stabilityai.api.dashboard.v1.TotalMetricsData`
 */
public object TotalMetricsDataKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: com.stabilityai.api.dashboard.v1.TotalMetricsData.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.stabilityai.api.dashboard.v1.TotalMetricsData.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.stabilityai.api.dashboard.v1.TotalMetricsData = _builder.build()

    /**
     * `.stabilityai.api.dashboard.v1.CostTotal input_total = 1 [json_name = "inputTotal"];`
     */
    public var inputTotal: com.stabilityai.api.dashboard.v1.CostTotal
      @JvmName("getInputTotal")
      get() = _builder.getInputTotal()
      @JvmName("setInputTotal")
      set(value) {
        _builder.setInputTotal(value)
      }
    /**
     * `.stabilityai.api.dashboard.v1.CostTotal input_total = 1 [json_name = "inputTotal"];`
     */
    public fun clearInputTotal() {
      _builder.clearInputTotal()
    }
    /**
     * `.stabilityai.api.dashboard.v1.CostTotal input_total = 1 [json_name = "inputTotal"];`
     * @return Whether the inputTotal field is set.
     */
    public fun hasInputTotal(): kotlin.Boolean {
      return _builder.hasInputTotal()
    }

    /**
     * `.stabilityai.api.dashboard.v1.CostTotal output_total = 2 [json_name = "outputTotal"];`
     */
    public var outputTotal: com.stabilityai.api.dashboard.v1.CostTotal
      @JvmName("getOutputTotal")
      get() = _builder.getOutputTotal()
      @JvmName("setOutputTotal")
      set(value) {
        _builder.setOutputTotal(value)
      }
    /**
     * `.stabilityai.api.dashboard.v1.CostTotal output_total = 2 [json_name = "outputTotal"];`
     */
    public fun clearOutputTotal() {
      _builder.clearOutputTotal()
    }
    /**
     * `.stabilityai.api.dashboard.v1.CostTotal output_total = 2 [json_name = "outputTotal"];`
     * @return Whether the outputTotal field is set.
     */
    public fun hasOutputTotal(): kotlin.Boolean {
      return _builder.hasOutputTotal()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun com.stabilityai.api.dashboard.v1.TotalMetricsData.copy(block: com.stabilityai.api.dashboard.v1.TotalMetricsDataKt.Dsl.() -> kotlin.Unit): com.stabilityai.api.dashboard.v1.TotalMetricsData =
  com.stabilityai.api.dashboard.v1.TotalMetricsDataKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val com.stabilityai.api.dashboard.v1.TotalMetricsDataOrBuilder.inputTotalOrNull: com.stabilityai.api.dashboard.v1.CostTotal?
  get() = if (hasInputTotal()) getInputTotal() else null

public val com.stabilityai.api.dashboard.v1.TotalMetricsDataOrBuilder.outputTotalOrNull: com.stabilityai.api.dashboard.v1.CostTotal?
  get() = if (hasOutputTotal()) getOutputTotal() else null
