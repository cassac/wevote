var express = require('express');
var path = require('path');
var sequelize = require('./db/database.js');
var router = require('./routes.js');

var app = express();
module.exports.app = app;

app.use('/', router);

app.use(express.static('client'));
app.use('/static/uploads', express.static('static/uploads'));

app.get('*', (req, res) => {
	res.redirect('/').sendFile(path.resolve('client', 'index.html'));
})

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('WeVote is running on port:', port);
})