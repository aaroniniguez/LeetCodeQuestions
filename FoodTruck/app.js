import http from 'http';
import express from 'express'
import bodyParser from  'body-parser';
import config from './config/index.js'
import routes from './routes/index.js';

let app = express();
app.server = http.createServer(app);
app.use(bodyParser.json({
	limit: config.bodyLimit
}));

app.get("/", (req, res, next) => {
	res.send("hi");
});


app.use("/v1", routes);
app.server.listen(config.port);
console.log("started listening on port http://localhost:" + app.server.address().port)
export default app