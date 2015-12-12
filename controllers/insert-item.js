var bookmarks = require('../data/bookmark.json');
var allElemFormat = require('../controllers/all-elem-format');

function Bookmarks(){}

Bookmarks.prototype.insert = function(req,res){

  bookmarks.push(
    {
      title:  req.body.title,
      created: req.body.created,
      address: req.body.address
    }
  );

  res.send(allElemFormat(bookmarks));
};




module.exports = Bookmarks;
