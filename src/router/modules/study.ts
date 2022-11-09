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
				path: '/vue3',
				name: 'vue3',
				meta: {
					title: 'vue3',
					icon:'ElementPlus'
				},
				children:[
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
						path: 'watch',
						name: 'watch',
						component: () => import('@/views/study/watch.vue'),
						meta: {
							title: 'watch使用',
							icon:'Menu'
						}
					},
					{
						path: 'watchEffect',
						name: 'watchEffect',
						component: () => import('@/views/study/watchEffect.vue'),
						meta: {
							title: 'watchEffect使用',
							icon:'Menu'
						}
					},
				]
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