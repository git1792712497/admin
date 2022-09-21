import {RouteRecordRaw} from "vue-router";

export const useUtils: RouteRecordRaw[] = [
	{
		path: '/useUtils',
		name: 'useUtils',
		meta: {
			index: 3,
			title: '常用功能',
			icon:'Monitor'
		},
		children: [
			{
				path: 'driver',
				name: 'driver',
				component: () => import('@/views/useUtils/driver.vue'),
				meta: {
					title: '功能引导',
					icon:'Menu'
				}
			},
			{
				path: 'fuse',
				name: 'fuse',
				component: () => import('@/views/useUtils/fuse.vue'),
				meta: {
					title: '模糊搜索',
					icon:'Menu'
				}
			},
			{
				path: 'excel',
				name: 'excel',
				component: () => import('@/views/useUtils/excel.vue'),
				meta: {
					title: 'excel处理',
					icon:'Menu'
				}
			}
		]
	}
]
