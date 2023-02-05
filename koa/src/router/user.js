const KoaRouter = require('@koa/router')
const multer = require('@koa/multer')

const {createUser,sign,upload,showAvatar,getUserList,getDeleteUser} = require('../controller/user.js')
const {validateFields,handlePassword} = require('../middleware/register.js')
const {validateUser,validateAuth} = require('../middleware/login.js')

const uploadAvatar = multer({
	storage: multer.diskStorage({
		destination(req, file, cb) {
			cb(null, './assets')
		},
		filename(req, file, cb) {
			cb(null, Date.now() + "_" + file.originalname)
		}
	})
})

const userRouter = new KoaRouter({prefix: '/user'})

//中间件拦截http请求,中间件其实就是个函数
userRouter.post('/register',validateFields,handlePassword,createUser)
userRouter.post('/login',validateUser,sign)
userRouter.post('/avatar',validateAuth,uploadAvatar.single('file'),upload)
userRouter.get('/showAvatar',showAvatar)
userRouter.get('/list',getUserList)
userRouter.delete('/delete',getDeleteUser)

module.exports = userRouter
