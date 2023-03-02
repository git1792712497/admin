import { getHistogramData } from "@/api/fastMock";
import type { EChartsOption } from "echarts";

export async function getOption(): Promise<EChartsOption> {
	const {data} = await getHistogramData()
	return {
		backgroundColor: 'rgba(55,0,0,0.1)',
		title: {
			text: 'ECharts 配置',
		},
		tooltip: {
			// 使用了 trigger ，一般也结合 axisPointer
			trigger: "axis",  // 默认是 item
			axisPointer: {
				type: "line", //  (默认是竖线 line)  (横线 + 竖线 cross)  (横线 + 竖线 shadow)
			},
			formatter:'<div>tooltip</div>'
		},
		//网格组件
		grid: {
			left: '8%',
			top: '10%',
			right: '5%',
			bottom: '15%',
			show: true,
			backgroundColor: 'rgba(255,0,0,0.1)',
			containLabel: true //绘图区域包含坐标轴名称
		},

		dataZoom: [
			{
				show: true,
				height: 12,
				xAxisIndex: [0],
				bottom: "8%",
				start: 10,
				end: 90,
				handleSize: "110%",
				handleStyle: {
					color: "#292a2d",
				},
				textStyle: {
					color: "#292a2d",
				},
				borderColor: "#292a2d",
			},
			{
				type: "inside",
				show: true,
				height: 15,
				start: 1,
				end: 35,
			},
		],
		//x坐标系
		xAxis: {
			show: true,
			name: "类目坐标",
			type: "category", // 类目坐标才有data选项
			data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
			axisLine: { // 坐标轴轴线相关设置。
				show: true,
				lineStyle: {
					color: "red",
					width: 3,
				},
			},
			axisLabel: { // 坐标轴刻度标签的相关设置。
				show: true,
				color: "green",
				fontSize: 26,
			},
			axisTick: {  // 坐标轴刻度相关设置。
				show: true,
				length: 10,
				lineStyle: {
					color: "blue",
					width: 3,
				},
			},
			splitLine: { // 坐标轴在 grid 区域中的分隔线。
				show: true,
				lineStyle: {
					color: "orange",
					width: 1,
				},
			},
		},
		yAxis: {
			name: '数量(件)',
			axisLabel: {
				formatter: function (value, index) {
					return value + 'kg' + index;
				}
			}
		},
		legend: {
			data: [{
				name: '销量',
				// 强制设置图形为圆。
				icon: 'circle',
				// 设置文本为红色
				textStyle: {
					color: 'red'
				}
			}]
		},
		/*系列组件*/
		series: [
			{
				name: '销量',
				type: 'bar',//bar柱状图,pie饼图
				data,
				barWidth:50,//bar宽
				//图表文字描述
				label: {
					show: true, //开启显示
					position: 'top', //在上方显示或[x,y]
					color: 'red',
					fontSize: 16,
					formatter: function (prams) {
						return '自定义'
					}
				},
				//系列图样式(可以写到 data:[{itemStyle:{}}])
				itemStyle:{
					borderColor: "orange",
					borderWidth: 4,
					opacity: 0.4,
					// 渐变(支持写到data中)
					color: {
						type: "linear",
						//渐变方向
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: "red",
							},
							{
								offset: 1,
								color: "blue",
							},
						],
					},
				},
			}
		]
	};
}
