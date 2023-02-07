const {save,query,deleteById,saveMenu} = require('../service/role.js')
const {queryUserByRoleId} = require('../service/user.js')

class RoleController {
  async create(ctx, next) {
    const role = ctx.request.body
    const data = await save(role)
    await saveMenu({roleId: data.insertId, menuIds: role.menuId})
    ctx.body = {
      code: 200,
      message: '角色创建成功',
      data,
    }
  }

  async deleteById(ctx, next) {
    const { id } = ctx.request.body
    if(id === 1) {
      ctx.status = 400
      ctx.body = {
        message: '超级管理员不能被删除'
      }
    }else {
      const user = await queryUserByRoleId(id)
      if (user.length){
        ctx.status = 400
        ctx.body = {
          message: '无法删除已关联用户的角色',
        }
      }else {
        const data = await deleteById(id)
        ctx.body = {
          code: 200,
          message: '删除成功',
          data,
        }
      }
    }
  }

  async query(ctx, next) {
    const data = await query()
    ctx.body = {
      code: 200,
      message: '查询成功',
      data,
    }
  }
}



module.exports = new RoleController()
