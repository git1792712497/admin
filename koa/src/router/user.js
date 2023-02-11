const KoaRouter = require('@koa/router')

const {createUser,sign,upload,showAvatar,getUserList,getDeleteUser,updateUser} = require('../controller/user.js')
const {validateFields,handlePassword} = require('../middleware/register.js')
const {validateUser,validateAuth} = require('../middleware/login.js')
const {uploadAvatar} = require('../middleware/uploadAvatar.js')

const userRouter = new KoaRouter({prefix: '/user'})

//中间件拦截http请求,中间件其实就是个函数
userRouter.post('/register',validateFields,handlePassword,createUser)
userRouter.post('/login',validateUser,sign)
userRouter.post('/upload',validateAuth,uploadAvatar.single('file'),upload)
userRouter.get('/showAvatar',showAvatar)
userRouter.get('/list',getUserList)
userRouter.delete('/delete',validateAuth,getDeleteUser)
userRouter.patch('/update',validateAuth,updateUser)

module.exports = userRouter
