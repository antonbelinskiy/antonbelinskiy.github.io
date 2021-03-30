$(function () {
    $('.projects_slider').slick({
        autoplay: true,
        arrows: false,
        infinite: true,
        autoplaySpeed: 2000,
    })
});

// $(function() {
// 	var tab = $('.blogs_inner .blogs_tabs > .blogs_tabs-item'); 
// 	tab.hide().filter(':first').show(); 
// 	$('.blogs_inner .blogs_tabs a').click(function(){
// 		tab.hide(); 
// 		tab.filter(this.hash).show(); 
// 		$('.blogs_inner .blogs_tabs a').removeClass('active');
// 		$(this).addClass('active');
// 		return false;
// 	}).filter(':first').click();

// 	$('.tabs-target').click(function(){
// 		$('.blogs_inner .blogs_tabs a[href=' + $(this).data('id')+ ']').click();
// 	});
// });

if (document.documentElement.clientWidth > 920) {


	$(function() {
	 var tab = $('.blogs_tabs-item'); 
	 tab.hide().filter(':first').show(); 
	 $('.blogs_tabs a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('.blogs_tabs a').removeClass('active');
		$(this).addClass('active');
		return false;
	 }).filter(':first').click();
	 $('.tabs-target').click(function(){
		$('.blogs_tabs a[href=' + $(this).data('id')+ ']').click();
	 });
	});
	} 
	else {
	 (function($) {
			$('.blogs_tabs a').click(function(j) {
					var dropDown = $(this).closest('li').find('.blogs_tabs-item');
					$(this).closest('.blogs_tabs').find('.blogs_tabs-item').not(dropDown).slideUp();
					if ($(this).hasClass('active')) {
							$(this).removeClass('active');
					} else {
							$(this).closest('.blogs_tabs').find('a.active').removeClass('active');
							$(this).addClass('active');
					}
					dropDown.stop(false, true).slideToggle();
					j.preventDefault();
			});
	})(jQuery);
	};
