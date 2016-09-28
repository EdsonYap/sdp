$(document).ready(function() {
  // content for slider
  var desktopSlider = '<li>' +
        '<div class="wrapperCarouselContent"><div class="carouselContent"><h1>Just 1 click away</h1><strong>Time to clear your wish list, fair and square!</strong><button class="btnMain">FIND OUT MORE</button></div></div><img src="images/temp-carousel.jpg" />' +
        '</li>';
  var mobileSlider = '<li>' +
        '<div class="wrapperCarouselContent"><div class="carouselContent"><h1>Just 1 click away</h1><strong>Time to clear your wish list, fair and square!</strong><button class="btnMain">FIND OUT MORE</button></div></div><img src="images/temp-carousel-small.jpg" />' +
        '</li>';
  // small slider content
  var featureProductsCarousel = $('.featureProductsCarousel');

  var desktopFeaturedScoop = '<li>' + 
                                '<div class="fProductImg"><div class="fProductsCta"><button class="btnMainS">Check it out</button></div><img src="images/-default-feature-products-l.jpg" alt="" /></div>' +
                              '</li>' + 
                              '<li>' + 
                                '<div class="fProductImg"><div class="fProductsCta"><button class="btnMainS">Check it out</button></div><img src="images/-default-feature-products-2-l.jpg" alt="" /></div>' +
                              '</li>';
  var mobileFeaturedScoop = '<li>' + 
                                '<div class="fProductImg"><div class="fProductsCta"><button class="btnMainS">Check it out</button></div><img src="images/-default-feature-products-m.jpg" alt="" /></div>' +
                              '</li>' + 
                              '<li>' + 
                                '<div class="fProductImg"><div class="fProductsCta"><button class="btnMainS">Check it out</button></div><img src="images/-default-feature-products-2-m.jpg" alt="" /></div>' +
                              '</li>';


  // script start
  if (document.all ? document.body.clientWidth : window.innerWidth < 980) {
      mobileSliderInsert();
  } else {
      desktopSliderInsert();
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
              mobileSliderInsert();
              reloadfProductImg();
          } else {
              desktopSliderInsert();              
          }
          //slider.reloadSlider();
      }, 500);
  });
  // layout fix
  function mediaEqualHeight(){
    var wWidth = $(window).width();
    var featureProductsCarousel = $('.featureProductsCarousel').height() +2 //+2 for border;
    if(wWidth>960){
      $('.featureMediaContent').height(featureProductsCarousel)
    }
  }
  // end of layout fix

  // end responsive carousel slider
  function mobileSliderInsert(){
    // main slider
    $('.bxslider').html(mobileSlider);
    // sub slider
    featureProductsCarousel.find('ul').html(mobileFeaturedScoop);
    featureProductsCarousel.addClass("mobileNativeSlider");
    // extra bxslider fixed
    //$('.bx-viewport').height($('ul.bxsliderSmall').height());
    mediaEqualHeight();
    featureProductsCarousel.find('ul').removeClass('bxsliderSmall');
  }

  function desktopSliderInsert(){
    // main slider
    $('.bxslider').html(desktopSlider);
    // sub slider
    featureProductsCarousel.find('ul').html(desktopFeaturedScoop);

    featureProductsCarousel.find('ul').addClass('bxsliderSmall');
    // extra bxslider fixed
    $('.bx-viewport').height($('ul.bxsliderSmall').height());

    featureProductsCarousel.removeClass("mobileNativeSlider");
  }


  function sliderFadeIn(){
    $('.bxslider').find('ul').fadeIn();
    featureProductsCarousel.find('ul').fadeIn();
  }
});

function reloadfProductImg (){
  var wWidth = $(window).width();
  var wWidthPercent = wWidth/100

  var fProductImg = $('.fProductImg');
  fProductImg.find('img').width(wWidth - (wWidthPercent*50));
  trace('running');
}


// load delay checking
var subTimer;
$(window).load(function(){
  clearTimeout(subTimer);
  subTimer = setTimeout(function(){
    fProductCarouselMob();




    function fProductCarouselMob(){
      var fProductLength = $('.featureProductsCarousel ul').find('li').length;
      var fProductWidth = $('.featureProductsCarousel ul').find('li').outerWidth()+20;
      $('.featureProductsCarousel ul').width(fProductWidth*fProductLength);
    }


  }, 1000)
})