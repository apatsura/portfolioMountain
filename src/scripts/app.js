(function() {
  
  // переход к статье через меню в сайдбаре
  $('.article__item_link').on('click','a', function (event) {
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
// import { flipCard } from './common/flipCard';
// import { toggleMenu } from './common/toggleMenu';
// import { menuSpy } from './common/menuSpy';
// import { initMap } from './common/initMap';

parallax();
// flipCard();
// toggleMenu();
// menuSpy();
// initMap();
