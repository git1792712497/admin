const {save,query,remove,queryChildMenu,updateMenu,queryMenuById,roleAndMenu} = require('../service/menu.js')
const {queryUser} = require('../service/user.js')

class MenuController {
  async create(ctx, next) {
    const menu = ctx.request.body
    const data = await save(menu)
    //超级管理员自动关联所有菜单
    if(ctx.user.userId === 1){
      const [{roleId}] = await queryUser(ctx.user.userId)
      await roleAndMenu(roleId,data.insertId)
    }
    ctx.body = {
      code: 200,
      data,
      message: '创建成功',
    }
  }
  
  
  async update(ctx, next) {
    const menu = ctx.request.body
    const data = await updateMenu(menu)
    ctx.body = {
      code: 200,
      data,
      message: '更新成功',
    }
  }
  
  async query(ctx, next) {
    const data = await query(ctx.request.body?.limit ?? 10000,ctx.request.body?.offset ?? 0)
    ctx.body = {
      code: 200,
      ...data,
      message: '查询成功',
    }
  }

  async queryMenuByRoleId(ctx, next) {
    const {userId} = ctx.user
    const [{roleId}] = await queryUser(userId)
    const data = await queryMenuById(roleId)
    ctx.body = {
      code: 200,
      data,
      message: '查询成功',
    }
  }

  async removeMenu(ctx, next) {
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
