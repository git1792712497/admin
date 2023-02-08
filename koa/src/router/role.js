const KoaRouter = require("@koa/router");
const {validateAuth} = require("../middleware/login.js");
const {create,query,deleteById,update} = require('../controller/role.js')


const roleRouter = new KoaRouter({prefix: '/role'})

roleRouter.post('/create',validateAuth,create)
roleRouter.get('/query',validateAuth,query)
roleRouter.delete('/delete',validateAuth,deleteById)
roleRouter.delete('/assignMenu',validateAuth)
roleRouter.patch('/update',validateAuth,update)

module.exports = roleRouter
