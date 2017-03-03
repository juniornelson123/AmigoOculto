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
		}

	})

	schema.plugin(findOrCreate);
	return mongoose.model("Usuario", schema);
}