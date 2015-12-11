var bookmarks = require('../data/bookmark.json');

function SearchItem(){}

SearchItem.prototype.search = function(req,res){
  res.render('index',{bookmarks:bookmarks});
};

module.exports = SearchItem;
