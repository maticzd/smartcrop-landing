/* Sticky menu animations */
jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > 50) {
        jQuery(".navbar-fixed-top").addClass("navbar-scroll");
    }
    else {
        jQuery(".navbar-fixed-top").removeClass("navbar-scroll");
    }
});

/* Smooth Scroll */
var scroll = new SmoothScroll('a[href*="#"]', {
  offset: '60px'
});
