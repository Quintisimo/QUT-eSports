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

  $('#calendar').fullCalendar({
    header: {
      left: 'title',
      center: '',
      right: 'today prev,next'
    },
    googleCalendarApiKey: 'API_KEY',
    events: {
        googleCalendarId: 'CALENDAR_ID'
    },
    eventClick: function(event) {
      window.open(event.url, 'gcalevent', 'width=700,height=600');
      return false;
    }
  });
});
