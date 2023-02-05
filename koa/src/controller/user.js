const userService = require('../service/user.js')
const jwt = require('jsonwebtoken')
const { privateKey } = require('../config/screct.js')
const fs = require('fs')
const cos = require('../app/cos.js')

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
    ctx.body = {
      message: '登录成功',
      data: {
        token,
        username,
        roleId
      },
    }
  }

  //头像上传
  async upload(ctx, next) {
	  const { filename, size } = ctx.request.file
	  const { userId } = ctx.user
    const params = {
      Bucket: 'cos-1304585490',
      Region: 'ap-nanjing',
      Key: filename,
      FilePath: `./assets/${filename}`,
      SliceSize: 1024 * 1024 * 5
    }
    // 这里省略初始化过程和上传参数
    const data = await cos.uploadFile(params)
    const url = `https://${data.Location}`
    await userService.saveAvatar(filename,url,size,userId)
    ctx.body = {
      url,
      message:'上传成功'
    }
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
    if(id === 1){
      ctx.status = 400
      ctx.body = {
        message:'默认用户不能被删除'
      }
    }else {
      const data = await userService.deleteUser(id)
      ctx.body = {
        code:200,
        data,
        message:'删除成功'
      }
    }
  }
}

module.exports = new UserController()
