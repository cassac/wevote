var Sequelize = require('sequelize');
var sequelize = require('../db/database.js');

var Item = sequelize.define('item', {
  tag: {
    type: Sequelize.STRING
  },
  text: {
    type: Sequelize.STRING
  },
  filepath: {
    type: Sequelize.STRING
  },
  votes: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

Item.sync();

module.exports = Item;