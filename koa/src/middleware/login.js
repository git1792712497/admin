const userService = require('../service/user.js')
const md5password = require('../utils/md5password.js')


const validateUser = async (ctx,next) => {
	//获取http传过来的信息
	const user = ctx.request.body
	if (!user.username || !user.password){
		ctx.status = 400
		ctx.body = {
			message:'用户名或密码不能为空!',
		}
		return
	}
	//判断name是否已经存在数据库中
	const [data] = await userService.findUserName(user.username)
	if (!data){
		ctx.status = 400
		ctx.body = {
			message:'用户名不存在',
		}
		return
	}
	
	if (data.password != user.password){
		ctx.status = 400
		ctx.body = {
			message:'密码不正确',
		}
		return
	}
	
	//用户信息传到下一个中间件
	ctx.userData = data
	
	//执行下一个中间间
	await next()
}


const jwt = require('jsonwebtoken')
const {publicKey} = require('../config/screct.js')
const validateAuth = async (ctx,next) => {
  // 1.获取token
  const authorization = ctx.headers.authorization
	
  if (!authorization) {
    ctx.body = {
      code: 401,
      message: '无效的token或者token已经过期',
    }
    return
  }

  const token = authorization.replace('Bearer ', '')
  //验证token是否是有效
  try {
    //将token的信息保留下来
	  ctx.user = jwt.verify(token, publicKey, {
		  algorithms: ['RS256'],
	  })
	  
    //执行下一个中间件
    await next()
  } catch (error) {
    ctx.body = {
      code: 500,
      message: error,
    }
  }
}


module.exports = {
	validateUser,
	validateAuth
}
