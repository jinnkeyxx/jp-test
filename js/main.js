            
$(document).ready(function(){                              
$('.auto_slide').slick({
    autoplay: true,
    autoplaySpeed: 20000,
    dots: false,
    infinite: false,
    speed: 1000,
    fade: true,
    slide: 'div',
    cssEase: 'linear'
});
$('#theVideo').click(function () {
	$(window).click(()=>{
		let counter;
		if(counter %2 == 0){
			$('#header').css('opacity' , '1')
		} else {
			$('#header').css('opacity' , '1')
		}
	})
	openvideo();
});
$('#video1').click(()=> {
	openvideo();
	$(window).click(()=>{
		let counter;
		if(counter %2 == 0){
			$('#header').css('opacity' , '1')
		}else {
			$('#header').css('opacity' , '1')
		}
	})
})
let openvideo = () => {
	$('#videoopen').popVideo({
		playOnOpen: true,
		closeOnEnd: true,
		pauseOnClose: true,
	}).open()
}
 // Loading .....
$("#preloader").fadeOut(600);
$(".preloader-bg").delay(400).fadeOut(600);
setTimeout(function() {
	$(".fadeIn-element").delay(1000).css({
		display: "none"
	}).fadeIn(1200);
}, 0);
setTimeout(function() {
	$(".main-navigation").removeClass("top-position");
}, 1200);

})





//Get the button

//autoslide
// $(document).ready(function() {
// 			$('.slide-img').removeClass('active')
// 			$('.slide-img:first').fadeIn(1500).addClass('active');

// 			setInterval(function(){
// 				// an het di
// 				$('.slide-img').fadeOut(1500);

// 				// xuat phat tu anh co class active de next sang anh tiep theo
// 				$('.slide').find('div.active').next().fadeIn(1500).addClass('active');
// 				$('.slide').find('div.active').prev().removeClass('active');

// 				// check anh cuoi cung thi quay ve anh dau tien
// 				if($('.slide').find('div.active').hasClass('slide-last')){
// 					$('.slide-last').removeClass('active').hide();
// 					$('.slide-img:first').fadeIn(1500).addClass('active');
// 				}

// 			}, 2000)
// 		});
