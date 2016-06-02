$(document).ready(function(){
	$('a').click(animateScroll);
	$("#portada").height(screenHeight());
	$(window).resize(function(){
		$("#portada").height(screenHeight());
	});
	$("#caja").box3d();
	$('.tubos').flipster({
		buttons: true,
		start: 1,
		scrollwheel: false,
		style: 'flat',
		spacing: 0
	});
	$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
	    event.preventDefault();
	    $(this).ekkoLightbox({
	    	"left_arrow_class": "fa fa-chevron-left",
			"right_arrow_class": "fa fa-chevron-right"
	    });
	});
});


function barsDisapear(){
	$("#nav-bar-stats").remove();
	$("#mobile-horizontal-menu").remove();
	//$("#top-bar-wrapper").remove();
	//$("#mobilemenu").remove();
}
function screenHeight(){
	var height = $(window).height();
	return height - 60;
}
function animateScroll(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1500);
    return false;
}

