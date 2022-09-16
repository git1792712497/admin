import {RouteRecordRaw} from "vue-router";

export const useUtils: RouteRecordRaw[] = [
	{
		path: '/useUtils',
		name: 'useUtils',
		meta: {
			index: 3,
			title: '常用功能',
			icon:'useUtils'
		},
		children: [
			{
				path: 'menuList',
				name: 'menuList',
				component: () => import('@/views/system/menusList/index.vue'),
				meta: {
					title: '复制到剪切板',
					icon:'Menu'
				}
			}
		]
	}
]
