export const proxy = {
	'/api': {
		target: 'http://39.130.133.24:32623/api',  //你要跨域访问的网址
		changeOrigin: true,   // 允许跨域
	},
	'/jsonServer': {
		target: 'http://localhost:3004',  //你要跨域访问的网址
		changeOrigin: true,   // 允许跨域
	}
}

