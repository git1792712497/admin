const userService = require('../service/user.js')
const jwt = require('jsonwebtoken')
const {privateKey} = require('../config/screct.js')

class UserController {
	async createUser(ctx,next){
		// 1.获取用户传递过来信息
		const user = ctx.request.body
		
		//user保存到数据库中
		const result = await userService.save(user)
		//查看数据库结果,返回前端创建成功
		ctx.body = {
			message:'用户创建成功',
			data:result,
			code:200
		}
	}
	
	//颁发令牌生成token
	async sign(ctx,next){
		const {name,password,id} = ctx.userData
		const token = jwt.sign({ password, name,userId:id}, privateKey, {
			expiresIn: 24 * 60 * 60 * 365,//过期时间
			algorithm: 'RS256'//非对称加密算法
		})
		
		ctx.body = {
			code:200,
			message: '登录成功',
			data:{
				token
			}
		}
	}
}


module.exports = new UserController()
