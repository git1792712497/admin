const {save,query} = require('../service/menu.js')

class MenuController {
	async create(ctx,body){
		const menu = ctx.request.body
		const data = await save(menu)
		ctx.body = {
			code:200,
			data,
			message:'创建成功'
		}
	}
	async query(ctx,body){
		const data = await query()
		ctx.body = {
			code:200,
			data,
			message:'创建成功'
		}
	}
	
}


module.exports = new MenuController()
