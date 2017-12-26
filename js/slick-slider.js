// ----- SLICK SLIDER 輪播 BANNER 共用 

// -----　以下  購物首頁 大圖輪播 KV BANNER SLIDER -----//
$(function () {
	$('#kv-slider-nav').slick({
		// 這是 NAV 導覽
		slidesToScroll: 3 , 
		variableWidth : true ,
		focusOnSelect: true ,
		slidesToShow: 3,
		draggable: false,
		infinite: false,
		asNavFor: '#kv-slider-main'
	});
	$('#kv-slider-main').slick({
		// 這是主圖
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 1000 ,
		dots : true ,
		asNavFor: '#kv-slider-nav'
	});
})

// -----　以下  購物首頁 本期企畫 -----//

$(function () {

    // 如果視窗小於 768 加上 class
    if($(window).width() < 768) {
		$('#current-plan-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			speed: 600 , 
			// swipe: false , 
			responsive: [
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
					}
				},	
			]
		});
    }

    // 當視窗調整 開始判斷
	$(window).bind("resize", reSize);
	function reSize(){
	    if($(window).width() < 768) {
			// 小於 768加上 class
			$('#current-plan-slider').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 5000,
				speed: 600 , 
				// swipe: false , 
				responsive: [
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 2,
						}
					},	
				]
			});
	    } else if  ($(window).width() > 768)  {
	    	// 大於 768 解除
			$('#current-plan-slider').slick('unslick');
	    }
	}

})

// -----　以下  購物首頁 明星商品 star-commodity -----//

$(function () {
	$('#star-commodity-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 600 , 
		// swipe: false , 
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3,
				}
			},	
			{
				breakpoint: 839,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
			},
		]
	});
})

// -----　以下  購物首頁 影片專欄 video-subject -----//

$(function () {
	$('#video-subject-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 600 , 
		// swipe: false , 
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3,
				}
			},	
			{
				breakpoint: 839,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
			},
		]
	});
})

// -----　以下  產品分類頁 最上方 大圖輪播 -----//
$(function () {
	$('#product-classification-slider-main').slick({
		// 這是主圖
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 1000 ,
		dots : true ,
		// asNavFor: '#kv-slider-nav'
	});
})



