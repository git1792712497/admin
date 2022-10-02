import { getHistogramData } from "@/api/echarts";

export async function getOption(){
	const {data} = await getHistogramData()
	return {
		title: {
			text: 'ECharts 入门示例'
		},
		tooltip: {
		
		},
		legend: {
			data:['销量']
		},
		xAxis: {
			data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
		},
		yAxis: {},
		series: [{
			name: '销量',
			type: 'bar',//bar柱状图,pie饼图
			data
		}]
	};
}