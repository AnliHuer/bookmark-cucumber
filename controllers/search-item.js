var bookmarks = require('../data/bookmark.json');
var allElemFormat = require('../controllers/all-elem-format');

function SearchItem(){}


SearchItem.prototype.search = function(req,res){
  res.render('index',{bookmarks:allElemFormat(bookmarks)});
};



module.exports = SearchItem;
