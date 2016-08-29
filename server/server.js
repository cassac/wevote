var express = require('express');
app = express();
app.use(express.static('client'));

app.get('/', function(req, res) {
  res.json('get received');
})

app.post('/items', function(req, res) {
  res.json('post received');
})

var port = 8080;
app.listen(port, function() {
  console.log('WeVote is running on port:', port);
})