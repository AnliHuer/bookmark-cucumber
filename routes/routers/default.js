var express = require('express');
var router = express.Router();

var Default = require('../../controllers/default');
var _default = new Default();

router.get('/', _default.getAllBookmarks);

module.exports = router;
