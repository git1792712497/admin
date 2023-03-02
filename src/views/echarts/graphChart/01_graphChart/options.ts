import type { EChartsOption } from "echarts";

const colorList = [
	"#28CAD8",
	"#E5A214",
	"#F69F73",
	"#ff7f50",
	"#87cefa",
	"#da70d6",
	"#32cd32",
	"#6495ed",
	"#ff69b4",
	"#cd5c5c",
	"#1e90ff",
	"#ff6347",
	"#7b68ee",
	"#6b8e23",
	"#4ea397",
	"#b8860b",
	"#7bd9a5"
];

export function getOption(): EChartsOption {
	 return  {
		title: {
			text: 'Basic Graph'
		},
		tooltip: {},
		animationDurationUpdate: 1500,
		animationEasingUpdate: 'quinticInOut',
		series: [
			{
				type: 'graph',
				layout: 'none',
				symbolSize: 50,
				roam: true,
				label: {
					show: true
				},
				edgeSymbol: ['circle', 'arrow'],
				edgeSymbolSize: [4, 10],
				edgeLabel: {
					fontSize: 20
				},
				itemStyle: {
					shadowColor: "rgba(133,203,247,0.75)",
					shadowBlur: 15,
					color: () => {
						return colorList[Math.floor(Math.random() * colorList.length)];
					}
				},
				data: [
					{
						name: 'Node 1',
						x: 300,
						y: 300
					},
					{
						name: 'Node 2',
						x: 800,
						y: 300
					},
					{
						name: 'Node 3',
						x: 550,
						y: 100
					},
					{
						name: 'Node 4',
						x: 550,
						y: 500
					}
				],
				links: [
					{
						source: 0,
						target: 1,
						symbolSize: [5, 20],
						label: {
							show: true
						},
						lineStyle: {
							width: 5,
							curveness: 0.2
						}
					},
					{
						source: 'Node 2',
						target: 'Node 1',
						label: {
							show: true
						},
						lineStyle: {
							curveness: 0.2
						}
					},
					{
						source: 'Node 1',
						target: 'Node 3'
					},
					{
						source: 'Node 2',
						target: 'Node 3'
					},
					{
						source: 'Node 2',
						target: 'Node 4'
					},
					{
						source: 'Node 1',
						target: 'Node 4'
					}
				],
				lineStyle: {
					opacity: 0.9,
					width: 2,
					curveness: 0
				}
			}
		]
	};
}
