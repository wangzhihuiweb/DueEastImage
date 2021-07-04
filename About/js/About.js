$( document ).ready(function(e) {
	$(".text a").eq(2).addClass("light");
	  $(".sign").css("margin-left","248px");
//	$(".Blogroll div").html("<a href='javascript:'><img border='0' src='../MasterPage/images/Blogroll3.png' alt=''/></a><a href='javascript:'><img border='0' src='../MasterPage/images/Blogroll2.png' alt=''/></a><a href='javascript:'><img border='0' src='../MasterPage/images/Blogroll4.png' alt=''/></a>");
//	$(".Blogroll div a:last").css("margin-right","0");
	  Bankcard(".AboutHead img")
	  if (!IsPC()) {
	      window.location.href = '/H5/About/About.html'
	      return false;
	  }
	 
});

//判断是否需要下一列
function Bankcard(obj) {
    $(obj).each(function (index, element) {
        if (((index + 1) % 7) == 0) {
            $(this).css("margin-right", "0");
        }
    })
}