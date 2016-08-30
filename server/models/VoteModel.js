var Sequelize = require('sequelize');
var sequelize = require('../db/database.js');

var Vote = sequelize.define('vote', {
  FromCountry: {
    type: Sequelize.STRING
  },
  FromZip: {
    type: Sequelize.STRING
  },
  FromState: {
    type: Sequelize.STRING
  },
  FromCity: {
    type: Sequelize.STRING
  },
  Body: {
    type: Sequelize.STRING
  },
  From: {
    type: Sequelize.STRING
  }
});

Vote.sync();

module.exports = Vote;
