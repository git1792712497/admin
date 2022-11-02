import {RouteRecordRaw} from 'vue-router'

export const bigScreen: RouteRecordRaw[] = [
	{
		path: '/bigScreen',
		component: () => import('@/views/bigScreen/index.vue'),
		name: 'bigScreen',
		meta: {
			index: 2,
			icon: 'FullScreen',
			title: '数据大屏',
			fullScreen:true
		}
	}
]