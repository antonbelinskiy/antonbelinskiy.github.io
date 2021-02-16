$(function () {
    $(document).ready(function () {
        $("#close_btn").hide();
        $(".menu_btn").click(function () {
            $(".dropdown_menu").addClass("active");
            $(".menu_btn").hide();
            $("#close_btn").show()
        });
        $("#close_btn").click(function () {
            $(".dropdown_menu").removeClass("active");
            $("#close_btn").hide();
            $(".menu_btn").show()
        });
        $('.drowpdown_menu-inner').on('swipeup', function () {
            $(".dropdown_menu").removeClass("active");
        });
    });

    $('.slider_inner').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider_arrows slider_arrows-left" src="./img/arrow.svg" alt="Arrow">',
        nextArrow: '<img class="slider_arrows slider_arrows-right" src="./img/arrow.svg" alt="Arrow">',
        dots: true,
        autoplay: true,
        autoplay: false,
    })
});
var sliderBool = false,
    sliderBreakpoint = 770,
    sliderSettings = {
        mobileFirst: true,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: sliderBreakpoint,
            settings: "unslick"
        }]
    };

function sliderInit(sliderElem) {
    if (window.innerWidth <= sliderBreakpoint) {
        if (sliderBool == false) {
            $("" + sliderElem + "").slick(sliderSettings);
            sliderBool = true;
        }
    } else {
        sliderBool = false;
    }
}

// init
sliderInit(".product_list-inner");

// resize
$(window).resize(function () {
    sliderInit(".product_list-inner");
});

$('.header_callback-btn').on('click', function (event) {
    event.preventDefault();
    $('.callback_popup').addClass("active");
});
$('.callback_popup-hide').on('click', function (event) {
    event.preventDefault();
    $('.callback_popup').removeClass("active");
});
$('.callback_popup-close').on('click', function (event) {
    event.preventDefault();
    $('.callback_popup').removeClass("active");
});