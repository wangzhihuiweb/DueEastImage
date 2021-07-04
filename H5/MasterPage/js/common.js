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
