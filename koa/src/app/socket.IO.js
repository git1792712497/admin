
function socket(socket){
	console.log('socket连接成功',socket.id)
	// 从客户端接收消息
	socket.on("message", (args) => {
		// 全局广播就是所有连接到服务器的客户端都会受到广播的信息
		socket.broadcast.emit("server",args);
	});
}

module.exports = {
	socket
}

