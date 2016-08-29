var Item = require('../models');
var fs = require('fs');
var multiparty = require('multiparty');
var sequelize = require('../db/database.js');


module.exports = {
  items: {
    get: function(req, res) {
      Item.findAll()
        .then(function(results) {
          res.json({results: results});
        })
        .catch(function(err) {
          res.json({results: err});
        })
    },
    post: function(req, res) {
      Item.create({
        tag: 'tag',
        text: 'text',
        filepath: 'filepath'
      })
      .then(function(results) {
        res.json({results: results})
      })
      .catch(function(err) {
        res.json({results: err})
      })
    }
  }
}