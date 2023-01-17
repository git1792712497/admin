const KoaRouter = require("@koa/router");
const {validateAuth} = require("../middleware/login.js");
const roleRouter = new KoaRouter({prefix: '/role'})
const {create,query,deleteById,assignMenu} = require('../controller/role.js')


roleRouter.post('/create',validateAuth,create)
roleRouter.get('/query',validateAuth,query)
roleRouter.delete('/delete',validateAuth,deleteById)
roleRouter.delete('/assignMenu',validateAuth)

module.exports = roleRouter
