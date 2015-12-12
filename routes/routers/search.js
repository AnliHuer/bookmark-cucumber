var express = require('express');
var router = express.Router();

var Bookmarks = require('../../controllers/bookmarks');
var bookmarks = new Bookmarks();

router.get('/', bookmarks.search);

module.exports = router;
