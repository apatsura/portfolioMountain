export const flipCard = function() {

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
  
};