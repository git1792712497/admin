const KoaRouter = require('@koa/router')
const {validateAuth} = require('../middleware/login.js')
const momentsRouter = new KoaRouter({prefix: '/comment'})
const {createComment,replyComment} = require('../controller/comment.js')

momentsRouter.post('/save',validateAuth,createComment)
momentsRouter.post('/reply',validateAuth,replyComment)


module.exports = momentsRouter
