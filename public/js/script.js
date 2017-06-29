$(document).ready(function() {
  $('.game').click(function() {
    $(this).children('.game-details').slideToggle();
  });

  $('#calendar').fullCalendar({
    header: {
      left: '',
      center: 'title',
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
