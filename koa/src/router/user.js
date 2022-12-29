const KoaRouter = require('@koa/router')
const controller = require('../controller/user.js')
const {validateFields,handlePassword} = require('../middleware/user.js')

const router = new KoaRouter({prefix: '/user'})

//中间件拦截http请求,中间件其实就是个函数
router.post('/createUser',validateFields,handlePassword,controller.createUser)


module.exports = router
