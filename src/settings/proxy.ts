export const proxy = {
	'/api': {
		target: 'https://7cguo.gaoyuanyunguo.com',  //你要跨域访问的网址
		changeOrigin: true,   // 允许跨域
	},
	'/jsonServer': {
		target: 'http://localhost:3004',  //你要跨域访问的网址
		changeOrigin: true,   // 允许跨域
	}
}