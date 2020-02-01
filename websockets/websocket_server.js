const WebSocket = require("ws");
const wss = new WebSocket.Server({port: 8080});

wss.on(	"connection", function connection(ws, request, client) {
	//console.log(request, typeof request);
	console.log(new Date() + " Connection from origin " + request.headers.origin)
	console.log(typeof client, client);
	ws.on("message", message => {
		console.log(`recieved message: ${message}`)
		ws.send(`echoo: ${message}`);
	});
});