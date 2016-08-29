var models = require('../models');

module.exports = {
  items: {
    get: function(req, res) {
      console.log('items get');
      res.json('ok from items get');
    },
    post: function(req, res) {
      console.log('items post');
      res.json('ok from items post');
    }
  }
}