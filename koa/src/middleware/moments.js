const {queryById} = require('../service/moments.js')

//修改时,判断数据库中是否有值,并且修改的用户等于发表动态的用户
const updatePermission = async (ctx,next) => {
	const {userId} = ctx.user
	const {momentId} = ctx.request.query
	const [result] = await queryById(momentId)
	if (result && result.user.id === userId){
		await next()
	}else {
		ctx.body = {
			code:400,
			message:'操作失败'
		}
	}
}


module.exports = {
	updatePermission
}
