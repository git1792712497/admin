import type { EChartsOption } from "echarts";

export function getOption(): EChartsOption{
	return {
		series: [
			{
				name: '访问来源',
				type: 'pie',
				radius: ['10%','60%'], //内外半径
				center:["50%","50%"], //圆心 x,y
				labelLine:{
					//视觉引导线
					length:100,
					length2:100
				},
				roseType:'area', //玫瑰图(区域大小表示数值)
				data: [
					{value: 1048, name: '搜索引擎',groupId:1},
					{value: 735, name: '直接访问',groupId:2},
					{value: 580, name: '邮件营销',groupId:3},
					{value: 484, name: '联盟广告',groupId:4},
					{value: 0, name: '视频广告',groupId:5}
				],
				//图表文字描述
				label: {
					show: true, //开启显示
					position: 'outside',
					color: 'red',
					fontSize: 16,
					formatter: function (params:any) {
						return `${params.data.name}${params.data.value}`
					}
				},
				//鼠标移入高亮色
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'red'
					},
					label:{
						show:true,
						color:'red'
					}
				},

			}
		],

		/*图例组件来源data里面的name*/
		legend: {
			//格式化
			formatter(name){
				//富文本语法:{percentage|内容}
				return name + '{zlq|40%}'
			},
			textStyle: {
				color:'red',
				rich: {
					//给富文本加样式
					zlq: {
						//css样式
						color: 'pink',
						fontSize: 16,
						padding: [0, 0, 0, 30],
						align: 'right',
					},
				},
			},
			lineStyle:{
				color:"#cdcdcd"
			},
			show: true,
			icon: 'circle',
			right: '3%',
			left: 'center',
			bottom: '10%',
			itemWidth: 20, //每个宽
			itemStyle: {
				borderColor: 'none',
			},
		},
	};
}
