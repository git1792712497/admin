export const errorRouter = [
	{
		path: "/403",
		name: "403",
		component: () => import("@/views/ErrorPage/403.vue"),
		meta: {
			title: "403页面",
			key: "403"
		}
	},
	{
		path: "/404",
		name: "404",
		component: () => import("@/views/ErrorPage/404.vue"),
		meta: {
			title: "404页面",
			key: "404"
		}
	},
	{
		path: "/500",
		name: "500",
		component: () => import("@/views/ErrorPage/500.vue"),
		meta: {
			title: "500页面",
			key: "500"
		}
	}
]
