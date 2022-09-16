import {RouteRecordRaw} from "vue-router";

export const directives: RouteRecordRaw[] = [
	{
		path: '/system',
		name: 'system',
		meta: {
			index: 3,
			title: '系统管理',
			icon:'Setting'
		},
		children: [
			{
				path: 'menuList',
				name: 'menuList',
				component: () => import('@/views/system/menusList/index.vue'),
				meta: {
					title: '菜单管理',
					icon:'Menu'
				}
			}
		]
	}
]
