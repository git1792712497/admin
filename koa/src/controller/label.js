const {save,query,relevancy,hasRelevancy} = require('../service/lable.js')

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
	//给动态关联label,线检查是否已经关联了
	async relevancyLabel(ctx,next){
		const labels = ctx.labels
		const {momentId} = ctx.request.body
		for (let label of labels) {
			const isHas = await hasRelevancy(momentId,label.id)
			if(isHas)continue
			await relevancy(momentId,label.id)
		}
		ctx.body = {
			code:200,
			message:'关联成功'
		}
	}
}

module.exports = new LabelController()
