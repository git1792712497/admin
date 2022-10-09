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
				path: 'test6666',
				name: 'text',
				meta: {
					title: '测试',
					icon: 'Menu'
				},
				children: [
					{
						path: 'deep',
						name: 'deep',
						meta: {
							title: '深度',
							icon: 'Menu'
						},
						children: [
							{
								path: 'test',
								name: 'text',
								meta: {
									title: '测试demo',
									icon: 'Menu'
								},
								component: () => import('@/views/demo/test.vue')
							},
							 {
									path: 'detail',
									name: 'detail',
									props: route => {
										 console.log(route)
										 return route.query
									},
									meta:{
										currentActive:'/directives/test6666/deep/test'
									},
									component: () => import('@/views/demo/detail.vue')
							 },
						]
					}
				]
			}
		]
	}

]
