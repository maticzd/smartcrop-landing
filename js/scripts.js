/* global jQuery, $, SmoothScroll */

/* Sticky menu animations */
var viewportHeight = $(window).height()
var windowHeight
if (viewportHeight > 650) {
  windowHeight = 650
} else {
  windowHeight = viewportHeight
}

jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 1 && jQuery(this).scrollTop() < windowHeight) {
    jQuery('.menu').addClass('menu-scroll')
    jQuery('.navbar-fixed-top').addClass('navbar-scroll')
    jQuery('.navbar-fixed-top').css('background', 'rgba(58,96,27,.64)')
  } else if (jQuery(this).scrollTop() >= windowHeight) {
    jQuery('.menu').addClass('menu-scroll')
    jQuery('.navbar-fixed-top').addClass('navbar-scroll')
    jQuery('.navbar-fixed-top').css('background', '#3cac54')
  } else if (jQuery(this).scrollTop() <= 1) {
    jQuery('.menu').removeClass('menu-scroll')
    jQuery('.navbar-fixed-top').removeClass('navbar-scroll')
    jQuery('.navbar-fixed-top').css('background', 'none')
  }
})

/* Smooth Scroll */
var scroll = new SmoothScroll('a[href*="#"]', { // eslint-disable-line
  offset: '60px'
})

/* Animsition configuration */
jQuery('.animsition').animsition({
  inClass: 'fade-in',
  outClass: 'fade-out',
  inDuration: 800,
  outDuration: 300,
  linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([data-featherlight="image"])',
  // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
  loading: true,
  loadingParentElement: 'html', // animsition wrapper element
  loadingClass: 'animsition-loading',
  loadingInner: '', // e.g '<img src="loading.svg" />'
  timeout: false,
  timeoutCountdown: 5000,
  onLoadEvent: true,
  browser: ['animation-duration', '-webkit-animation-duration'],
  // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
  // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
  overlay: false,
  overlayClass: 'animsition-overlay-slide',
  overlayParentElement: 'body',
  transition: function (url) { window.location.href = url }
})

jQuery('.menu').click(function () {
  jQuery('.menu').toggleClass('open')
  jQuery('.overlay').toggleClass('overlayopen')
  jQuery('body').toggleClass('stop-scrolling')
})

jQuery('.overlay ul li a').click(function () {
  jQuery('.menu').toggleClass('open')
  jQuery('.overlay').toggleClass('overlayopen')
  jQuery('body').toggleClass('stop-scrolling')
})

$('body').scrollspy({ target: ' ', offset: 100 })

function initMap() {
  var myLatLng = {lat: -33.4900965, lng: -70.6184453};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 17,
    styles: [
      {
        elementType: 'geometry',
        stylers: [{color: '#f5f5f5'}]
      },
      {
        elementType: 'labels.icon',
        stylers: [{visibility: 'off'}]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [{color: '#616161'}]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{color: '#f5f5f5'}]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{color: '#bdbdbd'}]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{color: '#eeeeee'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#757575'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#e5e5e5'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9e9e9e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#ffffff'}]
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [{color: '#757575'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#dadada'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#616161'}]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9e9e9e'}]
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{color: '#e5e5e5'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{color: '#eeeeee'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#c9c9c9'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9e9e9e'}]
      }
    ]
  })

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    icon: './img/smartcrop-marker.png',
    title: 'Hello World!'
  });
}

// CONTACT  FORM
jQuery('.contact-form').on("submit", function(e){

    //jQuery('.ajax-loader').show();

    e.preventDefault();

    var url = 'mail.php',
        form = this;

    //jQuery(form).find('[name="fields[code]"]').remove();

    function result(class_key, data){
        setTimeout(function(){
            jQuery('.ajax-loader').hide();
            jQuery('.ajax-result').find(class_key).show().text(data);
        },500);
    }

    jQuery.ajax({
        type: "POST",
        url: url,
        data: jQuery(form).serialize()
    })
    .done(function(data) {
      var result = data.split(';')
      if(result[0] === 'success') {
        toastr.success(result[1], {timeOut: 3000})
        jQuery(form).find("input[type=text], input[type=email], textarea").val('');
      } else {
        toastr.error(result[1], {timeOut: 3000})
      }
    })

});
