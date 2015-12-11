function deleteBookmarks(title){
  $.post('/delete',{title:title},function(resq){
    var renderString = '';

    $('.search-item').empty();

    resq.forEach(function(val){
      renderString += '<div class="search-list">'+
      '<div class="bookmark-content">'+ val.title +'</div>'+
      '<div class="bookmark-datetime">@'+ val.created +'</div>'+
      "<button id="+val.title+" name='bookmark-delete' class='btn btn-mini btn-primary bookmark-delete' type='button'>删除</button>"+
      "<hr>"+
      '</div>';
    });
    renderString += '<button id="bookmark-add" class="btn btn-large btn-block btn-primary" type="button" data-toggle="modal" data-target="#addModal">增加</button>';

    $('.search-item').append(renderString);
  });
}


$(function(){
  $('#addModal').modal({show:false});

  $('.search-item').on('click',"button[name='bookmark-delete']",function(){
    var bookmarkTitle = this.parentNode.firstChild.nextSibling.innerHTML;

    console.log(bookmarkTitle);
    deleteBookmarks(bookmarkTitle);
  });

});
