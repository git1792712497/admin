const Koa = require('koa')
const router = require('../router/user.js')
const bodyParse = require('koa-bodyparser')

const app = new Koa()

app.use(bodyParse())
app.use(router.routes())
app.use(router.allowedMethods())

app.use((ctx,next) => {
	ctx.body = 'koa'
})

module.exports = app
