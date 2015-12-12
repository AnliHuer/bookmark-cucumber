var bookmarks = require('../data/bookmark.json');

function Bookmarks(){}

function timeFormat(value){
  var dateTime = new Date(parseInt(value) * 1000);
  var year = dateTime.getFullYear();
  var month = dateTime.getMonth();
  var date = dateTime.getDate();
  var hour=dateTime.getHours();
  var minute=dateTime.getMinutes();
  var second=dateTime.getSeconds();

  month = (month + 1 < 10) ? '0' + (month + 1) : (month + 1).toString();
  date = (date + 1 < 10) ? '0' + (date + 1) : (date + 1).toString();

  return year + "-" + month + "-" + date + " " + hour + ":" + minute +　":" + second;
}

function allElemFormat(bookmarks){
  var result = [];

  bookmarks.forEach(function(val){
    result.push({
      title:val.title,
      created:timeFormat(val.created)
    });
  });

  return result;
}


Bookmarks.prototype.search = function(req,res){
  res.send(allElemFormat(bookmarks));
};

Bookmarks.prototype.getAllBookmarks = function(req,res){
  res.render('index',{bookmarks:allElemFormat(bookmarks)});
};

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

Bookmarks.prototype.delete = function(req,res){
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


module.exports = Bookmarks;
