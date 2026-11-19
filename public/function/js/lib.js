//////////////////////////////////////////////////////////////

//	------------------------------------
//	JavaScript library
//	------------------------------------

//////////////////////////////////////////////////////////////

// topへ戻る
$(document).ready(function(){
  // 120を超えたら表示させる
  var topBtn = $('.pagetop');
  topBtn.hide();
  $(window).scroll(function(){
    if($(this).scrollTop() > 120){ //スクロール値
      topBtn.fadeIn();
    }else{
      topBtn.fadeOut();
    }
  });
  // 動きをスムーズに
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    },500);
    return false;
  });
});

$(function(){
  $(window).scroll(function(e){
    var bottomY = 0, //スクロール時の下からの位置
      $window = $(e.currentTarget),
      height = $window.height(), //ウィンドウ(ブラウザ)の高さ
      scrollTop = $window.scrollTop(), //スクロール量
      documentHeight = $(document).height(), //ページ全体の高さ
      footerHeight = $("footer").height(); //フッタの高さ
      bottomHeight = footerHeight + height + scrollTop + bottomY - documentHeight;
    if(scrollTop >= documentHeight - height - footerHeight + bottomY){
      $('.pagetop').css({ bottom: bottomHeight - bottomY }); //スクロール時にbottomの値が変動
    }else{
      $('.pagetop').css({ bottom: bottomY });
    }
  });
});

//　高さ統一
$(function(){
	$('.hightset').each(function(){
		var rep = 0;
		$(this).children().each(function(){
			var itemHeight = parseInt($(this).css('height'));
			if(itemHeight > rep){
				rep = itemHeight;
			};
		});
		$(this).children().css({height:(rep)});
	});
});

//アコーディオンメニュー
$(function() {
   $("#accordion li ul").hide();
   $("#active").show();
   $("#accordion > li > a").click(function(){
       var click = $("+ul",this);
	   click.slideDown();
       $("#accordion ul").not(click).slideUp();
	   $(".arrow").removeClass("rotate");
	   $("> .arrow",this).addClass("rotate");
       return false;
   });
});
//kaiten
var d = 0;
function kaiten(x){
var e = document.getElementById("img1");

  //var e = document.getElementById("img2");
  //var e = document.getElementsByName("img1");
  d = d + x;
  e.style.transform = "rotate(" + d + "deg)";
}

//var d = 0;
function kaiten2(x){
var e = document.getElementById("img2");
  d = d + x;
  e.style.transform = "rotate(" + d + "deg)";
}

//--------------------------------------------------------------
// 複数スライダー work
