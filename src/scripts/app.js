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
    $(".sandwich").toggleClass("active");
    if($("body").css("overflow") === "visible") {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "visible");
    }
  });
  
  $(".toggle-menu").click(function() {
    if ($(".menu_full").is(":visible")) {
      $(".menu_full").css("display", "none");
    } else {
      $(".menu_full").css("display", "flex");
    }
  });

  // google map
  function initMap() {
    var myGeo = {
      zoom: 15,
      center: {lat: 47.781488, lng: 35.186588},
      styles: [
        {elementType: 'geometry', stylers: [{color: '#ffffff'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#000000'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#000000'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#000000'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#00bfa5'}]
        },
      ]
    }
    var map = new google.maps.Map(document.getElementById("map"), myGeo);
    var marker = new google.maps.Marker({
      position: myGeo.center,
      map: map
    });
  }
  
})();