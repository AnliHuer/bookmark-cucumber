var bookmarks = require('../data/bookmark.json');
var timeFormat = require('../controllers/time-format');

function SearchItem(){}


SearchItem.prototype.search = function(req,res){
  var result = [];

  bookmarks.forEach(function(val){
    result.push({
      title:val.title,
      created:timeFormat(val.created)
    });
  });

  res.render('index',{bookmarks:result});
};



module.exports = SearchItem;
