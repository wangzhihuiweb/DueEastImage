$(document).ready(function (e) {
	$(".Footer").css("display","none")
    $(".text a").eq(1).addClass("light");
    $(".sign").show().css("margin-left", "124px");
	 $(".fix").css("top", "32px");
	 //获取传过来的的ID
	 pid=getParamValue("pid");
	//console.log(pid);
	onjump();
	

	if (!IsPC()) {
	    window.location.href = '/H5/PreviousPage/PreviousPage.html'
	    return false;
	}

});
$(window).scroll(function () {	
    scrollTop = $(window).scrollTop();
    $(".fix").css("top", "32px");
	$(".pace").css("position","fixed");	
});
//前期
/*function EarlierStage(a) {

    $(".LaterStage").css("display", "none");
    $(".EarlierStage").css("display", "none");
    $(".hide").css("display", "none");
    $(".Work_tit img").fadeOut();
    
    //$(a).find("div").css("display", "none").parent().siblings().find("div").css("display", "none");
    $(a).css("border-right", "0");
    $(".Work_Box").css("height", "2250px");
    $(a).siblings().animate({ "right": "10px", "width": "101px", "top": "0" }, 800);
    $(a).animate({ "left": "230px", "width": "500px" }, 800, function () {
        $(".EarlierStage").css("display", "block");
        Earlier();
       
    })
}
//后期
function LaterStage(a) {
    $(".LaterStage").css("display", "none");
    $(".EarlierStage").css("display", "none");
    $(".hide").css("display", "none");
    $(".Work_tit img").fadeOut();
    //$(a).find("div").css("display", "none").parent().siblings().find("div").css("display", "none");
    $(".Work_Box").css("height", "1250px");
    $(a).siblings().animate({ "left": "10px", "width": "101px", "border-right": "0", "top": "0" }, 800);
    $(a).animate({ "right": "230px","width": "499px" }, 800, function () {
        $(".LaterStage").css("display", "block");
        Late();
      

        })
}*/

//前期
function EarlierStage(a) {
    $(".LaterStage").css("display", "none");
$("#worktitleid").css("display", "none");
    $(".EarlierStage").css("display", "none")
    $(".Work_tit img").fadeOut(500, function () {
        $(this).parent().stop().animate({ "height": "122px", "margin": "0", "padding": "0" }, function () {
            $(".hide").css("display", "none");
            //$(".Work_Box").css("height", "2250px");
            //$(a).find(".img2").css("width", "69px")
            //$(a).siblings().find(".img3").css("width", "55px")
			$("#after .h3").animate({"font-size":"23px"})	
            $(a).find("div").css("display", "none").parent().siblings().find("div").css("display", "none");
            //$(a).css("border-right", "0")
            $(a).siblings().stop().animate({ "right": "10px", "width": "101px", "top": "-62px" }, 500)
			
            $(a).stop().animate({ "left": "230px", "top": "30px", "width": "500px" }, 500, function () {	
			   $("#before .h3").animate({"font-size":"36px"})
                $(".EarlierStage").css("display", "block");
				$(".LaterStage").css("display", "none");
                Earlier();
                if(pid){
   				$("html,body").stop().animate({ scrollTop: 650 }, 1000);
   				}
            })
        })

    });


}
//后期
function LaterStage(a) {
    $(".LaterStage").css("display", "none");
    $(".EarlierStage").css("display", "none")
$("#worktitleid").css("display", "none");
    $(".Work_tit img").fadeOut(500, function () {
        $(this).parent().stop().animate({ "height": "122px", "margin": "0", "padding": "0"}, function () {
			 $(".hide").css("display", "none");
			 //$(".Work_Box").css("height", "1250px");	
			//$(a).find(".img3").css("width","69px")	
			//$(a).siblings().find(".img2").css("width","55px")
			$("#before .h3").animate({"font-size":"23px"})
			
			$(a).find("div").css("display", "none").parent().siblings().find("div").css("display", "none");	
			$(a).stop().siblings().animate({ "left": "10px", "width": "101px", "border-right": "0", "top": "-62px" }, 500)
			
			$(a).stop().animate({ "right": "230px", "top": "30px", "width": "499px" }, 500, function () {
				   $("#after .h3").animate({"font-size":"36px"})
					$(".LaterStage").css("display", "block");
					$(".EarlierStage").css("display", "none");
					Late();
					if(pid){
						$("html,body").stop().animate({ scrollTop: 680 }, 1000);
					}
			})
		})
		
	});

}


//获取前期信息
function Earlier() {
	$("#Earlier").css("top","1000px");
    $.ajax({
        type: "GET",
        url: "json/Previous.json?20171225",
        data: {},
        async: true,
        dataType: "text",
        success: function (data) {
            var json = eval(data);
            var str = '';
            //console.log(data)
            $.each(json, function (i, val) {
            	if(i  >= 20 ){         		
            	}else{
                str += "<a href='../PreviousPage/PreviousPage.html?id=" + val.Id + "' class='z'><div class='light' style='display:none'><p>" + val.active + "</p></div><img src='" + val.img + "' alt=''/></a>";
               }
            })
            $("#Earlier").html(str);
            $("#Earlier a").each(function (index, element) {
//                $(this).hover(function () {
//                    (this).find("div").stop().fadeIn(500).parent().siblings().find("div").stop().fadeOut(100);
//                }, function () {
//                    $(this).find("div").stop().fadeOut(100);
//                });
                $(this).mouseenter(function () {
                    $(this).find("div").stop().fadeIn(500).parent().siblings().find("div").stop().fadeOut(100);
                });
                $(this).mouseleave(function () {
                    $(this).find("div").stop().fadeOut(100);
                });

            });
            var $container = $('#Earlier');
            TweenMax.to($container, .8, { top: 850, ease: Back.easeOut });
        }
    })
}

function Late() {
	$("#LaterStageQ").css("top","1000px");
    $.ajax({
        type: "GET",
        url: "json/Late.json?v12",
        data: {},
        async: true,
        dataType: "text",
        success: function (data) {
            var json = eval(data);
            var str = '';
			var srimg="<img class='imgsiren'  src='images/zhenrenxiu.png' alt='电视真人秀后期制作'/>";
            //console.log(data)
            $.each(json, function (i, val) {
            	if(val.url!=null){
                str += "<a href='../LatePage"+val.url+"' class='z'><div class='light' style='display:none'><span>" + val.name + "</span></div><img src='" + val.img + "' alt=''/></a>";
               }else{
               	str += "<a href='javascript:' class='z'><div class='light' style='display:none'><span>" + val.name + "</span></div><img src='" + val.img + "' alt=''/></a>";
               }
            })
			
            $("#Late").html(srimg+str);
            $("#Late a").each(function (index, element) {
//                $(this).hover(function () {
//                    (this).find("div").stop().fadeIn(500).parent().siblings().find("div").stop().fadeOut(100);
//                }, function () {
//                    $(this).find("div").stop().fadeOut(100);
//                });
                $(this).mouseenter(function () {
                    $(this).find("div").stop().fadeIn(500).parent().siblings().find("div").stop().fadeOut(100);
                });
                $(this).mouseleave(function () {
                    $(this).find("div").stop().fadeOut(100);
                });
            });
			$(".Work_Pic_3d a").each(function (index, element) {
                $(this).mouseenter(function () {
                    $(this).find("div").stop().fadeIn(500).parent().siblings().find("div").stop().fadeOut(100);
                });
                $(this).mouseleave(function () {
                    $(this).find("div").stop().fadeOut(100);
                });
            });
            var $container = $('#LaterStageQ');
            TweenMax.to($container, .8, { top: 850, ease: Back.easeOut });
        }
    })
}
//点击后退回到前期、后期位置
function onjump(){
	if(!pid){
		return;
	}	

	if(pid.slice(1) >=24){
		$("#after").trigger("click");
	}else if(pid==2){
		$("#after").trigger("click");
	}else{
		$("#before").trigger("click");
	}

	
}

//获取地址栏参数
function getParamValue(name) {
    var paramsArray = getUrlParams();
    if (paramsArray != null) {
        for (var i = 0; i < paramsArray.length; i++) {
            for (var j in paramsArray[i]) {
                if (j == name) {
                    return paramsArray[i][j];
                }
            }
        }
    }
    return null;
}
function getUrlParams() {
    var search = window.location.search;
    // 写入数据字典
    var tmparray = search.substr(1, search.length).split("&");
    var paramsArray = new Array;
    if (tmparray != null) {
        for (var i = 0; i < tmparray.length; i++) {
            var reg = /[=|^==]/;    // 用=进行拆分，但不包括==
            var set1 = tmparray[i].replace(reg, '&');
            var tmpStr2 = set1.split('&');
            var array = new Array;
            array[tmpStr2[0]] = tmpStr2[1];
            paramsArray.push(array);
        }
    }
    // 将参数数组进行返回
    return paramsArray;
}