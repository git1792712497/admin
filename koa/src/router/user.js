const KoaRouter = require('@koa/router')
const router = new KoaRouter({prefix: '/user'})

//定义路由映射
router.get('/list',(ctx,next) => {
	ctx.body = '访问成功'
})


module.exports = {
	router
}
