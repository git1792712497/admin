const userService = require("../service/user.js");

const validateFields = async (ctx,next) => {
	//获取http传过来的信息
	const user = ctx.request.body
	if (!user.username || !user.password){
		ctx.body = {
			message:'用户名或密码不能为空!',
			code:400
		}
		return
	}
	//判断name是否已经存在数据库中
	const data = await userService.findUserName(user.username)
	
	if (data.length){
		ctx.body = {
			message:'用户名已存在',
			code:400
		}
		return
	}
	//执行下一个中间间
	await next()
}

const md5password = require('../utils/md5password.js')
const handlePassword = async (ctx, next) => {
	// 1.取出密码
	const { password } = ctx.request.body

	// 2.对密码进行加密
	ctx.request.body.password = password
	
	// 3.执行下一个中间件
	await next()
}

module.exports = {
	validateFields,
	handlePassword
}
