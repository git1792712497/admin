const KoaRouter = require("@koa/router");
const {validateAuth} = require("../middleware/login.js");
const {create,query,removeMenu,queryMenuByRoleId,update} = require('../controller/menu.js')
const {verifyAddMenu,verifyUpdateMenu} = require('../middleware/menu.js')

const menuRouter = new KoaRouter({prefix: '/menu'})

menuRouter.post('/create',validateAuth,verifyAddMenu,create)
menuRouter.post('/query',query)
menuRouter.get('/userMenuList',validateAuth,queryMenuByRoleId)
menuRouter.delete('/delete',validateAuth,removeMenu)
menuRouter.patch('/update',validateAuth,verifyUpdateMenu,update)

module.exports = menuRouter
