(function() {
  
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

// import { parallax } from './common/parallax';
import { flipCard } from './common/flipCard';
import { toggleMenu } from './common/toggleMenu';
// import { initMap } from './common/googleMap';

// parallax();
flipCard();
toggleMenu();
// initMap();
