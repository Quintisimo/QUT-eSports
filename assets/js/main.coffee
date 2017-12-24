# Event date
countDownDate = new Date("Oct 17, 2017 10:00:00").getTime()

# Facebook widget
((d, s, id) ->
  js
  fjs = d.getElementsByTagName(s)[0]
  if d.getElementById(id) then return
  js = d.createElement(s)
  js.id = id
  js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=263835507426067'
  fjs.parentNode.insertBefore(js, fjs)
) document, 'script', 'facebook-jssdk'

# Google maps
initMap = ->
  if document.getElementById('map')
    location =
      lat: -27.477327,
      lng: 153.030078
    map = new google.maps.Map(document.getElementById('map'),
      zoom: 17,
      center: location,
      scrollwheel: false
    )
    contentString = '<h1>X Block Gardens Point</h1><img src="../img/map/x block.jpg">'
    infowindow = new google.maps.InfoWindow (
      content: contentString
    )
    marker = new google.maps.Marker(
      position: location,
      map: map,
      icon: '../img/map/marker.png'
    )
    marker.addListener('click', () ->
      infowindow.open(map, marker)
      return
    )
  return

# jQuery
(($) ->

  $(document).ready ->

    # Toggle game info
    $('.game').children('img').click ->
      $this = $(this)
      headerHeight = $('html').css('font-size')
      headerHeight = headerHeight.replace('px', '') * 8.5

      if !$('.game-details').is(':visible')
        $('html, body').animate(
          scrollTop: $this.offset().top - headerHeight
        )
      $this.siblings('.game-details').slideToggle()
      return

    # Animate mobile header button
    $('#mobile-header-toggle').click (e) ->
      $this = $(this)

      if $('#mobile-header').is(':visible')
        $this.css('transform', 'rotate(0deg)')

      else
        $this.css('transform', 'rotate(180deg)')

      $('#mobile-header').slideToggle('slow')
      e.stopPropagation()
      return

    # Dismiss mobile header when clicked outside
    $(document).click ->
      if $('#mobile-header').is(':visible')
        $('#mobile-header').slideUp()
        $('#mobile-header-toggle').fadeOut(500, ->
          $('#mobile-header-toggle').attr('src', 'img/mobile/nav.png').fadeIn(500)
          return
        )
      return

    # Countdown to event
    x = setInterval((->
      now = new Date().getTime();
      distance = countDownDate - now
      days = Math.floor(distance / (1000 * 60 * 60 * 24))
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      seconds = Math.floor((distance % (1000 * 60)) / 1000)
      $('#timer').text("#{days}d #{hours}h #{minutes}m #{seconds}s")

      if distance < 0
        clearInterval(x)
        $('#timer').text('Expired')
      return
    ), 1000)
  return
) jQuery
