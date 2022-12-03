import {RouteRecordRaw} from "vue-router";

export const directives: RouteRecordRaw[] = [
	{
		path: '/directives',
		name: 'directives',
		meta: {
			index: 2,
			title: '自定义指令',
			icon: 'Key'
		},
		children: [
			{
				path: 'throttle',
				name: 'throttle',
				component: () => import('@/views/directives/throttle.vue'),
				meta: {
					title: '节流指令',
					icon: 'Menu'
				}
			},
			{
				path: 'debounce',
				name: 'debounce',
				component: () => import('@/views/directives/debounce.vue'),
				meta: {
					title: '防抖指令',
					icon: 'Menu'
				}
			},
			{
				path: 'copy',
				name: 'copy',
				component: () => import('@/views/directives/copy.vue'),
				meta: {
					title: '复制指令',
					icon: 'Menu'
				}
			},
			{
				path: 'lazy',
				name: 'lazy',
				component: () => import('@/views/directives/lazy.vue'),
				meta: {
					title: '图片懒加载',
					icon: 'Menu'
				}
			},
		]
	}
]
