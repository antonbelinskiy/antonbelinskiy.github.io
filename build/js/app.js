'use strict';

$(document).ready(function () {
  // mobile nav
  $(document).on('click', '.js-nav-toggle', function (evt) {
    $(this).toggleClass('nav-open');
    $('body').toggleClass('lock');
    $('.header__nav').toggleClass('open');
  }); //anchors

  function anchor(link) {
    let anchor = link.attr('href');
    $('html, body').animate({
      scrollTop: $(anchor).offset().top
    }, 2500);
  }

  $(document).on('click', '.header__nav a', function () {
    anchor($(this));
  });
  $(document).on('click', '.footer__menu a', function () {
    anchor($(this));
  }); //lozad

  lozad('.lozad', {
    load: function (el) {
      el.src = el.dataset.src;

      el.onload = function () {
        el.classList.add('fade');
      };
    }
  }).observe(); //buttons

  $(".btn").mouseenter(function (e) {
    var parentOffset = $(this).offset();
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({
      "left": relX,
      "top": relY
    });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
  });
  $(".btn").mouseleave(function (e) {
    var parentOffset = $(this).offset();
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({
      "left": relX,
      "top": relY
    });
    $(this).prev(".su_button_circle").removeClass("explode-circle");
    $(this).prev(".su_button_circle").addClass("desplode-circle");
  }); //toggler

  $(document).on('click', '.toggler__btn', function (evt) {
    const this_ = $(this);
    const parent = this_.closest('.toggler');
    const overlay = parent.find('.toggler__overlay');
    const inActiveButtons = parent.find('.toggler__btn');
    inActiveButtons.removeClass('active');
    this_.addClass('active');
    console.log(this_);

    if (this_.hasClass('toggler__btn-left')) {
      overlay.css('left', '0');
    } else if (this_.hasClass('toggler__btn-right')) {
      overlay.css('left', '50%');
    }
  });
  SmoothScroll({
    // Scrolling Core
    animationTime: 2000,
    // [ms]
    stepSize: 100,
    // [px]
    // Acceleration
    accelerationDelta: 20,
    // 50
    accelerationMax: 3,
    // 3
    // Keyboard Settings
    keyboardSupport: true,
    // option
    arrowScroll: 50,
    // [px]
    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,
    // Other
    touchpadSupport: true,
    // ignore touchpad by default
    fixedBackground: true,
    excluded: ''
  });
});
//# sourceMappingURL=app.js.map