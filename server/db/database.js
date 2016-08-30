var Sequelize = require('sequelize');

var sequelize = new Sequelize('wevote', 'root', 'root', {
  host: 'localhost',
  // dialect: 'mysql',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // sqlite only
  storage: 'db.sqlite'

});

module.exports = sequelize;