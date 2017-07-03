function initMap() {
  var location = {
    lat: -27.477356,
    lng: 153.028423
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

(function($) {
  $(document).ready(function() {
    $('.game').click(function() {
      $(this).children('.game-details').slideToggle();
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
