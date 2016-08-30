var Sequelize = require('sequelize');
var sequelize = require('../db/database.js');

var Vote = sequelize.define('vote', {
  from: {
    type: Sequelize.STRING
  },
  body: {
    type: Sequelize.STRING
  },
  tag: {
    type: Sequelize.STRING
  }
});

module.exports = Vote;
