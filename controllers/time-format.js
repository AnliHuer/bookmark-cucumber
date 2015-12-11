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

module.exports = timeFormat;
