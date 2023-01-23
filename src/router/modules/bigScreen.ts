import {RouteRecordRaw} from 'vue-router'

export const bigScreen: RouteRecordRaw[] = [
	{
		path: '/bigScreen',
		name: 'bigScreen',
		meta: {
			index: 2,
			icon: 'FullScreen',
			title: '数据大屏',
			fullScreen:true,
		},
		children:[
			{
				path:'screenA',
				component: () => import('@/views/bigScreen/screenA/index.vue'),
				meta:{
					icon: 'Menu',
					title: '大屏一',
				}
			},
			{
				path:'screenB',
				component: () => import('@/views/bigScreen/screenA/index.vue'),
				meta:{
					icon: 'Menu',
					title: '大屏二',
				}
			},
		]
	}
]
