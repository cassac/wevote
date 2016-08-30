var Item = require('../models');
var fs = require('fs');
var multiparty = require('multiparty');
var sequelize = require('../db/database.js');


module.exports = {
  items: {
    get: ((req, res) => {
      Item.findAll()
        .then((results) => {
          res.json({results: results})
        })
        .catch((err) => (
          res.json({results: err})
        ))
    }),
    post: ((req, res) => {
      return new Promise((resolve, reject) => {
        const form = new multiparty.Form();
        form.parse(req, (err, fields, files) => {
          const text = fields.text[0];
          const filepath = files.image[0].path;
          const filename = files.image[0].originalFilename;
          fs.readFile(filepath, ((err, data) => {
            if (err) {
              reject(err);
            }
            console.log('reading file...')
            resolve()
          }))
        })
      })
      .then(function(results) {
        Item.create({
          tag: 'tag',
          text: 'text',
          filepath: 'filepath'
        })
        .then(((results) => {
          res.json({results: results})
        }))
        .catch(((err) => {
          res.json({results: err})
        }))
        res.json({results: results})
      })
    })
  }
}