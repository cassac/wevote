var ItemController = require('./controllers/ItemController.js');
var VoteController = require('./controllers/VoteController.js');
var router = require('express').Router();


router.get('/items', ItemController.items.get);
router.post('/items', ItemController.items.post);

router.post('/votes', VoteController.votes.post);


module.exports = router;
