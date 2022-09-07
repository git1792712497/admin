import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import {basicRouter} from './basicRouter'

const metaRouters = import.meta.globEager("./modules/*.ts");

export const routerArray: RouteRecordRaw[] = [];
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach((key: any) => {
		routerArray.push(...metaRouters[item][key]);
	});
});

export const routes:RouteRecordRaw[]= [
	{
		path: '',
		component: () => import('@/layout/index.vue'),
		name: 'main',
		redirect:'/home'
	}
]

export const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes: routes.concat(basicRouter),
	strict: false,
	// 切换页面，滚动到最顶部
	scrollBehavior: () => ({ left: 0, top: 0 })
})
routerArray.forEach(route => router.addRoute('main',route))



