var flag = true;
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

    // if (flag) {
    //     // alert(0)
    //     loadCss("../../PublicCss/reset.css");
    //     loadScript("../../PublicJS/layer_mobile/layer.js");
    //     loadCss("../../PublicJS/layer_mobile/need/layer.css");

    // };
})(document, window);

$(function(){
	var winWIdthS=$(window).width();
	$("header b").click(function(){
		if(!$(this).hasClass("light")){
			$(this).addClass("light")
			$("nav").addClass("light")
		}else{
			$(this).removeClass("light")
			$("nav").removeClass("light")
		}
		
		
		$("nav").height($(document).height()-(winWIdthS/750)*86)
	})
	var content = document.querySelector("html,body"); 
	content.addEventListener("touchstart",function(e){	
		 var e=e||window.event;		
		var target = $(e.target);
    //console.log(target.closest(".Seize_box").length)
    if (target.closest("header b,header ul").length !== 1) {
        $("nav").removeClass("light")
    }
    e.stopPropagation();
})	

})

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
