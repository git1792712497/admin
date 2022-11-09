// * Echarts 按需引入
import * as echarts from "echarts/core";
import { BarChart,PieChart, BarSeriesOption, LineChart, LineSeriesOption } from "echarts/charts";
import { LegendComponent } from "echarts/components";
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
	TransformComponent
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = echarts.ComposeOption<| BarSeriesOption
		| LineSeriesOption
		| TitleComponentOption
		| TooltipComponentOption
		| GridComponentOption
		| DatasetComponentOption>;

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
	
	BarChart,
	LineChart,
	PieChart
]);

export default echarts;
