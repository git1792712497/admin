import {createRouter,createWebHashHistory} from "vue-router";
import type {RouteRecordRaw} from "vue-router";
import NProgress from '@/config/nprogress'
const metaRouters:Record<string, any> = import.meta.glob("./modules/**/*.ts",{ eager: true });

export let routerArray: RouteRecordRaw[] = [];
Object.values(metaRouters).forEach(modules => {
	const router = Object.values(modules).flat() as RouteRecordRaw[]
	routerArray.push(...router)
})

function mapMenuPath(routes){
	routes.forEach(route => {
		route.children?.forEach(item => {
			item.path = `${route.path}/${item.path}`
			item.children && mapMenuPath(route.children)
		})
	})
}
mapMenuPath(routerArray)

function getKeepAliveList(routers){
	let keepAliveList = new Set()
	routers.forEach(route => {
		if (route.name && route.component && route.meta.keepAlive === true){
			if (keepAliveList.has(route.name)){
				throw new Error(`${route.name}组件命名重复`)
			}else {
				keepAliveList.add(route.name)
			}
		}
		route.children?.forEach(item => item.children && getKeepAliveList(route.children))
	})
	return [...keepAliveList]
}
export const keepAliveList = getKeepAliveList(routerArray)

export const routes:any = [
	{
		path: '',
		component: () => import('@/layout/index.vue'),
		name: 'AppMain',
		redirect: '/home'
	}
]

import {basicRouter} from './basicRouter'
const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes: routes.concat(basicRouter),
	strict: true,
	scrollBehavior: () => ({left: 0,top: 0})
})

routerArray.forEach(route => {
	if (route.meta.fullScreen === true){
		router.addRoute(route)
	}else {
		router.addRoute('AppMain',route)
	}
})

import {userStore} from "@/store/modules/user";
router.beforeEach((to,from) => {
	NProgress.start()
	const user = userStore()
	if(to.path !== '/login'){
		if(!user.profile)return '/login'
	}else{
		if(user.profile)return from.path
	}
})

router.afterEach(() => {
	NProgress.done();
})

export default router

