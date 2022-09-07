export const basicRouter = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/index.vue'),
		meta: {
			title: "登录",
		}
	},
	{
		path: "/403",
		name: "403",
		component: () => import("@/views/ErrorPage/403.vue"),
		meta: {
			title: "403页面",
		}
	},
	{
		path: "/404",
		name: "404",
		component: () => import("@/views/ErrorPage/404.vue"),
		meta: {
			title: "404页面"
		}
	},
	{
		path: "/500",
		name: "500",
		component: () => import("@/views/ErrorPage/500.vue"),
		meta: {
			title: "500页面",
		}
	},
	
]
