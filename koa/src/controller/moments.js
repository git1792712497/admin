const {save,queryList,queryById,updateById,removeById} = require('../service/moments.js')

class MomentsController {
  async create(ctx, next) {
    const { content } = ctx.request.body
    const { userId } = ctx.user
    const data = await save({ content, userId })
    ctx.body = {
      code: 200,
      message: '发布成功',
      data,
    }
  }
  async list(ctx, next) {
    const data = await queryList()
    ctx.body = {
      code: 200,
      message: '查询成功',
      data,
    }
  }
  async detail(ctx, next) {
    let params = ctx.request.query
    const data = await queryById(params.momentId)
    console.log(data)
    ctx.body = {
      code: 200,
      data,
    }
  }
  async update(ctx, next) {
    let { momentId,content } = ctx.request.query
    const data = await updateById(momentId,content)
    ctx.body = {
      code: 200,
      data,
    }
  }
  async remove(ctx, next) {
    let { momentId } = ctx.request.query
    const data = await removeById(momentId)
    ctx.body = {
      code: 200,
      data,
    }
  }
}


module.exports = new MomentsController()
