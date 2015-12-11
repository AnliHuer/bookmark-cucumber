var timeFormat = require('../controllers/time-format');

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


module.exports = allElemFormat;
