// ----- SIDE MENU NAV 開開關關 

$(function () {
	var nav = $('#nav-link-wrap')
	var navFlag = $('#nav-link-wrap ul.nav-link-box + h2')
	var navBlack = $('#nav-link-wrap > .black')
	navFlag.click(function() {
		nav.toggleClass('open');
	})
	navBlack.click(function () {
		nav.toggleClass('open');
	})		
})

// ----- ASIDE NAV MENU 商品分類與商品詳細頁 左側邊欄 開開關關 

$(function () {
	var asideBtn = $('#aside-nav ul.aside-menu-box > li > h5')
	asideBtn.click(function () {
		$(this).next('ul.aside-menu-block').stop(true,false).slideToggle(300);
		$(this).parent('li').toggleClass('open').siblings('li').removeClass('open').find('ul.aside-menu-block').slideUp(300);
	})
})

// ----- 商品詳細頁、購物車頁 數量選選與控製 

$(function () {
	var countBox = $('.count-edit-box');
	var countLess = countBox.children('.less-btn');
	var countAdd = countBox.children('.add-btn');

	countAdd.click(function () {
		// 按加
		var countEdit = $(this).siblings('input.count-edit');
		// 替兄弟 INPUT 命名
		var nowVal = Number(countEdit.val());
		// 先抓目前的值
		var newVal = nowVal+1;
		// 設定新值 是舊加值加1
		countEdit.val(newVal);
		// 新值取代舊值
	})	
	countLess.click(function () {
		//按減減
		var countEdit = $(this).siblings('input.count-edit');
		// 替兄弟 INPUT 命名
		var nowVal = Number(countEdit.val());
		// 先抓出目前的值
		var newVal = nowVal-1;
		// 設定新值 是舊值減 1
		if(nowVal>=2){
			//如果現在的值大於1小於2，才會執行減法
			countEdit.val(newVal);
		}
	})
});

// ----- 商品詳細頁 圖片控制切換 

$(function () {
	var mainPhoto = $('#product-photo-box .main-photo-block img.main-photo')
	var viewPhoto = $('#product-photo-box .view-photo-block ul li img')
	viewPhoto.click(function () {
		// 點擊小圖之後運作
		var nowImgSrc = $(this).attr('src');
		// 先抓出小圖的網址 設定成一個值
		mainPhoto.attr('src' , nowImgSrc);
		// 再把大圖的網址 用這個值替代
	})
})

// ----- 商品詳細頁 詳細內容打開關上 

$(function () {
	var detailBtn = $('section#product-detail div#detail-toggle-btn');
	var detailBox = $('section#product-detail div#product-detail-box');
	detailBtn.click(function () {
		$(this).toggleClass('open');
		detailBox.stop(true,false).slideToggle(600);
	})
})





