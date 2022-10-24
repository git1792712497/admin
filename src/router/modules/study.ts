import {RouteRecordRaw} from "vue-router";

export const toolComponents: RouteRecordRaw[] = [
	{
		path: '/study',
		name: 'study',
		meta: {
			index: 0,
			title: '学习笔记',
			icon:'Memo'
		},
		children: [
			{
				path: 'hFunction',
				name: 'hFunction',
				component: () => import('@/views/study/hFunction.vue'),
				meta: {
					title: 'h函数',
					icon:'Menu'
				}
			},
			{
				path: 'methods',
				name: 'methods',
				component: () => import('@/views/study/methods.vue'),
				meta: {
					title: '功能方法',
					icon:'Menu'
				}
			},
			{
				path: 'scrollbar',
				name: 'scrollbar',
				component: () => import('@/views/study/scrollbar.vue'),
				meta: {
					title: '滚动条样式',
					icon:'Menu'
				}
			},
		]
	}
]