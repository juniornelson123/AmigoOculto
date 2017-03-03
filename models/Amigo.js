var mongoose = require("mongoose")
var findOrCreate = require("mongoose-findorcreate")
module.exports = function(){
	var schema = mongoose.Schema({
		nome:{
			type: String,
			required: true
		},

		email:{
			type: String,
			required: true,
			index:{
				unique: true
			}
		},

		usuario:{
			type: mongoose.Schema.ObjectId,
			ref: "Usuario"
		}

	})

	schema.plugin(findOrCreate);
	return mongoose.model("Amigo", schema);
}