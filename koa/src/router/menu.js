const KoaRouter = require("@koa/router");
const {validateAuth} = require("../middleware/login.js");
const {create,query} = require('../controller/menu.js')

const menuRouter = new KoaRouter({prefix: '/menu'})

menuRouter.post('/create',validateAuth,create)
menuRouter.get('/query',query)
menuRouter.post('/delete',validateAuth)

module.exports = menuRouter
