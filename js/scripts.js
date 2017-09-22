/* global jQuery, $, SmoothScroll */

/* Sticky menu animations */
jQuery(window).on('scroll', function () {
  if (jQuery(this).scrollTop() > 1) {
    jQuery('.navbar-fixed-top').addClass('navbar-scroll')
  } else {
    jQuery('.navbar-fixed-top').removeClass('navbar-scroll')
  }
})

/* Smooth Scroll */
var scroll = new SmoothScroll('a[href*="#"]', { // eslint-disable-line
  offset: '60px'
})

/* Animsition configuration */
$(document).ready(function () {
  $('.animsition').animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', // animsition wrapper element
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
})
