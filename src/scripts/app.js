(function() {
  var cards = document.querySelectorAll(".authoriz-btn");
  for ( var i = 0, len = cards.length; i < len; i++ ) {
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
    $(".sandwich").toggleClass("active");
  });
  
  $(".toggle-menu").click(function() {
    if ($(".menu_full").is(":visible")) {
      // $(".menu_full").fadeOut(600);
      $(".menu_full").css("display", "none");
    } else {
      // $(".menu_full").fadeIn(600);
      $(".menu_full").css("display", "flex");
    }
  });
  
})();


// loader
// $(window).load(function() { 
// 	$(".loader-inner").fadeOut(); 
// 	$(".loader").delay(400).fadeOut("slow"); 
// });