var mongoose = require("mongoose")
module.exports = function(app){
	var schema = mongoose.Schema({
		name:{
			type: String,
			required: true
		}
	})

	mongoose.model("Amigo", schema)
}