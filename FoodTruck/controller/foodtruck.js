
import express from 'express';
import mongoose from 'mongoose'
import Foodtruck from "../model/foodtruck.js"
import review from '../model/review.js';

export default ({config, db}) => {
	let api = express.Router();

	api.post("/add", (req, res)=> {
		let newFoodTruck = new Foodtruck();
		newFoodTruck.name = req.body.name;
		newFoodTruck.foodtype = req.body.foodtype;
		newFoodTruck.avgcost = req.body.avgcost;
		newFoodTruck.geometry.coordinates = req.body.geometry.coordinates;
		newFoodTruck.save(err => {
			if(err) {
				res.send(err)
			} else {
				res.json({message: "Foodtruck saved successfully!"})
			}
		})
	});

	//get all itemes
	api.get("/", (req, res) => {
		Foodtruck.find({}, (err, foodtrucks)=> {
			if(err) {
				res.send(err);
			} else {
				res.json(foodtrucks);
			}
		});
	});

	//get a single item
	api.get("/:id", (req, res) => {
		Foodtruck.findById(req.params.id, (err, foodtruck) => {
			if(err) {
				res.send(err)
			} else {
				res.json(foodtruck);
			}
		});
	})

	//update item
	api.put("/:id", (req, res) => {
		Foodtruck.findById(req.params.id, (err, foodtruck) => {
			if(err) {
				res.send(err)
			} else {
				foodtruck.name = req.body.name;
				foodtruck.save(err => {
					if(err) {
						res.send(err);
					} else {
						res.json({"message": "Foodtruck info updated!"})
					}
				})
			}
		})
	});

	api.delete("/:id", (req, res) => {
		Foodtruck.remove({
			_id: req.params.id
		}, (err, foodtruck) => {
			if(err) {
				res.send(err)
			} else {
				res.json({"message": "foodtruck successfully removed!"});
			}
		})
	})

	api.post("/reviews/add/:id", (req, res) => {
		Foodtruck.findById(req.params.id, (err, foodtruck) => {
			if(err) {
				return res.send(err);
			}
			let newReview = new review();
			newReview.title = req.body.title;
			newReview.text = req.body.text;
			newReview.foodtruck = foodtruck._id;
			newReview.save((err, review) => {
				if(err) {
					return res.send(err)
				}
				foodtruck.reviews.push(newReview);
				foodtruck.save((err) => {
					if(err) {
						return res.send(err)
					} 
					res.json({message: "food truck review saved"})
				})
			})
		});
	})
	return api;
}