var express = require('express');
var router = express.Router();


let index = require('../controllers/index');
/*//////////////assigning the index handler */
router.get('/', index.index);

module.exports = router;
