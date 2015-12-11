var express = require('express');
var router = express.Router();

var DeleteItem = require('../../controllers/delete-item');
var deleteItem = new DeleteItem();

router.post('/', deleteItem.delete);

module.exports = router;
