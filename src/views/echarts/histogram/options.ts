import { getHistogramData } from "@/api/fastMock";

export async function getOption(){
	const {data} = await getHistogramData()
	return {
		title: {
			text: 'ECharts 入门示例',
		},
		tooltip: {
			trigger: 'item',
			formatter: function(prams) {
				return prams.data + '自定义'
			}
		},
		//图表间距
		grid: {
			left: '8%',
			top: '10%',
			right: '5%',
			bottom: '15%',
		},
		legend: {
			data:[{
				name: '销量',
				// 强制设置图形为圆。
				icon: 'circle',
				// 设置文本为红色
				textStyle: {
					color: 'red'
				}
			}]
		},
		xAxis: {
			data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
		},
		yAxis: {
			axisLabel:{
				formatter: function (value, index) {
					return value + 'kg' + index;
				}
			}
		},
		series: [{
			name: '销量',
			type: 'bar',//bar柱状图,pie饼图
			data,
			//图表文字描述
			label: {
				show: true, //开启显示
				position: 'top', //在上方显示
				color: 'red',
				fontSize: 16,
				formatter: function(prams) {
					return prams.data + '自定义'
				}
			}
		}]
	};
}