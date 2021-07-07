$('.slider').slick({
  arrows: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  // adaptiveHeight: true,
  responsive: [{
          breakpoint: 850,
          settings: {
              slidesToShow: 2
          }
      },
      {
          breakpoint: 650,
          settings: {
              slidesToShow: 1,
              arrows: true
          }
      }
  ]
});