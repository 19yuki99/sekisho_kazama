//slider
$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 4500,
  speed: 3000,
  fade: true,
  cssEase: 'linear'
});

//dropdown
$(function(){
  $('.dropdwn li').hover(function(){
      $("ul:not(:animated)", this).slideDown();
  }, function(){
      $("ul.dropdwn_menu",this).slideUp();
  });
});

//swiper
var mySwiper = new Swiper('.swiper-container', {
	spaceBetween: 10,
	slidesPerView: 3,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
});

//sclolltop
$(function () {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが500に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スルスルっとスクロールでトップへもどる
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

//hamburger menu
$('.burger-btn').on('click', function(){
  $('.bar').toggleClass('cross');
  $('.nav-wrapper').toggleClass('open');
});
$('.nav-item>a').on('click',function(){//.nav-item>aをクリックすると
  $('.nav-wrapper').fadeOut(300);//.nav-wrapperが0.5秒でフェードアウト(メニューのフェードアウト)
  $('.bar').removeClass('cross');//.btn_triggerのcloseクラスを削除
  $('.nav-wrapper').removeClass('open');//.btn_triggerのcloseクラスを削除
});

//loading
'use strict';

$(window).on('load', function(){
  $('#loading').delay(900).fadeOut(800);
  console.log("ローディング完了");
});

$(function(){
  setTimeout('stopload()', 10000);
})

function stopload(){
  $('#loading').delay(900).fadeOut(800);
  console.log("10秒経過");
}