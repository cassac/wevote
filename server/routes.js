var controller = require('./controllers');
var router = require('express').Router();


router.get('/items', controller.items.get);

router.post('/items', controller.items.post);


module.exports = router;
