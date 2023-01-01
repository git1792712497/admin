const {save,reply} = require('../service/comment.js')

class CommentController {
	async createComment(ctx,next){
		const { userId } = ctx.user
		const {content,momentId} = ctx.request.body
		const data = await save({content,momentId,userId})
		
		ctx.body = {
			code:200,
			message:'评论成功',
			data
		}
	}
	
	async replyComment(ctx,next){
		const { userId } = ctx.user
		const {content,momentId,commentId} = ctx.request.body
		const data = await reply({userId,content,momentId,commentId})
		
		ctx.body = {
			code: 200,
			message: '回复评论成功',
			data
		}
	}
}

module.exports = new CommentController()
