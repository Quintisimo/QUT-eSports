function initMap() {
  var location = {
    lat: -27.477327,
    lng: 153.030078
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: location
  });

  var contentString = '<h1>X Block Gardens Point</h1><img src="../images/map/x block.jpg">';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: '../images/map/marker.png'
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}

(function($) {
  $(document).ready(function() {
    $('.game').children('img').click(function() {
      $(this).siblings('.game-details').slideToggle();
    });

    $('#mobile-header-toggle').click(function() {
      $this = $(this);
      if ($('#mobile-header').is(':visible')) {
        $this.fadeOut(500, function() {
          $this.text('☰').fadeIn(500);
        });
      } else {
        $this.fadeOut(500, function(){
          $this.text('✕').fadeIn(500);
        });
      }
      $('#mobile-header').slideToggle('slow');
    });
  });
}(jQuery));
