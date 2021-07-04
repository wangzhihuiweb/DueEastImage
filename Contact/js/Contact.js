$(document).ready(function (e) {
    $(".text a").eq(3).addClass("light");
    $(".sign").show().css("margin-left", "372px");
    //	$(".Blogroll div").html("<a href='javascript:'><img border='0' src='../MasterPage/images/Blogroll3.png' alt=''/></a><a href='javascript:'><img border='0' src='../MasterPage/images/Blogroll2.png' alt=''/></a><a href='javascript:'><img border='0' src='../MasterPage/images/Blogroll4.png' alt=''/></a>");
    //	$(".Blogroll div a:last").css("margin-right","0");
    if ($("body").height() > 1186) {
        $("body").css("position", "relative");
        $(".Footer_position").css("position", "absolute");
        $(".Footer_position").css("bottom", "0").css("left", "0").css("right", "0");
    }
    if (!IsPC()) {
        window.location.href = '/H5/Contact/Contact.html'
        return false;
    }
});