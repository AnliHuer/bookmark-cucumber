var express = require('express');
var router = express.Router();

var InsertItem = require('../../controllers/insert-item');
var insertItem = new InsertItem();

router.post('/', insertItem.insert);

module.exports = router;
