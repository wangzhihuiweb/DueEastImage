$(document).ready(function(e) {
	$(".text a").eq(1).addClass("light");
	$(".sign").show().css("margin-left", "124px");
	Getdata();
	var id = 1;
	if (!IsPC()) {
	    window.location.href = "/H5/PreviousPage/Previousdetails.html?id=" + getParamValue("id") + ""
	    return false;
	}
});
var id = getParamValue("id");


function jemp() {
    if (id == "Q34") {//花颜的秘密
        window.location.href = '/LatePage/ChildPages/SecretFlowers/SecretFlowers.html';
    }
    else if (id == "Q37") {//黄小厨的春夏秋冬
        window.location.href = '/LatePage/ChildPages/Huangxiaochu/Huangxiaochu.html';
    }
    else if (id == "Q33") {//奇葩说
        window.location.href = '/LatePage/ChildPages/WonderfulSaid/WonderfulSaid.html';
    }
    else if (id == "Q101") {//来吧，开饭吧
        window.location.href = '/LatePage/ChildPages/Warrior/Warrior.html';
    }
    else {
        window.location.href = "../Work/Work.html?pid=" + id;
    }
}

function Getdata() {
	$.ajax({
		type: "GET",
		url: "/Work/json/Previous.json?201712251",
		data: {},
		async: true,
		dataType: "text",
		success: function(data) {
			var json = eval(data);
			$.each(json, function(key, item) {
			    if (item.Id == id) {
			        
			        $(".name").html(item.active);
			        document.title = item.active;
			        var str = "<div class='videoPic'><img src='images/videopic.png' /></div>" + item.flashitem;
			        $(".Video").html(str)
			        return;


				//if (id == "Q6") {
			    //        $(".name").html(item.active);
			    //        var str = "<img src=\"../Work/images/Previous/work06.png\" style=\"height: 100%;\">"
			    //        $(".Video").html(str);
				//    $(".Video").css("text-align","center");
			    //        return;
			    //    }
			    //    if (id == "Q2") {
			    //        $(".name").html(item.active);
			    //        //                  $(".client").html(item.client);
			    //        var str = "<div class='videoPic'><img src='images/videopic.png' /></div>" 
			    //        $(".Video").html(str)
			    //        return;
			    //    }
					//              	<source src="" type="video/mp4"></source>
					//                  $("#myVideo1 img").attr("poster", "../Work/" + item.img2);
					//					$("#myVideo1").attr("poster", "../Work/"+item.img2);
					//					$("#myVideo1").html("<source src='../Work/"+item.videourl+"'></source>当前浏览器不支持 video直接播放，点击这里下载视频： <a href='../Work/"+item.videourl+"'>下载视频</a>")
					//					$("#myVideo1").attr("src", "../Work/"+item.videourl);
					$(".name").html(item.active);
			        //                  $(".client").html(item.client);
					var sposter = "";
					if (item.img2 != undefined && item.img2 != "" && item.img2 != null)
					{
					    sposter = "poster='../Work/" + item.img2 + "'";
					}
					var str = "<div class='videoPic'><img src='images/videopic.png' /></div><video id='myVideo1' controls autoplay " + sposter + "  width='1000' height='563'><source src='" + item.videourl + "'></source>当前浏览器不支持 video直接播放，点击这里下载视频： <a href='" + item.videourl + "'>下载视频</a></video>"
					$(".Video").html(str)
					var video = document.getElementById("myVideo1");

					//点击播放
					$(video).on("click", function() {
						playpause()
					})
					$(video).parent().find(".videoPic").on("click", function() {
							playpause()
						})
						//播放结束
					$(video).on('ended', function() {
						video.pause();
						$(video).parent().find(".videoPic").css({
							"display": "block"
						})
					});

					//点击开始、暂停fun
					function playpause() {
						if(video.paused || video.ended) {
							video.play();
							$(video).parent().find(".videoPic").css({
								"display": "none"
							})
						} else {
							video.pause();
							$(video).parent().find(".videoPic").css({
								"display": "block"
							})

						}

					}
				}
			});

		}
	});
}