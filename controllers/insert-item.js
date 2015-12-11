var bookmarks = require('../data/bookmark.json');
var allElemFormat = require('../controllers/all-elem-format');

function InsertItem(){}

InsertItem.prototype.insert = function(req,res){

  bookmarks.push(
    {
      title:  req.body.title,
      created: req.body.created,
      address: req.body.address
    }
  );

  res.send(allElemFormat(bookmarks));
};

module.exports = InsertItem;
