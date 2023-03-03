import { createRouter, createWebHashHistory } from "vue-router";
import NProgress from '@/config/nprogress'
import type {RouteRecordRaw} from 'vue-router'
import {basicRouter} from './basicRouter'
import {userStore} from "@/store/modules/user";
import {menuStore} from '@/store/modules/menu'


export const routes: RouteRecordRaw[] = [
	// @ts-ignore
	{
		path: '',
		component: () => import('@/layout/index.vue'),
		name: 'AppMain',
		redirect: '/home',
	}
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes: routes.concat(basicRouter),
	strict: true,
	scrollBehavior: () => ({left: 0,top: 0})
})
console.log(router,'aa')

router.beforeEach(async (to,from) => {
	NProgress.start()
	const user = userStore()
	const menu = menuStore()
	if (user.token){
		if (to.path === '/login') {
			return from.path
		} else {
			if (!menu.menuList.length){
				await menu.setMenuList()
				return to.path
			}
		}
	}else {
		if (to.path !== '/login'){
			return '/login'
		}
	}
})

router.afterEach(() => {
	NProgress.done();
})


export default router

