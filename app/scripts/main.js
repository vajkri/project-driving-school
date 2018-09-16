/*
	Projection by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

  // Breakpoints.
  skel.breakpoints({
    xlarge:	'(max-width: 1680px)',
    large:	'(max-width: 1280px)',
    medium:	'(max-width: 980px)',
    small:	'(max-width: 736px)',
    xsmall:	'(max-width: 480px)'
  });

  $(function() {

    var	$window = $(window),
      $body = $('body');

    // Disable animations/transitions until the page has loaded.
    $body.addClass('is-loading');

    $window.on('load', function() {
      window.setTimeout(function() {
        $body.removeClass('is-loading');
      }, 100);
    });

    // Prioritize "important" elements on medium.
    skel.on('+medium -medium', function() {
      $.prioritize(
        '.important\\28 medium\\29',
        skel.breakpoint('medium').active
      );
    });

    // Off-Canvas Navigation.

    // Navigation Panel.
    $(
      '<div id="navPanel">' +
      $('#nav').html() +
      '<a class="navPanel__close fa fa-close" href="#navPanel"></a>' +
      '</div>'
    )
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: 'left'
    });

    // Fix: Remove transitions on WP<10 (poor/buggy performance).
    if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
      $('#navPanel')
      .css('transition', 'none');


    // Swiper sliders
    var swiperCar = new Swiper('.js-swiper-car', {
      initialSlide: 0,
      slidesPerView: 'auto',
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    var swiperReviews = new Swiper('.js-swiper-reviews', {
      initialSlide: 0,
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 6000,
      },
      loop: true,
      breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        980: {
          slidesPerView: 2
        }
      }
    });

    // Scroll events
    var debounce_timer;
    $(window).scroll(function() {
      if(debounce_timer) {
        window.clearTimeout(debounce_timer);
      }

      debounce_timer = window.setTimeout(function() {
        if($(window).scrollTop()) {
          $('body').addClass('has-scrolled')
        } else {
          $('body').removeClass('has-scrolled')
        }
      }, 50);
    });



  });

})(jQuery);
