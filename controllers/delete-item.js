var bookmarks = require('../data/bookmark.json');

function DeleteItem(){}

DeleteItem.prototype.delete = function(req,res){

  for(var i = 0; i < bookmarks.length; i++){
    if(req.created === bookmarks.created){
      //////////////////////
    }
  }
  res.send(bookmarks);
};

module.exports = DeleteItem;
