// Facebook widget
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=263835507426067';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Google maps
function initMap() {
  if (document.getElementById('map')) {
    var location = {
      lat: -27.477327,
      lng: 153.030078
    };
    var map = new google.maps.Map(document.getElementById('map'), {
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
}

// jQuery
(function($) {

  $(document).ready(function() {

    // Events calendar
    $('#calendar').fullCalendar({
      header: {
        left: 'title',
        center: '',
        right: 'today prev,next,'
      },
      googleCalendarApiKey: 'AIzaSyDvSDhNmwU_AjpcV5zubFV5WqbqKxsGB2M',
      events: {
        googleCalendarId: 'qutesport@gmail.com'
      },
     eventClick: function(event) {
       window.open(event.url, 'gcalevent', 'width=700,height=600');
       return false;
      }
    });

    // Signup toggle
    $('.signup').click(function() {
      $('.register').addClass('is-active');
      $('#overlay').css('display', 'block');
    });

    // Dismiss signup
    $('.close').click(function() {
      $('.register').removeClass('is-active');
      $('#overlay').css('display', 'none');
    });

    // Toggle game info
    $('.game').children('img').click(function() {
      var $this = $(this),
      headerHeight = $('html').css('font-size');
      headerHeight = headerHeight.replace('px', '') * 8.5;

      if (!$('.game-details').is(':visible')) {
        $('html, body').animate({
          scrollTop: $this.offset().top - headerHeight
        });
      }
      $this.siblings('.game-details').slideToggle();
    });

    // Animate mobile header button
    $('#mobile-header-toggle').click(function(e) {
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
      e.stopPropagation();
    });

    // Dismiss mobile header when clicked outside
    $(document).click(function() {
      if ($('#mobile-header').is(':visible')) {
        $('#mobile-header').slideUp();
        $('#mobile-header-toggle').fadeOut(500, function() {
          $('#mobile-header-toggle').text('☰').fadeIn(500);
        });
      }
    });

    //Ajax form submission to google sheets
    $('form.register').submit(function(event){
      var request;
        if (request) {
            request.abort();
        }
        var $form = $(this);
        var $inputs = $form.find('input, select, button, textarea');
        var serializedData = $form.serialize();
        $inputs.prop('disabled', true);
        request = $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbz4zbw4d6ZrH0vP12WcjlT0-n_PLOMd0h3IEDb6DH4UdD1e8d5X/exec',
            type: 'post',
            dataType: 'jsonp',
            data: serializedData
        });
        request.always(function () {
          $inputs.prop('disabled', false);
          window.location.reload();
        });
        event.preventDefault();
      });
  });
}(jQuery));
