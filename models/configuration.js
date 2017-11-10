var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var findOrCreate = require('mongoose-find-or-create')

// User Schema
var ConfigurationSchema = mongoose.Schema({
	username: {
		type: String,
		index:true,
		unique: true
	},
	jump: {
		type: String
	},
	shoot: {
		type: String
	},
	slide: {
		type: String
	},
	run: {
		type: String
	}
});

ConfigurationSchema.plugin(findOrCreate)
var Configuration = module.exports = mongoose.model('Configuration', ConfigurationSchema);

module.exports.getConfigByUsername = function(username, callback){
	var query = {username: username};
	Configuration.findOne(query, callback);
}
