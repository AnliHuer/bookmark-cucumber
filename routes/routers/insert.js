var express = require('express');
var router = express.Router();

var Bookmarks = require('../../controllers/bookmarks');
var bookmarks = new Bookmarks();

router.post('/', bookmarks.insert);

module.exports = router;
