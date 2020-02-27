
import express from 'express';
import mongoose from 'mongoose'
import Restaurant from "../model/restaurant.js"
import restaurant from '../model/restaurant.js';

export default ({config, db}) => {
	let api = express.Router();

	api.post("/add", (req, res)=> {
		let newRest = new Restaurant();
		newRest.name = "aaron";
		newRest.save(err => {
			if(err) {
				res.send("hmmm")
			} else {
				res.json({message: "Restaurant saved successfully!"})
			}
		})
	});

	//get all itemes
	api.get("/", (req, res) => {
		Restaurant.find({}, (err, restaurants)=> {
			if(err) {
				res.send(err);
			} else {
				res.json(restaurants);
			}
		});
	});

	//get a single item
	api.get("/:id", (req, res) => {
		Restaurant.findById(req.params.id, (err, restaurant) => {
			if(err) {
				res.send(err)
			} else {
				res.json(restaurant);
			}
		});
	})

	//update item
	api.put("/:id", (req, res) => {
		Restaurant.findById(req.params.id, (err, restaurant) => {
			if(err) {
				res.send(err)
			} else {
				restaurant.name = req.body.name;
				restaurant.save(err => {
					if(err) {
						res.send(err);
					} else {
						res.json({"message": "Restaurant info updated!"})
					}
				})
			}
		})
	});

	api.delete("/:id", (req, res) => {
		Restaurant.remove({
			_id: req.params.id
		}, (err, restaurant) => {
			if(err) {
				res.send(err)
			} else {
				res.json({"message": "restuarant successfully removed!"});
			}
		})
	})
	return api;
}