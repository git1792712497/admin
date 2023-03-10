const Koa = require('koa')
const bodyParse = require('koa-bodyparser')
const registerRouters = require('../router/index.js')
const cors = require('@koa/cors');


const koaStatic = require('koa-static')

const app = new Koa()
//解析body数据
app.use(bodyParse())
app.use(cors());
registerRouters(app) //注册所有路由
app.use(koaStatic('../../assets'))
app.use(koaStatic('../../dist'))




module.exports = app
