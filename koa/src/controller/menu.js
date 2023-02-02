const {save,query,remove,queryChildMenu,queryMenuById,queryMenuByName} = require('../service/menu.js')
const {queryUser} = require('../service/user.js')

class MenuController {
  async create(ctx, next) {
    const menu = ctx.request.body
    const name = await queryMenuByName(menu.name,menu.path)
    if (menu.type !== 1 && name.length){
      ctx.status = 400
      ctx.body = {
        message: '菜单编号或路由不能重复',
      }
      return
    }
    
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

  async queryMenuByRoleId(ctx, body) {
    const {userId} = ctx.user
    const [{roleId}] = await queryUser(userId)
    const data = await queryMenuById(roleId)
    ctx.body = {
      code: 200,
      data,
      message: '查询成功',
    }
  }

  async removeMenu(ctx, body) {
    const { id } = ctx.request.body
    const childMenu = await queryChildMenu(id)
    if (childMenu.length) {
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
