export const toggleMenu = function() {
  
  $('.toggle-menu').click(function() {
    $('.sandwich').toggleClass('toggle-active');
    if($('body').css('overflow') === 'visible') {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'visible');
    }
  });
  
  $('.toggle-menu').click(function() {
    if ($('.menu-fullscreen').is(':visible')) {
      $('.menu-fullscreen').css('display', 'none');
      $('.user__scroll').css('display', 'flex');
      $('.toggle-menu').css('margin-right', '0');
    } else {
      $('.menu-fullscreen').css('display', 'block');
      $('.user__scroll').css('display', 'none');
      $('.toggle-menu').css('margin-right', '17px');
    }
  });
  
};