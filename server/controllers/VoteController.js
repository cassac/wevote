var Item = require('../models/ItemModel.js');
var Vote = require('../models/VoteModel.js');

var sequelize = require('../db/database.js');
var util = require('../util/helpers.js');

module.exports = {
  votes: {
    post: ((req, res) => {
      console.log('post request vote controller')
    })
  }
}