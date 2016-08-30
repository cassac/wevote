var ItemController = require('./controllers/ItemController.js');
var VoteController = require('./controllers/VoteController.js');
var UtilController = require('./controllers/UtilController.js');

var router = require('express').Router();
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/items', ItemController.items.get);
router.post('/items', ItemController.items.post);

router.get('/votes', VoteController.votes.get);
router.post('/votes', urlencodedParser, VoteController.votes.post);

router.get('/restart', UtilController.restart.get);

module.exports = router;
