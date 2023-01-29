import {RouteRecordRaw} from 'vue-router'

export default [
	{
		path: '/home',
		component: () => import('@/views/home/index.vue'),
		name: 'home',
		meta: {
			index: 1,
			icon: 'home-filled',
			title: '首页',
			keepAlive:true
		}
	}
]	as RouteRecordRaw[]

