$(function(){
  var str = $('body').html();
  console.log(str);
  $.get('/index', function(resp) {
    console.log(1111111111);
    console.log(resp);
  });
});
