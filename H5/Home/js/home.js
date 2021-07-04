$(function () {
    //alert(0)
    if (IsPC()) {
        window.location.href = '/Home/home.html'
        return false;
    }

//	alert($("header").height())
	var winWIdth=$(window).width();
//	alert((winWIdth/750)*73)
//	$(".home .homeBox").width($(".homeBox img:eq(0)").width())
	$(".home").height($(window).height())
	$(".home").width($(window).width())
    //$(".homeBox img").css({"margin-left":-(($(window).height() / 1334) * 750 -$(window).width())/2})
	
	$("nav ul li").find("a").removeClass("light")
		$("nav ul li a:eq(0)").addClass("light")
	
//	$(".homeBox").css({"top":((winWIdth/750)*73)})
//	$("body,html").css({"overflow":"hidden","width":"100%","height":"100%"})
	
//	Q(196);Early stage
//	$(".home .homeBox img:eq(0)").css({"top":Q(196),"left":Q(112),"width":Q(528),"height":Q(411)})
//	$(".home .homeBox img:eq(1)").css({"top":Q(18),"left":Q(108),"width":Q(108),"height":Q(59)})
//	$(".home .homeBox img:eq(2)").css({"top":Q(108),"left":Q(53),"width":Q(104),"height":Q(85)})
//	$(".home .homeBox img:eq(3)").css({"top":Q(226),"left":Q(8),"width":Q(155),"height":Q(99)})
//	$(".home .homeBox img:eq(4)").css({"top":Q(357),"left":Q(23),"width":Q(101),"height":Q(85)})
//	$(".home .homeBox img:eq(5)").css({"top":Q(500),"left":Q(23),"width":Q(100),"height":Q(78)})
//	
//	$(".home .homeBox img:eq(6)").css({"top":Q(0),"left":Q(280),"width":Q(91),"height":Q(103)})
//	$(".home .homeBox img:eq(7)").css({"top":Q(114),"left":Q(202),"width":Q(122),"height":Q(100)})
//	$(".home .homeBox img:eq(8)").css({"top":Q(8),"left":Q(427),"width":Q(92),"height":Q(105)})
//	$(".home .homeBox img:eq(9)").css({"top":Q(124),"left":Q(366),"width":Q(93),"height":Q(58)})
//	$(".home .homeBox img:eq(10)").css({"top":Q(35),"left":Q(606),"width":Q(100),"height":Q(87)})
//	$(".home .homeBox img:eq(11)").css({"top":Q(98),"left":Q(527),"width":Q(99),"height":Q(91)})
//	
//	$(".home .homeBox img:eq(12)").css({"top":Q(162),"left":Q(664),"width":Q(87),"height":Q(64)})
//	$(".home .homeBox img:eq(13)").css({"top":Q(219),"left":Q(567),"width":Q(113),"height":Q(45)})
//	$(".home .homeBox img:eq(14)").css({"top":Q(295),"left":Q(630),"width":Q(66),"height":Q(59)})
//	$(".home .homeBox img:eq(15)").css({"top":Q(361),"left":Q(671),"width":Q(53),"height":Q(53)})
//	$(".home .homeBox img:eq(16)").css({"top":Q(438),"left":Q(646),"width":Q(87),"height":Q(64)})
//	$(".home .homeBox img:eq(17)").css({"top":Q(531),"left":Q(664),"width":Q(83),"height":Q(95)})
//	
////	$(".home .homeBox img:eq(18)").css({"top":Q(604),"left":Q(664),"width":Q(87),"height":Q(64)})
//	$(".home .homeBox img:eq(19)").css({"top":Q(661),"left":Q(51),"width":Q(76),"height":Q(73)})
//	$(".home .homeBox img:eq(20)").css({"top":Q(718),"left":Q(125),"width":Q(131),"height":Q(82)})
//	$(".home .homeBox img:eq(21)").css({"top":Q(798),"left":Q(59),"width":Q(100),"height":Q(64)})
//	$(".home .homeBox img:eq(22)").css({"top":Q(887),"left":Q(84),"width":Q(119),"height":Q(86)})
//	$(".home .homeBox img:eq(23)").css({"top":Q(693),"left":Q(280),"width":Q(76),"height":Q(86)})
//	
//	$(".home .homeBox img:eq(24)").css({"top":Q(814),"left":Q(221),"width":Q(126),"height":Q(82)})
//	$(".home .homeBox img:eq(25)").css({"top":Q(949),"left":Q(259),"width":Q(73),"height":Q(56)})
//	$(".home .homeBox img:eq(26)").css({"top":Q(896),"left":Q(331),"width":Q(78),"height":Q(72)})
//	$(".home .homeBox img:eq(27)").css({"top":Q(716),"left":Q(425),"width":Q(108),"height":Q(72)})
//	$(".home .homeBox img:eq(28)").css({"top":Q(774),"left":Q(382),"width":Q(98),"height":Q(82)})
//	$(".home .homeBox img:eq(29)").css({"top":Q(707),"left":Q(547),"width":Q(95),"height":Q(106)})
//	
//	$(".home .homeBox img:eq(30)").css({"top":Q(837),"left":Q(472),"width":Q(101),"height":Q(41)})
//	$(".home .homeBox img:eq(31)").css({"top":Q(900),"left":Q(447),"width":Q(73),"height":Q(56)})
//	$(".home .homeBox img:eq(32)").css({"top":Q(704),"left":Q(650),"width":Q(73),"height":Q(96)})
//	$(".home .homeBox img:eq(33)").css({"top":Q(810),"left":Q(580),"width":Q(109),"height":Q(61)})
//	$(".home .homeBox img:eq(34)").css({"top":Q(896),"left":Q(566),"width":Q(96),"height":Q(105)})
    //	$(".home .homeBox img:eq(35)").css({"top":Q(707),"left":Q(547),"width":Q(95),"height":Q(106)})
		
})







//function Q(obj){
//	var width = $(window).width();	
//	var height=$(window).height();
//	
////	console.log(width/750)
////	console.log(height/1248)
////	console.log(((width/(height/1248))/750))
//	
////	console.log(((height/(width/750))/1248))
//	var decimal=0;	
//	if(((width/(height/1248))/750) > ((height/(width/750))/1248)){
//		decimal=((height/(width/750))/1248)
//	}else{
//		decimal=((width/(height/1248))/750)
//	}
////	
////    if(height>750){
////    	height=750;
////    }
////	console.log(decimal)
//	var num=(parseInt(obj)/750).toFixed(20) * width;
//	//return num*((height/(width/750))/1248)+"px";
////	return num*((width/(height/1248))/750)+"px";
//	return num*decimal+"px";
//}
//
//var isfalse=true;
//var startx, starty;
//    //获得角度
//    function getAngle(angx, angy) {
//        return Math.atan2(angy, angx) * 180 / Math.PI;
//    };
// 
//    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
//    function getDirection(startx, starty, endx, endy) {
//        var angx = endx - startx;
//        var angy = endy - starty;
//        var result = 0;
// 
//        //如果滑动距离太短
//        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
//            return result;
//        }
// 
//        var angle = getAngle(angx, angy);
//        if (angle >= -135 && angle <= -45) {
//            result = 1;
//        } else if (angle > 45 && angle < 135) {
//            result = 2;
//        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
//            result = 3;
//        } else if (angle >= -45 && angle <= 45) {
//            result = 4;
//        }
// 
//        return result;
//    }
//    //手指接触屏幕
//    document.addEventListener("touchstart", function(e) {
//        startx = e.touches[0].pageX;
//        starty = e.touches[0].pageY;
//    }, false);
//    //手指离开屏幕
//    document.addEventListener("touchend", function(e) {
//        var endx, endy;
//        endx = e.changedTouches[0].pageX;
//        endy = e.changedTouches[0].pageY;
//        var direction = getDirection(startx, starty, endx, endy);
//        switch (direction) {
//            case 0:
////                alert("未滑动！");
//                break;
//            case 1:
//				
////                alert("向上！")
//				if(isfalse==true){					
//					$("body,html").css({"overflow-y":"visible","width":"100%","height":"auto"}).stop().animate({ "scrollTop": "1000%" });
//					$("nav").height($(document).height()-6)
//					isfalse=false;
//				}
//				
//                break;
//            case 2:
//				
////                alert("向下！")
//				$("body,html").css({"overflow":"hidden","width":"100%","height":"100%"}).stop().animate({ "scrollTop":"1px" });
//				$("nav").height($(document).height()-6)
//				isfalse=true;
//                break;
//            case 3:
////                alert("向左！")
//                break;
//            case 4:
////                alert("向右！")
//                break;
//            default:
//        }
//    }, false);
