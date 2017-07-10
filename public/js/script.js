(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=263835507426067";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function initMap() {
  var location = {
    lat: -27.477327,
    lng: 153.030078
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: location,
    scrollwheel: false
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
      var $this = $(this),
      headerHeight = $('html').css('font-size');
      headerHeight = headerHeight.replace('px', '') * 8.5;
      $('html, body').animate({
        scrollTop: $this.offset().top - headerHeight
      });
      $this.siblings('.game-details').slideToggle();
    });

    $('#mobile-header-toggle').click(function() {
      var $this = $(this);

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
