var bookmarks = require('../data/bookmark.json');
var allElemFormat = require('../controllers/all-elem-format');

function SearchItem(){}


SearchItem.prototype.search = function(req,res){
  res.send(allElemFormat(bookmarks));
};

module.exports = SearchItem;
