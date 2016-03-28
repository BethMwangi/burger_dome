//if (document.getElementById('map-canvas')) {

//    var myLatlng = new google.maps.LatLng(52.525595, 13.393085);

//   var mapOptions = {
///       zoom: 15,
//   center: myLatlng,
// mapTypeId: google.maps.MapTypeId.ROADMAP
//   };
//
//   var map = new google.maps.Map(documentGetElementById("map-// canvas"), mapOptions);
// }
var map;

function initMap() {
    var mapDiv = document.getElementById('map-canvas');
    var map = new google.maps.Map(mapDiv, {
        zoom: 8,
        center: new google.maps.LatLng(-34.397, 150.644)
    });

    // We add a DOM event here to show an alert if the DIV containing the
    // map is clicked.
    google.maps.event.addDomListener(mapDiv, 'click', function () {
        window.alert('Map was clicked!');
    });
}
