export const proxy = {
	'/api': {
		target: 'http://39.130.133.24:32623/api',  //你要跨域访问的网址
		changeOrigin: true,   // 允许跨域
		rewrite: (path) => path.replace(/^\/api/, '') // 重写路径把路径变成空字符
	},
	
	'/bilibili': {
		target: 'https://api.bilibili.com',  //你要跨域访问的网址
		changeOrigin: true,   // 允许跨域
		rewrite: (path) => path.replace(/^\/api/, '') // 重写路径把路径变成空字符
	}
}