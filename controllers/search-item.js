var bookmarks = require('../data/bookmark.json');

function SearchItem(){}

SearchItem.prototype.search = function(req,res){
  res.send(bookmarks);
};

module.exports = SearchItem;
