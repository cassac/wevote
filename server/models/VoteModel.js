var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var voteSchema = mongoose.Schema({
  FromCountry: String,
  FromZip: String,
  FromState: String,
  FromCity: String,
  Body: String,
  From: String
})

module.exports = mongoose.model('Vote', voteSchema);
