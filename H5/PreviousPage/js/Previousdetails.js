var id = getParamValue("id");
$(function () {

    //$("#zhanwei").css({ "height": (($(window).width() / 750) * 1334 - $(window).height()) })
	$.ajax({
		type: "GET",
		url: "/H5/PreviousPage/js/Previous.json?20180109",
		data: {},
		async: true,
		dataType: "text",
		success: function(data) {
			var json = eval(data);
			$.each(json, function(key, item) {
			    if (item.Id == id) {
//			        console.log(item.flashitem)
			        $(".Previousdetails h3").html(item.active);
			        document.title = item.active;
//			        var str = "<video src="+item.flashitem+"></video>";
var str=item.flashitem;
			        $(".Previousdetailsvideo").html(str)
			        return;
				}
			});

		}
	});

})