var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var ConfigurationSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	jump: {
		type: String
	},
	shoot: {
		type: String
	},
	slide: {
		type: String
	}
	run: {
		type: String
	}
});

var Configuration = module.exports = mongoose.model('Configuration', ConfigurationSchema);

module.exports.getConfigByUsername = function(username, callback){
	var query = {username: username};
	Configuration.findOne(query, callback);
}
