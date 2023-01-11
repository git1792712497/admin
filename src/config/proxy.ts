export const proxy = {
	'/api': {
		target: 'http://39.130.133.24:32622/api',  //你要跨域访问的网址
		changeOrigin: true,   // 允许跨域
		ws: true,
		rewrite: path => path.replace(/^\/api/, '')
	},
	'/jsonServer': {
		target: 'http://localhost:3004',  //你要跨域访问的网址
		changeOrigin: true,   // 允许跨域
	},
	'/koa': {
		target: 'http://localhost:8000',  //你要跨域访问的网址
		changeOrigin: true,   // 允许跨域
	}
}

