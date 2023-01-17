const KoaRouter = require('@koa/router')
const multer = require('@koa/multer')

const {createUser,sign,upload,showAvatar,getUserList,getDeleteUser} = require('../controller/user.js')
const {validateFields,handlePassword} = require('../middleware/register.js')
const {validateUser,validateAuth} = require('../middleware/login.js')

const uploadAvatar = multer({
	dest:'./assets' //和启动目录有关
})

const userRouter = new KoaRouter({prefix: '/user'})

//中间件拦截http请求,中间件其实就是个函数
userRouter.post('/register',validateFields,handlePassword,createUser)
userRouter.post('/login',validateUser,sign)
userRouter.post('/avatar',validateAuth,uploadAvatar.single('avatar'),upload)
userRouter.get('/showAvatar',showAvatar)
userRouter.get('/list',getUserList)
userRouter.delete('/delete',getDeleteUser)

module.exports = userRouter
