function setRenderString(resq){
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
}


function deleteBookmarks(title){
  $.post('/delete',{title:title},function(resq){
    setRenderString(resq);
  });
}


function insertBookmarks(obj){
  $.post('/insert',obj,function(resq){
    setRenderString(resq);
  });
}


$(function(){
  $('#addModal').modal({show:false});

  $('.search-item').on('click',"button[name='bookmark-delete']",function(){
    var bookmarkTitle = this.parentNode.firstChild.nextSibling.innerHTML;

    console.log(bookmarkTitle);
    deleteBookmarks(bookmarkTitle);
  });

  $('#bookmark-add').on('click',function(){
    $('.add-bookmark-address').parent().prev().empty();
    $('.add-bookmark-address').parent().prev().append('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">  &times; </button>'+
    '<h4 class="modal-title" id="myModalLabel"> 添加书签 </h4>'
    );
  });

  $('#save').on('click',function(){
    var name = $('.add-bookmark-name').val();
    var address = $('.add-bookmark-address').val();
    var time = new Date().getTime();

    $('.add-bookmark-address').parent().prev().empty();
    $('.add-bookmark-address').parent().prev().append('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">  &times; </button>'+
    '<h4 class="modal-title" id="myModalLabel"> 添加书签 </h4>'
    );

    if(name === ''){
      $('.add-bookmark-name').parent().prev().append("<span class='inputEmpty'>" + "请输入书签名称!" + "</span>");
    }else if(address === ''){
      $('.add-bookmark-address').parent().prev().append("<span class='inputEmpty'>" + "请输入书签地址!" + "</span>");
    }else{
      insertBookmarks({title:name,address:address,created:time});
    }
  });

});
