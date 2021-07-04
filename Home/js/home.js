$( document ).ready(function(e) {
	$(".text a").eq(0).addClass("light");
	$(".sign").show().css("margin-left","0");
	if (!IsPC()) {
	    window.location.href = '/H5/Home/home.html'
	    return false;
	}

});
