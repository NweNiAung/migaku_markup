

$(document).ready(function(){
	/*Page Scroll*/
	$('.page_scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.up-arrow').fadeIn();
		} else {
			$('.up-arrow').fadeOut();
		}
	});
	//test
	//Click event to scroll to top
	$('.up-arrow').click(function(){
		$('html, body').animate({scrollTop : 0},300);
		return false;
	});
});


