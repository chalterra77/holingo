//----- GO TOP BTN -----//

$(function(){

	// 設定 go top btn 觸發之後滑上
	var goTopBtn = $('.go-top-btn');
	goTopBtn.click(function(){
			$('html,body').stop(true).animate({
				scrollTop:0
			} , 600);
		return false;
	});

	// 設定 fix 區塊 
	// 一般隱藏、超過螢幕高度才會出現
	var fixBtnWrap = $('#fix-btn-wrap');
	fixBtnWrap.hide();
	$(window).scroll(function(){
		// console.log($(window).scrollTop());
		// scrollTop 指的就是捲軸高度
		if( $(window).scrollTop() > 300){
			fixBtnWrap.fadeIn(400);
		}else{
			fixBtnWrap.fadeOut(600);
		};
	});
});