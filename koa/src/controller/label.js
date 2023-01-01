const {save,query} = require('../service/lable.js')

class LabelController {
	async createLabel(ctx,next){
		const {name} = ctx.request.body
		const data = await save(name)
		ctx.body = {
			code:200,
			message:'新增标签成功',
			data
		}
	}
	
	async queryLabelByName(ctx,next){
		const {name} = ctx.request.body
		const data = await query(name)
		ctx.body = {
			code:200,
			data
		}
	}
}

module.exports = new LabelController()
