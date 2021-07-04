$( document ).ready(function(e) {
	$(".text a").eq(1).addClass("light");
	$(".sign").show().css("margin-left", "124px");
	if (!IsPC()) {
	    window.location.href = '/H5/ChildPages/1.html'
	    return false;
	}
});