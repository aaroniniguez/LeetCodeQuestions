import mongoose from "mongoose"
import FoodTruck from "./foodtruck.js"
let Schema = mongoose.Schema

let ReviewSchema = new Schema({
	title: {
		type: String, 
		required: true
	},
	text: String, 
	foodtruck: {
		type: Schema.Types.ObjectId,
		ref: 'FoodTruck', 
		required: true
	}
});
export default mongoose.model("Review", ReviewSchema);