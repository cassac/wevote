var Item = require('../models/ItemModel.js');
var Vote = require('../models/VoteModel.js');

var sequelize = require('../db/database.js');
var util = require('../util/helpers.js');
var xml = require('xml');

module.exports = {
  restart: {
    get: ((req, res) => {
      Item.sync({force:true})
      .then((success) => {
        Vote.sync({force:true})
        .then((success) => {
          console.log("Let's get voting!")
          res.redirect('/')
        })
      })
      .catch((err) => {
        console.log("Oops. Error restarting.")
        res.redirect('/')
      })
    })
  }
}