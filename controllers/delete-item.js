var bookmarks = require('../data/bookmark.json');
var timeFormat = require('../controllers/time-format');

function DeleteItem(){}

DeleteItem.prototype.delete = function(req,res){
  var title = req.body.title;
  var result = [];

  for(var i = 0 ; i < bookmarks.length ; i++){
    if( bookmarks[i].title !== title){
      result.push({
        title : bookmarks[i].title,
        created : timeFormat(bookmarks[i].created)
      });
    }
  }

  res.send(result);
};

module.exports = DeleteItem;
