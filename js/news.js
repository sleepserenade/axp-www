//$('.new-img').on('mouseover', function() {
//	$(this).addClass('animated tada infinite');
//})
//
//$('.new-img').on('mouseout', function() {
//	$(this).removeClass('animated tada infinite');
//})

var imgMaskWidth = $($(".new-img")[0]).width() + "px";
var imgMaskHeight = $($(".new-img")[0]).height() + "px";
for(var i = 0; i < $(".img-mask").length; i++) {
	$($(".img-mask")[i]).css({
		"height": imgMaskHeight,
		"width": imgMaskWidth
	});
}
//这个onresize是页面大小变化时自动调用的，耗cpu，但是不用没办法，因为你图片大小是自适应的。
window.onresize = function() {
	var imgMaskWidth = $($(".new-img")[0]).width() + "px";
	var imgMaskHeight = $($(".new-img")[0]).height() + "px";
	for(var i = 0; i < $(".img-mask").length; i++) {
		$($(".img-mask")[i]).css({
			"height": imgMaskHeight,
			"width": imgMaskWidth
		});
	}
}
$(".div-img-small").on({
	mouseover: function() {
		$(this).find(".news-info p:first-child").css("color", "#EA4452");
		$(this).find(".img-mask").css("opacity", "1");
//	$(this).addClass('animated tada infinite');
		
	},
	mouseout: function() {
		$(this).find(".news-info p:first-child").css("color", "#000");
		$(this).find(".img-mask").css("opacity", "0");
//	$(this).removeClass('animated tada infinite');
		
	}
})


//$('#demo1').videoUI();
$('#demo1').videoUI({
  'autoHide':false,
  'volumeMedia': 1
});