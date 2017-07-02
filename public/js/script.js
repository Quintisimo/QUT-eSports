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
