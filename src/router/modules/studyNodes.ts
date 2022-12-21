import {RouteRecordRaw} from "vue-router";

export const studyNodes: RouteRecordRaw[] = [
	{
		path: '/studyNodes',
		name: 'studyNodes',
		meta: {
			index: 0,
			title: '学习笔记',
			icon:'Memo'
		},
		children: [
			{
				path: 'vue3',
				name: 'vue3',
				meta: {
					title: 'vue3',
					icon:'ElementPlus'
				},
				children:[
					{
						path: 'hFunction',
						name: 'hFunction',
						component: () => import('@/views/studyNodes/vue3/hFunction.vue'),
						meta: {
							title: 'h函数',
							icon:'Menu'
						}
					},
					{
						path: 'watch',
						name: 'watch',
						component: () => import('@/views/studyNodes/vue3/watch.vue'),
						meta: {
							title: 'watch使用',
							icon:'Menu'
						}
					},
					{
						path: 'watchEffect',
						name: 'watchEffect',
						component: () => import('@/views/studyNodes/vue3/watchEffect.vue'),
						meta: {
							title: 'watchEffect使用',
							icon:'Menu'
						}
					},
					{
						path: 'tsx',
						name: 'tsx',
						component: () => import('@/views/studyNodes/vue3/tsx'),
						meta: {
							title: 'tsx使用',
							icon:'Menu'
						}
					},
					{
						path: 'v-model',
						name: 'v-model',
						component: () => import('@/views/studyNodes/vue3/v-model/parent.vue'),
						meta: {
							title: '组件v-model',
							icon:'Menu'
						}
					},
					{
						path: 'refFamily',
						name: 'refFamily',
						component: () => import('@/views/studyNodes/vue3/refFamily.vue'),
						meta: {
							title: 'ref全家',
							icon:'Menu'
						}
					},
					{
						path: 'nextTick',
						name: 'nextTick',
						component: () => import('@/views/studyNodes/vue3/nextTick.vue'),
						meta: {
							title: 'nextTick细节',
							icon:'Menu'
						}
					},
				]
			},
			{
				path: 'jsonServer',
				name: 'jsonServer',
				component: () => import('@/views/studyNodes/jsonServer.vue'),
				meta: {
					title: 'jsonServer使用',
					icon:'Menu'
				}
			},
			{
				path: 'methods',
				name: 'methods',
				component: () => import('@/views/studyNodes/methods.vue'),
				meta: {
					title: '功能方法',
					icon:'Menu'
				}
			},
			{
				path: 'scrollbar',
				name: 'scrollbar',
				component: () => import('@/views/studyNodes/scrollbar.vue'),
				meta: {
					title: '滚动条样式',
					icon:'Menu'
				}
			},
			
		]
	}
]