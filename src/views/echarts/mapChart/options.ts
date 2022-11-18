let dataList = [
	{
		name: '北京',
		value: 0
	},
	{
		name: '天津',
		value: 0
	},
	{
		name: '上海',
		value: 0
	},
	{
		name: '重庆',
		value: 0
	},
	{
		name: '河北',
		value: 0
	},
	{
		name: '河南',
		value: 0
		
	},
	{
		name: '云南',
		value: 0
	},
	{
		name: '辽宁',
		value: 0
	},
	{
		name: '黑龙江',
		value: 0
	},
	{
		name: '湖南',
		value: 0
	},
	{
		name: '安徽',
		value: 0
	},
	{
		name: '山东',
		value: 0
	},
	{
		name: '新疆',
		value: 0
	},
	{
		name: '江苏',
		value: 0
	},
	{
		name: '浙江',
		value: 0
	},
	{
		name: '江西',
		value: 0
	},
	{
		name: '湖北',
		value: 0
	},
	{
		name: '广西',
		value: 0
	},
	{
		name: '甘肃',
		value: 0
	},
	{
		name: '山西',
		value: 0
	},
	{
		name: '内蒙古',
		value: 0
	},
	{
		name: '陕西',
		value: 0
	},
	{
		name: '吉林',
		value: 0
	},
	{
		name: '福建',
		value: 0
	},
	{
		name: '贵州',
		value: 0
	},
	{
		name: '广东',
		value: 0
	},
	{
		name: '青海',
		value: 0
	},
	{
		name: '西藏',
		value: 0
	},
	{
		name: '四川',
		value: 0
	},
	{
		name: '宁夏',
		value: 0
	},
	{
		name: '海南',
		value: 0
	},
	{
		name: '台湾',
		value: 0
	},
	{
		name: '南海诸岛',
		value: 0
	},
	{
		name: '香港',
		value: 0
	},
	{
		name: '澳门',
		value: 0
	},
];

export const options: any = {
	animation: true,
	animationDuration: 1000,
	animationEasing: 'cubicInOut',
	animationDurationUpdate: 1000,
	animationEasingUpdate: 'cubicInOut',
	grid: {
		right: '2%',
		top: '10%',
		bottom: '10%',
		width: '18%',
	},
	tooltip: {
		show: true,
	},
	//视觉映射
	visualMap: {
		min: 0,
		max: 10000,
		left: 26,
		bottom: 45,
		showLabel: true,
		text: ["高", "低"],
		pieces: [{
			gt: 2000,
			label: "> 2000 件",
			color: "#16dbee"
		}, {
			gte: 1000,
			lte: 2000,
			label: "1000-2000 件",
			color: "#b7d100"
		}, {
			gte: 100,
			lt: 1000,
			label: "100-1000 件",
			color: "#75bd8a"
		}, {
			gt: 0,
			lt: 100,
			label: "0-100 件",
			color: "#ffd768"
		}],
	},
	series: [{
		name: "订单销售量",
		type: "map",
		map:'china',
		geoIndex: 0,
		label: {
			show: true,
			fontSize: "14",
			color: "rgba(0,0,0,0.7)"
		},
		//地图上色
		itemStyle: {
			shadowBlur: 50,
			shadowColor: 'rgba(0, 0, 0, 0.4)',
			borderColor: "rgba(0, 0, 0, 0.2)",
		},
		emphasis: {
			itemStyle: {
				shadowBlur: 10,
				shadowOffsetX: 0,
				shadowColor: 'red'
			},
		},
		data:dataList.map(item => {
			return {
				name:item.name,
				value:parseInt((Math.random() * 3000).toString())
			}
		})
	}]
};
