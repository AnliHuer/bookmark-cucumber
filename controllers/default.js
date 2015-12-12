var bookmarks = require('../data/bookmark.json');
var allElemFormat = require('../controllers/all-elem-format');

function Default(){}

Default.prototype.getAllBookmarks = function(req,res){
  res.render('index',{bookmarks:allElemFormat(bookmarks)});
};

module.exports = Default;
