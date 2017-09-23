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
    jQuery('.navbar-fixed-top').css('background', 'rgb(55,101,18)')
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
