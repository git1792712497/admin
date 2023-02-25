const app = require('./app/index.js')

app.listen(8000,() => {
	console.log('koa服务器启动成功')
})


const http = require("http");
const {eventSource} = require('./app/eventSource.js')
http.createServer(eventSource).listen(8081);


