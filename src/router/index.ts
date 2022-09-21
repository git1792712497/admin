import {createRouter,createWebHistory,RouteRecordRaw} from "vue-router";

const metaRouters = import.meta.globEager("./modules/*.ts");

export const routerArray: RouteRecordRaw[] = [];
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach(key => {
		routerArray.push(...metaRouters[item][key]);
	});
});


function mapMenuPath(routes){
	routes.forEach(route => {
		route.children?.forEach(item => {
			item.path = `${route.path}/${item.path}`
			item.children && mapMenuPath(route.children)
		})
	})
}
mapMenuPath(routerArray)

export const routes:any = [
	{
		path: '',
		component: () => import('@/layout/index.vue'),
		name: 'AppMain',
		redirect: '/home'
	}
]

import {basicRouter} from './basicRouter'
export const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes: routes.concat(basicRouter),
	strict: true,
	scrollBehavior: () => ({left: 0,top: 0})
})

routerArray.forEach(route => router.addRoute('AppMain',route))

import {userStore} from "@/store/modules/user";
router.beforeEach((to,from) => {
	const user = userStore()
	if(to.path !== '/login'){
		if(!user.profile)return '/login'
	}else{
		if(user.profile)return from.path
	}
})
