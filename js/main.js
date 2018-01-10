$('.b-ios').on('mousemove', function() {
	$(this).attr("src", "images/main/ios-1.png");
})
$('.b-ios').on('mouseout', function() {
	$(this).attr("src", "images/main/ios.png");
})
$('.b-android').on('mousemove', function() {
	$(this).attr("src", "images/main/android-1.png");
})
$('.b-android').on('mouseout', function() {
	$(this).attr("src", "images/main/android.png");
})

/*
$('.b-ios').on('mouseover', function() {
	$(this).addClass('animated pulse ');
})

$('.b-ios').on('mouseout', function() {
	$(this).removeClass('animated pulse ');
})
$('.b-android').on('mouseover', function() {
	$(this).addClass('animated pulse ');
})

$('.b-android').on('mouseout', function() {
	$(this).removeClass('animated pulse ');
})

$('.img-pic-22').on('mouseover', function() {
	$(this).addClass('animated tada infinite');
})

$('.img-pic-22').on('mouseout', function() {
	$(this).removeClass('animated tada infinite ');
})

$('.img-pic-2').on('mouseover', function() {
	$(this).addClass('animated bounce infinite');
})

$('.img-pic-2').on('mouseout', function() {
	$(this).removeClass('animated bounce infinite ');
})

$('.img-pic-4').on('mouseover', function() {
	$(this).addClass('animated pulse infinite');
})

$('.img-pic-4').on('mouseout', function() {
	$(this).removeClass('animated pulse infinite ');
})

$('.img-pic-8').on('mouseover', function() {
	$(this).addClass('animated-2 shake infinite');
})

$('.img-pic-8').on('mouseout', function() {
	$(this).removeClass('animated-2 shake infinite ');
})

$('.img-pic-9').on('mouseover', function() {
	$(this).addClass('animated rubberBand infinite');
})

$('.img-pic-9').on('mouseout', function() {
	$(this).removeClass('animated rubberBand infinite ');
})

$('.img-pic-14').on('mouseover', function() {
	$(this).addClass('animated-2 flash infinite');
})

$('.img-pic-14').on('mouseout', function() {
	$(this).removeClass('animated-2 flash infinite ');
})
**/

$('.cose').on('click', function() {
	$('.mask').hide();
})

$('.b-ios').on('click', function() {
	$('.mask').fadeIn();
	$('.mask-ios').fadeIn();
	$('.mask-android').hide();

})

$('.b-android').on('click', function() {
	$('.mask').fadeIn();
	$('.mask-android').fadeIn();
	$('.mask-ios').hide();

})
$('.d-android').on('click', function() {
	$('.mask').fadeOut()
	$('.mask-android').fadeOut();
	$('.mask-ios').hide();

})

$('.d-ios').on('click', function() {
	$('.mask').fadeOut();
	$('.mask-ios').fadeOut();
	$('.mask-android').hide();
})

window.onload = function() {
	var u = navigator.userAgent;
	if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机
//		alert("安卓手机");
//		$('.d-ios-sh').attr('href', "https://appsto.re/cn/tunWab.i");
//		$('.d-ios-xp').attr('href', "https://appsto.re/cn/hh9gdb.i");
		// window.location.href = "mobile/index.html";
	} else if(u.indexOf('iPhone') > -1) { //苹果手机
		// window.location.href = "mobile/index.html";
//		alert("苹果手机");
		$('.d-ios-sh').attr('href', "https://appsto.re/cn/tunWab.i");
		$('.d-ios-xp').attr('href', "https://appsto.re/cn/hh9gdb.i");
	}
}