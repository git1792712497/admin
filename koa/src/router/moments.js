const KoaRouter = require('@koa/router')
const {validateAuth} = require('../middleware/login.js')
const {create,list,detail,update,remove} = require('../controller/moments.js')
const {updatePermission} = require('../middleware/moments.js')
const momentsRouter = new KoaRouter({prefix: '/moments'})

momentsRouter.post('/save',validateAuth,create)
momentsRouter.get('/list',list)
momentsRouter.get('/detail',detail)
momentsRouter.patch('/update',validateAuth,updatePermission,update)
momentsRouter.delete('/remove',validateAuth,updatePermission,remove)


module.exports = momentsRouter
