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
				path: 'user',
				name: 'user',
				component: () => import('@/views/system/user/index.vue'),
				meta: {
					title: '用户管理',
					icon:'Menu'
				}
			},
			{
				path: 'role',
				name: 'role',
				component: () => import('@/views/system/role/index.vue'),
				meta: {
					title: '角色管理',
					icon:'Menu'
				}
			},
			{
				path: 'menu',
				name: 'menu',
				component: () => import('@/views/system/menu/index.vue'),
				meta: {
					title: '菜单管理',
					icon:'Menu'
				}
			},
		]
	}
]
