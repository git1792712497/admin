const KoaRouter = require('@koa/router')
const {createUser,sign} = require('../controller/user.js')
const {validateFields,handlePassword} = require('../middleware/register.js')
const {validateUser} = require('../middleware/login.js')

const userRouter = new KoaRouter({prefix: '/user'})

//中间件拦截http请求,中间件其实就是个函数
userRouter.post('/register',validateFields,handlePassword,createUser)

userRouter.post('/login',validateUser,sign)


module.exports = userRouter
