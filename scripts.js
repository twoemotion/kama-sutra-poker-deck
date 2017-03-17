function doResize() {
	var w = $("body").width();
	var src = "images/w400/";
	var sep_h = "27px";
	
	if (w > 500) {
		src = "images/w800/";
		sep_h = "53px";
	}
	
	$(".separator").css({
		"height" : sep_h,
		"background-image" : "url('" + src + "separator.png')"
	});
	
	$("img").each(function( index ) {
		$( this ).attr("src", src + $( this ).attr('id') + ".png");
	});
}

$(window).resize(doResize);
window.onload = doResize;

