#Real World Futures date
countDownDate = new Date("Oct 17, 2017 10:00:00").getTime()

# Facebook widget
((d, s, id) ->
  js
  fjs = d.getElementsByTagName(s)[0]
  if d.getElementById(id)
    return
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

    # Events calendar
    $('#calendar').fullCalendar(
      header:
        left: 'title',
        center: '',
        right: 'today prev,next,'
      ,
      googleCalendarApiKey: 'AIzaSyDvSDhNmwU_AjpcV5zubFV5WqbqKxsGB2M',
      events:
        googleCalendarId: 'qutesport@gmail.com'
      ,
     eventClick: (event) ->
       window.open(event.url, 'gcalevent', 'width=700,height=600')
       return false
    )

    # Signup toggle
    # $('.signup').click ->
    #   $('.register').addClass('is-active')
    #   $('#overlay').css('display', 'block')
    #   return

    # Dismiss signup
    # $('.close').click ->
    #   $('.register').removeClass('is-active')
    #   $('#overlay').css('display', 'none')
    #   return

    # Toggle game info
    $('.game').children('img').click ->
      $this = $(this)
      headerHeight = $('html').css('font-size')
      headerHeight = headerHeight.replace('px', '') * 8.5

      if !$('.game-details').is(':visible')
        $('html, body').animate({
          scrollTop: $this.offset().top - headerHeight
        })
      $this.siblings('.game-details').slideToggle()
      return

    # Animate mobile header button
    $('#mobile-header-toggle').click (e) ->
      $this = $(this)

      if $('#mobile-header').is(':visible')
        $this.fadeOut(500, ->
          $this.text('☰').fadeIn(500)
          return
        )
      else
        $this.fadeOut(500, ->
          $this.text('✕').fadeIn(500)
          return
        )

      $('#mobile-header').slideToggle('slow')
      e.stopPropagation()
      return

    # Dismiss mobile header when clicked outside
    $(document).click ->
      if $('#mobile-header').is(':visible')
        $('#mobile-header').slideUp()
        $('#mobile-header-toggle').fadeOut(500, ->
          $('#mobile-header-toggle').text('☰').fadeIn(500)
          return
        )
      return

    #Countdown to tournament
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

    # Ajax form submission to google sheets
    # $('form.register').submit (event) ->
    #   request
    #   request.abort() if request
    #
    #   $form = $(this)
    #   $inputs = $form.find('input, select, button, textarea')
    #   serializedData = $form.serialize()
    #   $inputs.prop('disabled', true)
    #   request = $.ajax(
    #     url: 'https://script.google.com/macros/s/AKfycbz4zbw4d6ZrH0vP12WcjlT0-n_PLOMd0h3IEDb6DH4UdD1e8d5X/exec',
    #     type: 'post',
    #     dataType: 'jsonp',
    #     data: serializedData
    #   )
    #   request.always( ->
    #     $inputs.prop('disabled', false)
    #     window.location.reload()
    #     return
    #   )
    #   event.preventDefault()
    #   return
  return
) jQuery
