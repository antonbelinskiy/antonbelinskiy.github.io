$(window).scroll(function() {
  var top = $(document).scrollTop();
  if (top < 1) $(".header").removeClass('fixed');
  else $(".header").addClass('fixed');
});
$('.burger__menu').on('click', function() {
  $('.header__menu').toggleClass('active');
  $('.header__inner').toggleClass('box');
  $('.mobile__menu-bg').toggleClass('active');
});
$('.mobile__menu-bg').on('click', function() {
  $(this).removeClass('active');
  $('.header__inner').removeClass('box');
  $('.header__menu').removeClass('active');
});

$('.notification__close-button').on('click', function(){
  $('.notification').removeClass('active');
});

//tables on main page

$('#table_all .coins__table-title').on('click', function(e) {
  $(this).addClass("active");
  $("#table_all .coins__table-title").not(this).removeClass("active");
  e.preventDefault();
});
$('.coins__table-day').on('click', function(e) {
  $(this).addClass("active");
  $(".coins__table-day").not(this).removeClass("active");
  e.preventDefault();
});
$('.coins__table-showall').on('click', function(e) {
  $(this).toggleClass("active");
  $(".coins__table-showall").not(this).removeClass("active");
  e.preventDefault();
});

//по умолчанию
$('.presale__title').addClass('active');
$('.presale__form').addClass('active');


$('.presale__title').on('click', function(e) {
  $(this).addClass("active");
  $('.presale__form').addClass('active');
  $(".form__choose > a").not(this).removeClass("active");
  $(".flaunch__form").removeClass("active");
  e.preventDefault();
});
$('.flaunch__title').on('click', function(e) {
  $(this).addClass("active");
  $('.flaunch__form').addClass('active');
  $(".form__choose > a").not(this).removeClass("active");
  $('.presale__form').removeClass('active');
  e.preventDefault();
});



//animations

const animItems = document.querySelectorAll('.anim_item');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 100;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_no_hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }


  setTimeout(() => {
    animOnScroll();
  }, 0);
}