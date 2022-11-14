export async function getOption(){
	return {
		tooltip: {
			trigger: 'item',
			formatter(data){
				return data.seriesName + "<br/>"+ data.name+ " : " + data.value + " ("+data.percent.toFixed(1)+"%)";
			}
		},
		legend: {
			lineStyle:{
				color:"#ffffff"
			},
			show: true,
			icon: 'circle',
			right: '3%',
			left: 'center',
			bottom: '10%',
			itemWidth: 10,
			
			itemStyle: {
				borderColor: 'none',
			},
			textStyle: {
				color:'#ffffff',
				rich: {
					name: {
						color: '#606266',
						fontSize: 14,
					},
					percentage: {
						color: '#606266',
						fontSize: 16,
						padding: [0, 0, 0, 30],
						align: 'right',
					},
				},
			},
		},
		series: [
			{
				name: '访问来源',
				type: 'pie',
				radius: '60%',
				label:{
					normal:{
						position:'inner',
						show:true,
						formatter:'{d}%'
					}
				},
				data: [
					{value: 1048, name: '搜索引擎',groupId:1},
					{value: 735, name: '直接访问',groupId:2},
					{value: 580, name: '邮件营销',groupId:3},
					{value: 484, name: '联盟广告',groupId:4},
					{value: 0, name: '视频广告',groupId:5}
				],
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		]
	};
}