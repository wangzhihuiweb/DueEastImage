$(document).ready(function(e) {
	$(".text a").eq(1).addClass("light");
	$(".sign").show().css("margin-left", "124px");
	Getdata();
	var id = 1;

});

function jemp(){
		window.location.href='../LatePage/ChildPages/WonderfulSaid/WonderfulSaid.html';
}
var id = "Q33";

function Getdata() {
	$.ajax({
		type: "GET",
		url: "../Work/json/Previous.json?20171215",
		data: {},
		async: true,
		dataType: "text",
		success: function(data) {
			var json = eval(data);
			console.log(data)
			$.each(json, function(key, item) {
			    if (item.Id == id) {
				if (id == "Q6") {
			            $(".name").html(item.active);
			            var str = "<img src=\"../Work/images/Previous/work06.png\" style=\"height: 100%;\">"
			            $(".Video").html(str);
				    $(".Video").css("text-align","center");
			            return;
			        }
			        if (id == "Q33") {
			            $(".name").html(item.active);
			            //                  $(".client").html(item.client);
			            var str = 
'<iframe src="http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=85de57310e645e3bd3d3745c4a005ffe&tvId=348961700&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%" frameborder="0" allowfullscreen="true" width="100%" height="100%"></iframe>'
			            $(".Video").html(str)
			            return;
			        }
					//              	<source src="" type="video/mp4"></source>
					//                  $("#myVideo1 img").attr("poster", "../Work/" + item.img2);
					//					$("#myVideo1").attr("poster", "../Work/"+item.img2);
					//					$("#myVideo1").html("<source src='../Work/"+item.videourl+"'></source>当前浏览器不支持 video直接播放，点击这里下载视频： <a href='../Work/"+item.videourl+"'>下载视频</a>")
					//					$("#myVideo1").attr("src", "../Work/"+item.videourl);
					$(".name").html(item.active);
					//                  $(".client").html(item.client);
					var str = "<div class='videoPic'><img src='images/videopic.png' /></div><video id='myVideo1' controls autoplay poster='../Work/" + item.img2 + "' width='1000' height='563'><source src='" + item.videourl + "'></source>当前浏览器不支持 video直接播放，点击这里下载视频： <a href='" + item.videourl + "'>下载视频</a></video>"
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