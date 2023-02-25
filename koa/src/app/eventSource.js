const url = require("url");
function eventSource(request, response) {
	const parsedURL = url.parse(request.url, true);
	let pathname = parsedURL.pathname;
	if (pathname === "/EventSource") {
		response.writeHead(200, {
			"Content-Type": "text/event-stream",
			"Cache-Control": "no-store",
			"Access-Control-Allow-Origin": "*"
		});
		
		setInterval(() => {
			response.write("data:" + Math.random() * 10 + "\n\n");
		},1000)
		
		response.on("close", function () {
		});
	}
}

module.exports = {
	eventSource
}
