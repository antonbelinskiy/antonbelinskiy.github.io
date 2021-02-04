$(function () {
    $('.product_list-inner').slick({
        arrows: false,
        dots: true, 
        responsive: [
            {
                breakpoint: 1000000,
                settings: "unslick"
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                }
            }
        ]
    })   
        $(document).ready(function () {
            $("#close_btn").hide();
            $(".menu_btn").click(function () {
                $(".dropdown_menu").show();
                $(".menu_btn").hide();
                $("#close_btn").show()
            });
            $("#close_btn").click(function () {
                $(".dropdown_menu").hide();
                $("#close_btn").hide();
                $(".menu_btn").show()
            });
        });
    });
$(function (){
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
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

   