const {save,query,remove,queryChildMenu} = require('../service/menu.js')

class MenuController {
  async create(ctx, body) {
    const menu = ctx.request.body
    const data = await save(menu)
    ctx.body = {
      code: 200,
      data,
      message: '创建成功',
    }
  }
  async query(ctx, body) {
    const data = await query()
    ctx.body = {
      code: 200,
      data,
      message: '创建成功',
    }
  }
  
  async removeMenu(ctx, body) {
    const {id} = ctx.request.body
    const childMenu = await queryChildMenu(id)
    if (childMenu.length){
      ctx.status = 401
      ctx.body = {
        message: '请先删除子菜单',
      }
      return
    }
    const data = await remove(id)
    ctx.body = {
      code: 200,
      data,
      message: '创建成功',
    }
  }
}


module.exports = new MenuController()
