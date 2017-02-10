function doResize() {
	var w = $("body").width();
	var src = "images/w400/";
	
	$(".image2").css({
		"width" : "100%",
		"float" : "none"
	});
	
	if (w <= 500) {
		src = "images/w400/";
		$(".separator").css({
			"height" : "14px",
			"background-image" : "url('"+src+"separator.png')"
		});
	} else if (w <= 1000) {
		src = "images/w800/";
		$(".separator").css({
			"height" : "28px",
			"background-image" : "url('"+src+"separator.png')"
		});
	} else {
		src = "images/w1280/";
		$(".separator").css({
			"height" : "44px",
			"background-image" : "url('"+src+"separator.png')"
		});
		$(".image2").css({
			"width" : "50%",
			"float" : "left"
		});
	}
	
	$("img").each(function( index ) {
		$( this ).attr("src", src + $( this ).attr('id') + ".png");
	});
}

$(window).resize(doResize);
window.onload = doResize;

