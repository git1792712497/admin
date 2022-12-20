export const proxy = {
	'/api': {
		target: 'http://yzy.sirenruanjian.com/kyhl-weixin-1.0/usercard/findAllUserCardByOpenid.do',  //你要跨域访问的网址
		changeOrigin: true,   // 允许跨域
	},
	'/jsonServer': {
		target: 'http://localhost:3004',  //你要跨域访问的网址
		changeOrigin: true,   // 允许跨域
	}
}

