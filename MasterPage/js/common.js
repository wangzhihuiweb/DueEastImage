var index;
$(document ).ready(function(e) {
     $(".text a" ).mouseover(function(){
		 index = $( this ).index();
		$( ".sign" ).stop().animate( {"margin-left":124* index },300);
	})
	$(".text").mouseleave(function(){
		$(".text a").each(function(index, element) {
           if($( this ).hasClass("light")){
			 	 index=$( this ).index();	
				 $( ".sign" ).stop().animate( {"margin-left":124* index },300);  
			 }
        });
	});
});
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    //alert(userAgentInfo);//Mozilla/5.0 (Windows NT 6.1; WOW64; rv:46.0) Gecko/20100101 Firefox/46.0
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
    }
    return flag;
}

