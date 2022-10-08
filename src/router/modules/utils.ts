import {RouteRecordRaw} from "vue-router";

export const utils: RouteRecordRaw[] = [
	{
		path: '/utils',
		name: 'utils',
		meta: {
			index: 2,
			title: '通用功能',
			icon:'Monitor'
		},
		children: [
			{
				path: 'aMap',
				name: 'aMap',
				component: () => import('@/views/utils/aMap.vue'),
				meta: {
					title: '高德地图',
					icon:'Menu'
				}
			},
			{
				path: 'validate',
				name: 'validate',
				component: () => import('@/views/utils/validate.vue'),
				meta: {
					title: '表单验证',
					icon:'Menu'
				}
			},
		]
	}
]