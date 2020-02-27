import mongoose from 'mongoose';
import config from './config/index.js';
//let db = mongoose.connect(config.mongoURL);
//mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
//mongoose.connection.once('open', function() {
	//console.log("\nsuccessfully connected\n")
  //});
//let restaurantSchema = new mongoose.Schema({
	//name: String
//});
//let collection = mongoose.model("Restaurant", restaurantSchema);
//let document = new collection({"name": "testng"});
//document.save(function(err) {
	//if(err)
		//console.log("hmm no")
	//else
		//console.log("yes");
//})

export default callback => {
	let db = mongoose.connect(config.mongoURL);
	callback(db);
}