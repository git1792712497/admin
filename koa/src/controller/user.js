const userService = require('../service/user.js')

class UserController {
	constructor() {
	
	}
	
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
	
}


module.exports = new UserController()
