var Item = require('../models/ItemModel.js');
var Vote = require('../models/VoteModel.js');

var sequelize = require('../db/database.js');
var util = require('../util/helpers.js');
var xml = require('xml');

module.exports = {
  votes: {
    get: ((req, res) => {
      console.log('get request vote controller')
      Vote.findAll({
        order: [
          ['id', 'DESC']
        ]   
      })
      .then((votes) => {
        res.json({results: votes});
      })
      .catch((err) => {
        res.json({results: err})
      })
    }),
    post: ((req, res) => {
      const vote = req.body;
      Vote.create({
        FromCountry: vote.FromCountry,
        FromZip: vote.FromZip,
        FromState: vote.FromState,
        FromCity: vote.FromCity,
        Body: vote.Body,
        From: vote.From
      })
      .then((vote) => {
        res.set('Content-Type', 'text/xml');
        res.send(xml({Response: [{ Message: 'Thanks for voting =)'}]}));
        return vote;
      })
      .then((vote) => {
        const body = vote.dataValues.Body;
        const hashtag = util.findHashtag(body);
        return new Promise((resolve, reject) => {
          if (!hashtag) {
            reject('No hashtag');
          }
          Item.findOne({
            where: {
              tag: hashtag
            }
          })
          .then((item) => {
            item.update({
              votes: item.votes + 1
            })
          })
          .catch((err) => {
            reject('Problem updating item vote count', err);
          })
        })
      })
      .catch((err) => {
        console.log('VoteController error:', err);
      })
    })
  }
}