// * Echarts 按需引入
import * as echarts from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'

import { BarChart,
	PieChart,
	GraphChart, //关系图
	LineChart,
	MapChart,
	LineSeriesOption, BarSeriesOption } from 'echarts/charts'
import {
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  // 数据集组件
  DatasetComponent,
  DatasetComponentOption,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
  GeoComponent,
  TimelineComponent,
  LegendComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  DataZoomComponent,
} from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = echarts.ComposeOption<BarSeriesOption | LineSeriesOption | TitleComponentOption | TooltipComponentOption | GridComponentOption | DatasetComponentOption>

// 注册必须的组件
echarts.use([
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  DataZoomComponent,
  BarChart,
  LineChart,
  PieChart,
  //地图
  GeoComponent,
  VisualMapComponent,
  TimelineComponent,
  VisualMapContinuousComponent,
  MapChart,
	GraphChart,
])

import type { EChartsOption } from 'echarts'

export function useEcharts(selector: string, theme: 'light' | 'dark' | 'default' = 'default') {
  const echartsInstance = echarts.init(document.querySelector(selector), theme, { renderer: 'canvas' })

  function setOption(options: EChartsOption) {
    echartsInstance.setOption(options)
  }

  function resize() {
    echartsInstance.resize({
      animation: {
        duration: 300,
        easing: 'quadraticIn',
      },
    })
  }

  return {
    setOption,
    echartsInstance,
    resize,
    echarts,
  }
}
