$(document).ready(function(){
	$("#portada").height(screenHeight());
	$(window).resize(function(){
		$("#portada").height(screenHeight());
	});
	$("#caja").box3d();
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

