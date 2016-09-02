var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
  tag: String,
  text: String,
  filepath: String,
  votes: {type: Integer, default: 0}
})

module.exports = mongoose.model('Item', itemSchema);