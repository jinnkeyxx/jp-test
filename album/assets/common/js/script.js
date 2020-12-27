/*
$(window).on('load', function() {
	$('body').animate({opacity:1}, 2000);
});
*/

$(function () {
	
	/*$('body').animate({opacity:1}, 2000);*/
	
	
	// gnav
	$("#wrapper").append('<div id="nav-bg"></div>');
	$('#header-nav > ul > li.nav').on('mouseover', function() {
		$('#header-nav > ul > li').removeClass('is-current');
		//$('#header-nav > ul > li').removeClass('is-out');
		$(this).addClass('is-current');
		$('body').addClass('dsp-nav-bg');
	});
	$('#header-nav > ul > li').on('mouseout', function() {
		$('#header-nav > ul > li').removeClass('is-current');
		//$('#header-nav > ul > li').addClass('is-out');
		$('body').removeClass('dsp-nav-bg');
	});
	$('#header-nav .close').on('click', function() {
		$('#header-nav > ul > li').removeClass('is-current');
	});
	$('#nav-bg').on('click', function() {
		$('#header-nav > ul > li').removeClass('is-current');
		$('body').removeClass('dsp-nav-bg');
	});
	
	
	
	$("#wrapper").append('<div id="gnav-button"><span><span></span><span></span><span></span></span></div>');
	//$("#wrapper").append('<div id="gnav-panel"><div class="sp-block1"></div><ul class="sp-block2"></ul><div class="sp-block3"></div></div>');
	/*if( $('#header-email').length ){
		$('#header-email > *').clone(true).appendTo('#gnav-panel .sp-block3');
	}
	if( $('#header-lang').length ){
		$('#header-lang > *').clone(true).appendTo('#gnav-panel .sp-block2');
	}
	if( $('#footer-link1').length ){
		$('#footer-link1 > *').clone(true).appendTo('#gnav-panel .sp-block1');
	}*/
	
	$('#gnav-button').on('click', function() {
		$('body').toggleClass('gnav-active');
	});
	$('#gnav-panel, #gnav-panel a').on('click', function() {
		$('body').removeClass('gnav-active');
	});

	// sp subnav
	/*$('#gnav-panel h4 + ul').prev().append('<span class="blt"></span>');
	$('#gnav-panel h4 span').click(function(){
		$(this).parent().stop().toggleClass('on');
		//$(this).parent().next().stop().slideToggle(300);
		if ($(this).parent().next().css('display') == 'none') {
			$(this).parent().next().stop().slideDown(300);
		} else {
			$(this).parent().next().stop().slideUp(300);
		}
		return false;
	});*/
	$('#gnav-panel .block1 li a').append('<span class="lnk"></span>');
	$('#gnav-panel .block1 > ul > li > div').prev().children().addClass('blt');
	$('#gnav-panel .block1 .blt').click(function(){
		$(this).parent().stop().toggleClass('on');
		if ($(this).parent().next().css('display') == 'none') {
			$(this).parent().next().stop().slideDown(300);
		} else {
			$(this).parent().next().stop().slideUp(300);
		}
		return false;
	});

	// anchor
	$('a[href^=#]').not('a.fancybox, .com-modal-video1').on('click', function() {
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').stop().animate({scrollTop:position}, 1000, 'easeOutExpo');
		return false;
	});
	
	// 
	$('.trigger0').on('inview', function() {
		$(this).addClass('is-view0');
	});
	$('.trigger1').on('inview', function() {
		$(this).addClass('is-view1');
	});
	$('.trigger2l').on('inview', function() {
		$(this).addClass('is-view2l');
	});
	$('.trigger2r').on('inview', function() {
		$(this).addClass('is-view2r');
	});
	$('.trigger2t').on('inview', function() {
		$(this).addClass('is-view2t');
	});
	$('.trigger2b').on('inview', function() {
		$(this).addClass('is-view2b');
	});
	
	
	//
	/*if( $('.box-link').length ){
		$('.box-link').click(function(){
			window.location=$(this).find("a").attr("href");
			return false;
		});
	}
	if( $('.box-link2').length ){
		$('.box-link2').click(function(){
			window.location=$(this).find("a").attr("href");
			return false;
		});
	}*/
	if( $('.box-link').length ){
		$('.box-link').click(function(){
			if($(this).find("a").attr("target")=="_blank"){
				window.open($(this).find("a").attr("href"), '_blank');
			}else{
				window.location=$(this).find("a").attr("href");
			}
			return false;
		});
	}
	if( $('.box-link2').length ){
		$('.box-link2').click(function(){
			if($(this).find("a").attr("target")=="_blank"){
				window.open($(this).find("a").attr("href"), '_blank');
			}else{
				window.location=$(this).find("a").attr("href");
			}
			return false;
		});
	}
	
	
	//
	if( $('.com-match-height1').length ){
		$('.com-match-height1 > *').matchHeight();
	}
	if( $('.com-block1').length ){
		$('.com-block1 .title1').matchHeight();
	}
	
	
	// 
	if( $('.com-slider1').length ){
		$('.com-slider1 .slider').slick({
			infinite: true,
			dots: false,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 4000,
			speed: 800,
			centerMode: true,
			cssEase: 'ease-in-out',
			mobileFirst: false,
			//slidesToScroll: 1,
			initialSlide: 3,
			variableWidth: true
		});
	}
	
	if( $('.com-slider2').length ){
		$('.com-slider2 .slider').slick({
			infinite: true,
			dots: true,
			arrows: true,
			autoplay: false,
			speed: 500,
			cssEase: 'ease-in-out',
			mobileFirst: false
		});
	}
	
	if( $('.com-slider3').length ){
		$('.com-slider3 .slider').slick({
			infinite: true,
			dots: true,
			arrows: true,
			autoplay: false,
			fade: true,
			speed: 500,
			cssEase: 'ease-in-out',
			mobileFirst: false
		});
	}
	
	if( $('.com-slider4').length ){
		$('.com-slider4 .slider').slick({
			infinite: true,
			dots: true,
			arrows: true,
			autoplay: false,
			speed: 500,
			cssEase: 'ease-in-out',
			mobileFirst: false
		});
	}
	
	// 
	/*$('.com-modal1').each(function(){
		var comModal1 = $(this);
		if ($(window).width() < 1160) {
			var modalAutosize = true;
			var modalFitToView = true;
			var modalMargin = [30, 10, 5, 10];
		}
		else{
			var modalAutosize = true;
			var modalFitToView = true;
			var modalMargin = 0;
		}
		comModal1.fancybox({
			autoSize	: modalAutosize,
			fitToView : modalFitToView,
			margin		: modalMargin,
			padding		: 0,
			wrapCSS		: 'com-modal-wrap1',
			helpers		: {
			title	: {
				type: 'inside'
			},
			overlay	: {
				locked: false
			}
			}
		});
	});*/
	$('.com-modal1').fancybox({
		margin		: 10,
		padding		: 0,
		nextEffect  : 'none',
		prevEffect  : 'none',
		wrapCSS		: 'com-modal-wrap1',
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	
});


// Page top
$(window).on('scroll load', function () {
	windowHeight = $(window).height();
	showPoint = windowHeight;
	if ($(this).scrollTop() > showPoint) {
		$('#pagetop-link').fadeIn('fast');
	} else {
		$('#pagetop-link').fadeOut('fast');
	}
});
	
	
// button
$(window).on('load', function(){
	$('.com-button1, .com-button2, .com-button3, .com-button5, .com-button6, .com-r-button1, .com-l-button1, .com-l-button2').addClass('out');
});
$('.com-button1, .com-button2, .com-button3, .com-button5, .com-button6, .com-r-button1, .com-l-button1, .com-l-button2').on({
  'mouseover': function () {
    $(this).addClass('over').removeClass('out');
  },
  'mouseout' : function () {
    $(this).addClass('out').removeClass('over');
  }
});



$(function() {
	$('.com-modal-video1').fancybox({
		padding: 0,
		wrapCSS: 'com-fancybox-video-wrap1',
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
});