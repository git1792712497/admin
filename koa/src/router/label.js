const {verifyLabel} = require('../middleware/label.js')
const {validateAuth} = require("../middleware/login.js");
const {createLabel} = require('../controller/label.js')
const KoaRouter = require("@koa/router");


const labelRouter = new KoaRouter({prefix: '/label'})

//新增标签
labelRouter.post('/addLabel',validateAuth,createLabel)
//给动态关联标签
labelRouter.post('/momentLabel',validateAuth,verifyLabel)

//

module.exports = labelRouter
