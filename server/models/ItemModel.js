var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var itemSchema = mongoose.Schema({
  tag: String,
  text: String,
  filepath: String,
  votes: {type: Number, default: 0}
})

module.exports = mongoose.model('Item', itemSchema);