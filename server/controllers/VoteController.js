var Item = require('../models/ItemModel.js');
var Vote = require('../models/VoteModel.js');

var sequelize = require('../db/database.js');
var util = require('../util/helpers.js');
var xml = require('xml');

module.exports = {
  votes: {
    get: ((req, res) => {
      console.log('get request vote controller')
      Vote.findAll()
        .then((votes) => {
          res.json({results: votes});
        })
        .catch((err) => {
          res.json({results: err})
        })
    }),
    post: ((req, res) => {
      const vote = req.body;
      console.log('VOTE:', vote)
      Vote.create({
        FromCountry: vote.FromCountry,
        FromZip: vote.FromZip,
        FromState: vote.FromState,
        FromCity: vote.FromCity,
        Body: vote.Body,
        From: vote.From
      })
      .then(() => {
        res.set('Content-Type', 'text/xml');
        res.send(xml({Response: [{ Message: 'Thanks for voting =)'}]}));
      })
      .catch((err) => {
        console.log('VoteController error:', err);
      })
    })
  }
}