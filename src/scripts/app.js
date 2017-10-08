(function() {
  // card
  var cards = document.querySelectorAll(".authoriz-btn");
  for (var i = 0, len = cards.length; i < len; i++) {
    var card = cards[i];
    clickListener();
  }
  
  function clickListener() {
    card.addEventListener("click", function() {
      var block = document.querySelector(".user__card");
      var c = block.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
  
  // toggle menu
  $(".toggle-menu").click(function() {
    $(".sandwich").toggleClass("toggle-active");
    if($("body").css("overflow") === "visible") {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "visible");
    }
  });
  
  $(".toggle-menu").click(function() {
    if ($(".menu-fullscreen").is(":visible")) {
      $(".menu-fullscreen").css("display", "none");
    } else {
      $(".menu-fullscreen").css("display", "flex");
    }
  });
  
  // menu spy
  $(window).scroll(function(){
    var $sections = $('.article');
    $sections.each(function(i,el){
      var top  = $(el).offset().top-100;
      var bottom = top +$(el).height();
      var scroll = $(window).scrollTop();
      var id = $(el).attr('id');
      if( scroll > top && scroll < bottom){
        $('a.active').removeClass('active');
        $('a[href="#'+id+'"]').addClass('active');
      }
    })
  });
  // переход к статье через меню в сайдбаре
  $(".article__item_link").on("click","a", function (event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault();
    // получем идентификатор блока из атрибута href
    var id  = $(this).attr('href'),
    // находим высоту, на которой расположен блок
    top = $(id).offset().top;
    // анимируем переход к блоку, время: 800 мс
    $('body,html').animate({scrollTop: top}, 800);
  });
  
})();

import { parallax } from './common/parallax';
// import { initMap } from './common/googleMap';

parallax();
// initMap();
