
function socket(socket){
	console.log('socket连接成功')
	// 从客户端接收消息
	socket.on("hello", (args) => {
		// 向客户端广播消息
		socket.broadcast.emit("hello from server",`这是来自服务端的推送消息${args}`);
	});
}

module.exports = {
	socket
}

