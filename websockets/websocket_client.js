const WebSocket = require("ws");
const EventEmitter = require("events");
const ws = new WebSocket('wss://data-gen.test.ecogate.com');
console.log(EventEmitter.prototype.isPrototypeOf(ws))
let tokenVal = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWVkIjoibWFyZWsiLCJpYXQiOjE1Nzk3MjY5MDQsImV4cCI6MTU3OTgxMzMwNCwiaXNzIjoiZWNvZ2F0ZSIsInN1YiI6InN3LWVuZyJ9.l33x_ZGjjVHcLde6BxS6r0bqsc4k13tLwNboILaca98"; 
let token = {"token": tokenVal};

//consumes power

//has a saving value  (max power - actual power)

//system has several workstations
	//active or inactive
	//each workstation has a airVelocity value
	//diameter value
	//air velocity and diameter you get airvolume
ws.on('open', function open() {
  	ws.send('another thing');
	ws.close();
});
 
//ws.on('message', function incoming(data) {
  //console.log(data);
  //console.log("oh soo cool")
//});