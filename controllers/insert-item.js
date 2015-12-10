var bookmarks = require('../data/bookmark.json');

function InsertItem(){}

InsertItem.prototype.insert = function(req,res){
  bookmarks.push(
    {
      title:  req.param('bookmark'),
      created: req.param('tome'),
      address: req.param('bookmark'),
    }
  );
  res.send(bookmarks);
};

module.exports = InsertItem;
