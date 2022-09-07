import {RouteRecordRaw} from "vue-router";

export const directives: RouteRecordRaw[] = [
	{
		path: '/directives',
		name: 'directives',
		meta: {
			menu: {index: 2,title: '自定义指令',icon:'Key'}
		},
		children: [
			{
				path: '/throttle',
				name: 'throttle',
				component: () => import('@/views/directives/throttle.vue'),
				meta: {
					menu: { title: '节流指令',icon:'Menu'}
				}
			},
			{
				path: '/debounce',
				name: 'debounce',
				component: () => import('@/views/directives/debounce.vue'),
				meta: {
					menu: { title: '防抖指令',icon:'Menu'}
				}
			}
		]
	}

]
