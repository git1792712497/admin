import {RouteRecordRaw} from "vue-router";

export const echarts: RouteRecordRaw[] = [
	{
		path: '/echarts',
		name: 'echarts',
		meta: {
			index: 3,
			title: 'echarts图表',
			icon:'Histogram'
		},
		children: [
			{
				path: 'histogram',
				name: 'histogram',
				component: () => import('@/views/echarts/histogram/histogram.vue'),
				meta: {
					title: '柱状图',
					icon:'Menu'
				}
			}
		]
	}
]