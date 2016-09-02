var Item = require('../models/ItemModel.js');
var Vote = require('../models/VoteModel.js');
var sequelize = require('../db/database.js');
var util = require('../util/helpers.js');
var xml = require('xml');

module.exports = {
  votes: {
    get: ((req, res) => {
      Vote.find()
      .then((votes) => {
        res.json({results: votes});
      })
      .catch((err) => {
        res.json({results: err})
      })
    }),
    post: ((req, res) => {
      const sms = req.body;
      const vote = new Vote({
        FromCountry: sms.FromCountry,
        FromZip: sms.FromZip,
        FromState: sms.FromState,
        FromCity: sms.FromCity,
        Body: sms.Body,
        From: sms.From
      })
      vote.save()
      .then((vote) => {
        res.set('Content-Type', 'text/xml');
        res.send(xml({Response: [{ Message: 'Thanks for voting =)'}]}));
        return vote;
      })
      .then((vote) => {
        const body = vote.Body;
        const hashtag = util.findHashtag(body);
        return new Promise((resolve, reject) => {
          if (!hashtag) {
            reject('No hashtag');
          }
          Item.findOne({
            tag: hashtag
          })
          .then((item) => {
            item.save({
              votes: item.votes++
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