import express from 'express';
import config from "../config/index.js";
import middleware from '../middleware/index.js';
import initalizeDB from "../db.js"
import foodtruck from '../controller/foodtruck.js'

let router = express();
initalizeDB(db => {
	//router.use(middleware({config, db}));
	router.use("/foodtruck", foodtruck({config, db}));
});
export default router;