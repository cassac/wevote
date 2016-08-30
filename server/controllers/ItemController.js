var Item = require('../models/ItemModel.js');
var fs = require('fs');
var path = require('path');
var multiparty = require('multiparty');
var sequelize = require('../db/database.js');
var util = require('../util/helpers.js');

module.exports = {
  items: {
    get: ((req, res) => {
      Item.findAll({
        order: [
          ['votes', 'DESC']
        ]        
      })
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
          if (!files.image.length) { // files.image is null if no files
            const temppath = files.image[0].path;
            const filename = files.image[0].originalFilename;
            const filepath = 'static/uploads/' + filename;
            fs.readFile(temppath, ((err, data) => {
              if (err) {
                reject(err);
              }
              fs.writeFile(filepath, data, ((err, data) => {
                if (err) {
                  reject(err);
                }
                resolve([text, filepath]);
              }))
            }))
          } else {
            resolve([text, null]);
          }
        })
      })
      .then((results) => {
        const tag = util.tagGenerator(results[0]);
        results.push(tag)
        return results;
      })
      .then(function(results) {
        Item.create({
          tag: results[2],
          text: results[0],
          filepath: results[1]
        })
        .then(((results) => {
          res.json({results: results})
        }))
        .catch(((err) => {
          res.json({results: err})
        }))
      })
    })
  }
}