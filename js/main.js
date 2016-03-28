< script type = 'text/javascript' >
    function init_map() {
        var myOptions = {
            zoom: 12,
            center: new google.maps.LatLng(52.2296756, 21.012228700000037),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
        marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(52.2296756, 21.012228700000037)
        });
        infowindow = new google.maps.InfoWindow({
            content: '<strong>Warsaw, Poland</strong><br><br> warsaw<br>'
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
        infowindow.open(map, marker);
    }
google.maps.event.addDomListener(window, 'load', init_map); < /script>
