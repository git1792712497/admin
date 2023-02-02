const KoaRouter = require("@koa/router");
const {validateAuth} = require("../middleware/login.js");
const {create,query,removeMenu,queryMenuByRoleId} = require('../controller/menu.js')

const menuRouter = new KoaRouter({prefix: '/menu'})

menuRouter.post('/create',validateAuth,create)
menuRouter.get('/query',query)
menuRouter.get('/userMenuList',validateAuth,queryMenuByRoleId)
menuRouter.delete('/delete',validateAuth,removeMenu)

module.exports = menuRouter
