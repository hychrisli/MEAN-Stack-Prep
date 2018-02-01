/**
 * 
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// blue print
var schema = new Schema({
	content:{type: String, required},
	user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Message', schema);
