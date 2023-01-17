const userService = require('../service/user.js')
const jwt = require('jsonwebtoken')
const { privateKey } = require('../config/screct.js')
const fs = require('fs')
const {queryMenuById} = require('../service/menu.js')
class UserController {
  async createUser(ctx, next) {
    // 1.获取用户传递过来信息
    const user = ctx.request.body
    //user保存到数据库中
    const result = await userService.save(user)
    //查看数据库结果,返回前端创建成功
    ctx.body = {
      message: '用户创建成功',
      data: result,
      code: 200,
    }
  }

  //颁发令牌生成token
  async sign(ctx, next) {
    const { username, id,roleId } = ctx.userData
    const token = jwt.sign({ username, userId: id }, privateKey, {
      expiresIn: 24 * 60 * 60 * 365, //过期时间
      algorithm: 'RS256', //非对称加密算法
    })
    const menus = await queryMenuById(roleId)
    ctx.body = {
      code: 200,
      message: '登录成功',
      data: {
        token,
        menus
      },
    }
  }

  //头像上传
  async upload(ctx, next) {
	  const { filename, mimetype, size } = ctx.request.file
	  const { userId } = ctx.user
	  await userService.saveAvatar(filename,mimetype,size,userId)
	  ctx.body = '文件上传成功'
  }
  
  async showAvatar(ctx,next){
    const { userId } = ctx.request.body
    const {filename,mimetype} = await userService.queryUserAvatar(userId)
    ctx.type = mimetype
    ctx.body = fs.createReadStream(`./assets/${filename}`)
  }
  
  async getUserList(ctx,next){
    const data = await userService.queryUserList()
    ctx.body = {
      code:200,
      data,
      message:'查询成功'
    }
  }
  
  async getDeleteUser(ctx,next){
    const { id } = ctx.request.body
    const data = await userService.deleteUser(id)
    ctx.body = {
      code:200,
      data,
      message:'删除成功'
    }
  }
}

module.exports = new UserController()
