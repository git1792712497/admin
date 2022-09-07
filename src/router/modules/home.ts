import {RouteRecordRaw} from 'vue-router'

export const home: RouteRecordRaw[] = [
	{
		path: '/home',
		component: () => import('@/views/home/index.vue'),
		name: 'home',
		meta: {
			menu: {
				index: 1,
				icon: 'home-filled',
				title: '首页'
			}
		}
	}
]


