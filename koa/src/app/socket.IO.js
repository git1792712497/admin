
function socket(socket){

	// 从客户端接收消息
	socket.on("hello", (args) => {
		// 向客户端发送消息
		socket.emit("hello from server",`这是来自服务端的推送消息${args}`);
	});
}

module.exports = {
	socket
}

