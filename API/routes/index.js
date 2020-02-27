import express from 'express';
import config from "../config/index.js";
import middleware from '../middleware/index.js';
import initalizeDB from "../db.js"
import restuarant from '../controller/restaurant.js'

let router = express();
initalizeDB(db => {
	//router.use(middleware({config, db}));
	router.use("/restaurant", restuarant({config, db}));
});
export default router;