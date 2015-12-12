function setRenderString(resq){
  var renderString = '';

  $('.search-item').empty();

  resq.forEach(function(val){
    renderString += '<div class="search-list">'+
    "<button name='bookmark-delete' class='btn btn-mini btn-primary bookmark-delete' type='button'>删除</button>"+
    '<div class="bookmark-content">'+ val.title +'</div>'+
    "<hr>"+
    '</div>';
  });

  renderString +='<button id="bookmark-add" class="btn btn-large btn-block btn-primary" type="button" data-toggle="modal" data-target="#addModal">增加</button>';

  $('.totalBookmarksNum').html('共有'+resq.length+'条记录');
  $('.search-item').append(renderString);
  $('.search-item').append('<ul class="pagination" id="pagination"></ul>');
  pagination();
}


function searchHightLight(word,resq){
  var regExp = new RegExp(word, 'gim');
  var list = '';
  var totalBookmarksNum = 0;

  resq.forEach(function(val) {
      if (val.title.search(regExp) > 0) {
        totalBookmarksNum++;
        var newTitle = val.title.replace(regExp, '<span class="highlight">$&</span>');
        list +='<div class="search-list">'+
          "<button name='bookmark-delete' class='btn btn-mini btn-primary bookmark-delete' type='button'>删除</button>"+
          '<div class="bookmark-content">'+ newTitle +'</div>'+
          "<hr>"+
          '</div>';
      }
  });

  $('.totalBookmarksNum').html('共有'+totalBookmarksNum+'条记录');
  $('.search-item').prepend(list);
  $('.search-item').append('<button id="bookmark-add" class="btn btn-large btn-block btn-primary" type="button" data-toggle="modal" data-target="#addModal">增加</button>');

  pagination();
}


function removeModalValue(){
  $('.add-bookmark-name').val('');
  $('.add-bookmark-address').val('');
  $('.add-bookmark-address').parent().prev().empty();
  $('.add-bookmark-address').parent().prev().append('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">  &times; </button>'+
  '<h4 class="modal-title" id="myModalLabel"> 添加书签 </h4>'
  );
}

function pagination(){
//   var totalPages = bookmarks.length % 10 === 0 ? bookmarks.length / 10 : bookmarks.length / 10 + 1;
   $.jqPaginator('#pagination', {
         totalPages: 10,
         visiblePages: 5,
         currentPage: 1,
         onPageChange: function (num, type) {
           $('#p1').text(type + '：' + num);
         }
     });
 }


function deleteBookmarks(title){
  $('.search-item').on('click',"button[name='bookmark-delete']",function(){
    var bookmarkTitle = this.parentNode.firstChild.nextSibling.innerHTML;

    if(confirm('删除书签？')){

      $.post('/delete',{title:bookmarkTitle},function(resq){
        setRenderString(resq);
      });
    }
  });
}


function insertBookmarks(){
  $('#save').on('click',function(){
    var name = $('.add-bookmark-name').val();
    var address = $('.add-bookmark-address').val();
    var time = new Date().getTime();

    removeModalValue();

    if(name === ''){
      $('.add-bookmark-name').parent().prev().append("<span class='inputEmpty'>" + "请输入书签名称!" + "</span>");
    }else if(address === ''){
      $('.add-bookmark-address').parent().prev().append("<span class='inputEmpty'>" + "请输入书签地址!" + "</span>");
    }else{
      $.post('/insert',{title:name,address:address,created:time},function(resq){
        setRenderString(resq);
      });

      $('.search-bar').html('');
      $("#addModal").modal('hide');
    }
  });
}


function searchBookmarks(){
  $('.search-bar').on('keyup', function() {
    var word = $('.search-bar').val();

    $('.search-item').empty();
    $('.search-item').append('<ul class="pagination" id="pagination"></ul>');

    $.get('/search', function(resq) {
        if(word){
          searchHightLight(word,resq);
        }else{
          setRenderString(resq);
        }
    });
 });
}


$(function(){

  $('#bookmark-add').on('click',function(){
    removeModalValue();
  });

  pagination();

  searchBookmarks();
  deleteBookmarks();
  insertBookmarks();

});
