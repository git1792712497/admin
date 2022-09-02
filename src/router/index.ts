import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const metaRouters = import.meta.globEager("./modules/*.ts");
const LAYOUT = () => import('@/layout/index.vue')
export const routerArray: RouteRecordRaw[] = [];
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach((key: any) => {
		routerArray.push(...metaRouters[item][key]);
	});
});

const routes:RouteRecordRaw[] = [
	{
		path:'',
		component: LAYOUT,
		name:'main',
		children:[
			{path:'user',component:() => import('@/views/user/index.vue')}
		]
	},
	{
    path:'/home',
		component: LAYOUT,
		name:'home',
		children:[
			{path:'index',component:() => import('@/views/home/index.vue')}
		]
  },
	{
    path:'/login',
		name:'login',
    component: () => import('@/views/login/index.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
	strict: false,
	// 切换页面，滚动到最顶部
	scrollBehavior: () => ({ left: 0, top: 0 })
})

routerArray.forEach(route => router.addRoute(route))



