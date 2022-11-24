import {RouteRecordRaw} from 'vue-router'

export const bigScreen: RouteRecordRaw[] = [
	{
		path: '/bigScreen',
		name: 'bigScreen',
		component: () => import('@/views/bigScreen/index.vue'),
		meta: {
			index: 2,
			icon: 'FullScreen',
			title: '数据大屏',
			fullScreen:true
		}
	}
]