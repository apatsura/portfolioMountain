export const initMap = function () {
  var home = {lat: 47.781488, lng: 35.186588},
  myGeo = {
    zoom: 16,
    center: {lat: 47.780443, lng: 35.175036},
    disableDefaultUI: true,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#ffffff'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#ffffff'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#404040'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ffffff'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#d6d6d6'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#d6d6d6'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9a9a9a'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#d6d6d6'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#d6d6d6'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d6d6d6'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#61dac9'}]
      },
    ]
  }
  var map = new google.maps.Map(document.getElementById("map"), myGeo);
  var marker = new google.maps.Marker({
    position: home,
    map: map
  });
};

// export var initMap = function (a,b) {
//   return console.log(a + b);
// }