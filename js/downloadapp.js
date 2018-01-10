$('.img-down-sh').on('click', function() {
	aixuepaiDown('sh');
})
$('.img-down-xp').on('click', function() {
	aixuepaiDown('xp');
})

//获取终端的相关信息
function aixuepaiDown(status) {
	var Terminal = {
		// 辨别移动终端类型
		platform: function() {
			var u = navigator.userAgent,
				app = navigator.appVersion;
			return {
				// android终端或者uc浏览器
				android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
				// 是否为iPhone或者QQHD浏览器
				iPhone: u.indexOf('iPhone') > -1,
				// 是否iPad
				iPad: u.indexOf('iPad') > -1,
				// 是否是通过微信的扫一扫打开的
				weChat: u.indexOf('MicroMessenger') > -1
			};
		}(),
		// 辨别移动终端的语言：zh-cn、en-us、ko-kr、ja-jp...
		language: (navigator.browserLanguage || navigator.language).toLowerCase()
	}

	// 根据不同的终端，跳转到不同的地址
	var theUrl = '';

	if(Terminal.platform.android && Terminal.platform.weChat) {
		theUrl = 'wxdown.htm'
	} else if(Terminal.platform.android) {
		android(status);
		return;
	} else if(Terminal.platform.iPhone && Terminal.platform.weChat) {
		theUrl = 'wxdown.htm?type='+status;
			//			theUrl='http://a.app.qq.com/o/simple.jsp?pkgname=com.zhiduan.crowdclient';
	} else if(Terminal.platform.iPhone) {
		iosCheck(status);
		return;
	}

	location.href = theUrl;
}

function android(type) {
	if(type == 'xp') {
		window.location.href = "zdtp://openaixuepaizb";
		window.setTimeout(function() {
			window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.zhiduan.crowdclient";
		}, 2000);
	} else if(type == 'sh') {
		window.location.href = "zdtp://openaixuepaizb";
		window.setTimeout(function() {
			window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.example.zbclient";
		}, 2000);
	}

};

function iosCheck(type) {
	var ifr = document.createElement("iframe");
	if(type == 'xp') {
		ifr.src = "aixuepai://";
		ifr.style.display = "none";
		document.body.appendChild(ifr);
		window.setTimeout(function() {
			document.body.removeChild(ifr);
			window.location.href = "https://itunes.apple.com/us/app/ai-xue-pai-xiao-pai-ban/id1125896647?mt=8"; /***下载app的地址***/
		}, 2000)
	} else if(type == 'sh') {
		ifr.src = "zhiduan://";
		ifr.style.display = "none";
		document.body.appendChild(ifr);
		window.setTimeout(function() {
			document.body.removeChild(ifr);
			window.location.href = "https://itunes.apple.com/us/app/ai-xue-pai-shang-hu-ban/id1086379283?mt=8"; /***下载app的地址***/
		}, 2000)
	}

};