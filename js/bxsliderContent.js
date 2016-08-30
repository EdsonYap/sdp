$(document).ready(function() {
// content for slider
var desktopSlider = '<li>' +
			'<div class="wrapperCarouselContent"><div class="carouselContent"><h1>Just 1 click away</h1><strong>Time to clear your wish list, fair and square!</strong><button class="btnMain">FIND OUT MORE</button></div></div><img src="images/temp-carousel.jpg" />' +
			'</li>';
var mobileSlider = '<li>' +
			'<div class="wrapperCarouselContent"><div class="carouselContent"><h1>Just 1 click away</h1><strong>Time to clear your wish list, fair and square!</strong><button class="btnMain">FIND OUT MORE</button></div></div><img src="images/temp-carousel-small.jpg" />' +
			'</li>';


// script start

if (document.all ? document.body.clientWidth : window.innerWidth < 980) {
    $('.bxslider').html(mobileSlider);
} else {
    $('.bxslider').html(desktopSlider);
}

var slider = $('.bxslider').bxSlider({
			  nextSelector: '#slider-next',
			  prevSelector: '#slider-prev',
			  auto: true,
			  pause: 4000,
			  touchEnabled: true,
			  swipeThreshold: 50,
			  nextText: '',
	  		  prevText: '',
	  		  fade: true,
			});
$('.bxsliderSmall').bxSlider({
  nextSelector: '#sliderS-next',
  prevSelector: '#sliderS-prev',
  auto: true,
  nextText: '',
  prevText: '',
});
var timer;

$(window).bind('resize', function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
        if (document.all?document.body.clientWidth:window.innerWidth < 980) {
            $('.bxslider').html(mobileSlider);
        } else {
            $('.bxslider').html(desktopSlider);
        }
        slider.reloadSlider();
    }, 500);
});
// end responsive carousel slider


function sliderFadeIn(){
	$('.bxslider').find('ul').fadeIn();
}

});