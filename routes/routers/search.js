var express = require('express');
var router = express.Router();

var SearchItem = require('../../controllers/search-item');
var searchItem = new SearchItem();

router.get('/', searchItem.search);

module.exports = router;
