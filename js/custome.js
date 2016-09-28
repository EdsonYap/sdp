// temp bug fix
//$(window).resize(function(){location.reload();});

var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {
		return navigator.userAgent.match(/iPad/i);},
	iOSphone: function(){
		return navigator.userAgent.match(/iPhone|iPod/i);},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);},
	AndroidOnly: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.Opera() || isMobile.Windows());},
		
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.iOSphone() || isMobile.Opera() || isMobile.Windows());}
};

function init(){
	$('.wrapper').css('opacity','0');
	pageTransition();


	resizeEvt();
	initScroll();
	mainWindowSize();

	topUpMethodWidth();

	orderedToggle();
	registerDetails();
	topUpMethodScroll();

	productInnerThumb();

	faqAccordion();
	defaultPlaceHolder();

	/* smooth scrolling */
   $('a[data-type="scrollPage"]').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});
	historyPanelFunc();
	// see bxslider.js for slider content and js

	// temp pop func for before integrate
	quickPopUpFunc();
	scoopingClose();
}

function initLoad(){
	$('.wrapper').animate({'opacity' : 1}, 500);
	mainWindowSize();
	navDropDownFunc();

	// offline fake preload
	function hidePreload(){
		$('.wrapperPreload').fadeOut();
	}
	setTimeout(hidePreload, 0);
}

function initScroll(){
	var wWidth = $(window).width();
	var wHeight = $(window).height();
	var scrollWindow = $(window).scrollTop();

	var wrapperHeader = $('.wrapperHeader');
	var mainSearch = $('.mainSearch');
	var mainSearchInput = mainSearch.find('input');
	var mainSearchButton = mainSearch.find('button.btnBlue')
	var wrapperHeaderAction  = $('.wrapperHeaderAction ');
	//.wrapperMainSearch 
	if( wWidth >768){
		if(scrollWindow> 100){
			TweenMax.to(wrapperHeader,0.5,{css:{position:"fixed", top: 0, width:"100%"}});
			TweenMax.to(mainSearch,0.5,{marginRight:100});
			TweenMax.to(mainSearchInput,0.5,{css:{padding:"5px 10px"}});
			TweenMax.to(mainSearchButton,0.5,{css:{padding:"2px 25px", right:"-100px"}});
			TweenMax.to(wrapperHeaderAction,0.5,{css:{minHeight:"auto"}});
			

		} else {
			TweenMax.to(wrapperHeader,0.5,{css:{position:"relative", width:"100%"}});
			TweenMax.to(mainSearch,0.5,{marginRight:120});
			TweenMax.to(mainSearchInput,0.5,{css:{padding:"15px 10px"}});
			TweenMax.to(mainSearchButton,0.5,{css:{padding:"5px 35px", right:"-120px"}});
		}
	} else {
	}
}

function pageTransition (){
	$('a[data-type="transition"]').click(function(e) {
		var anchor = $(this), h;
		h = anchor.attr('href'),
		smoothScrolling = anchor.hasClass('.smoothScroll');
		
		var dummyLink = anchor.attr('href');
		e.preventDefault();
		
		if(dummyLink =='##' || dummyLink == '#' ) {
				}
				else {
						anchor.add($('.wrapper')).animate({'opacity' : 0}, 300, function() {
							window.location = h;
						});
					}
	});
}

function quickPopUpFunc (){
	var wrapperCookies = $('.wrapperCookies');
	$('.cookiesClose').click(function(){
		TweenMax.to(wrapperCookies,0.5,{marginTop:'-36px', onComplete: function(){
			TweenMax.to(wrapperCookies,0,{display:'none'})
		}
		});
	})
	wrapperCookies.hide();
}

function scoopingClose(){
	var wrapperPopUp = $('.wrapperPopUp'),
		overlayBackground = $('.overlayBackground'),
		btnCloseScoopPop = $('.btnCloseScoopPop');

	function btnCloseScoopFunc(){
		btnCloseScoopPop.add(overlayBackground).click(function(){
			wrapperPopUp.hide();
			overlayBackground.hide();
		});
	}
	btnCloseScoopFunc();
}

function scoopNowFunc(){
	var wrapperPopUp = $('.wrapperPopUp'),
		overlayBackground = $('.overlayBackground'),
		scoopingOnCall = $('#scoopingOnCall'),
		scoopingComplete = $('#scoopingComplete');

	wrapperPopUp.show();
	overlayBackground.show();
	scoopingOnCall.show();
	scoopingComplete.hide();
	//$('html, body').animate({scrollTop:0});
}

function scoopSubmit(){
	var scoopingOnCall = $('#scoopingOnCall'),
		scoopingComplete = $('#scoopingComplete');
	scoopingOnCall.hide();
	scoopingComplete.show();
}
function scoopSubmitClose(){
	var wrapperPopUp = $('.wrapperPopUp'),
		overlayBackground = $('.overlayBackground'),
		scoopingOnCall = $('#scoopingOnCall'),
		scoopingComplete = $('#scoopingComplete');
	scoopingComplete.hide();
	wrapperPopUp.hide();
	overlayBackground.hide();
}

function orderedToggle(){
    var btnSuccessDd = document.getElementsByClassName("btnSuccessDd");
    var i;

    for (i = 0; i < btnSuccessDd.length; i++) {
        btnSuccessDd[i].onclick = function(){
            this.classList.toggle("active");
            this.parentElement.nextElementSibling.classList.toggle('selected');
        }
    }
}

function registerDetails (){
	var registerForm = $('#registerForm');
	var registerHeight = registerForm.find('ul').height()-20;

	var formDetailsCta = $('.formDetailsCta a')

	registerForm.height(registerHeight/2);

	formDetailsCta.click(function(){
		registerForm.height(registerHeight+20);
		$(this).fadeOut('fast');
	});

	// reload radio
	$(".reloadPreset .presetNo").click(function(){
	  $(this).parent().parent().addClass("selected").siblings().removeClass("selected"); 
	});

	$(".paymentSelect").click(function(){
	  $(this).parent().addClass("selected").siblings().removeClass("selected"); 
	});
}

function topUpMethodScroll(){
	var methodDetailsScroll = $('.methodDetailsScroll'),
		forCcHeight = $('.viaCreditCard').innerHeight(),
		forOnlineHeight = $('.viaOnlineBanking').innerHeight(),
		forOfflineHeight = $('.viaOfflineTransfer').innerHeight(),
		forCardHeight = $('.viaCardreload').innerHeight();

	var	methodDetailsLength = $('.methodDetailsScroll > div').length;
	var defaultReloadWidth = $('.reloadDetails').width();

	$('.methodDetailsScroll > div').each(function(){
		$(this).width(defaultReloadWidth);
	});

	methodDetailsScroll.width(defaultReloadWidth*methodDetailsLength) // total width

	//current height
	var paymentMethodDetails = $('.paymentMethodDetails');
	paymentMethodDetails.height(forCcHeight);

	var paymentSelectLabel = $(".paymentSelect label");

	var j;
	for(j=0; j< paymentSelectLabel.length; j++){
		var currentLabel = paymentSelectLabel[j];
		currentLabel.onclick = paymentFunc;
    }

    function paymentFunc(){
    	var forPayment = $(this).parent().attr("rel");
    	var duration = 0.2;

    	switch (forPayment) {
    		case 'forCc':
    			TweenMax.to(methodDetailsScroll,duration,{marginLeft: -(defaultReloadWidth*0)});
    			TweenMax.to(paymentMethodDetails,duration,{height:forCcHeight});
    		break;

    		case 'forOnline':
    			TweenMax.to(methodDetailsScroll,duration,{marginLeft: -(defaultReloadWidth*1)});
    			TweenMax.to(paymentMethodDetails,duration,{height:forOnlineHeight});
    		break;

    		case 'forOffline':
    			TweenMax.to(methodDetailsScroll,duration,{marginLeft: -(defaultReloadWidth*2)});
    			TweenMax.to(paymentMethodDetails,duration,{height:forOfflineHeight});
    		break;

    		case 'forCard':
    			TweenMax.to(methodDetailsScroll,duration,{marginLeft: -(defaultReloadWidth*3)});
    			TweenMax.to(paymentMethodDetails,duration,{height:forCardHeight});
    		break;
    	}
    }

}

function topUpMethodWidth(){
	var reloadMethod = $('.reloadMethod');
	var reloadLength = reloadMethod.find('ul li').length;

	var reloadMethodWidth = $.map(reloadMethod.find('ul li'),function(val){
            return $(val).width()+20;
    });
    var totalReloadWidth = 0;
    for (var i = 0; i < reloadMethodWidth.length; i++){
        totalReloadWidth += reloadMethodWidth[i] <<0;
    }

    $('.reloadMethod ul').innerWidth(totalReloadWidth);

    $('.reloadMethodLine').width(totalReloadWidth);
	//trace(findWidth)
}

function faqAccordion(){
	var faqBtn = $('.faqContainer h3');

	var i;
	for(i=0; i < faqBtn.length; i++){
		faqBtn[i].onclick = function(){
			if(!$(this).hasClass('active')){
				faqBtn.removeClass('active');
				faqBtn.next().slideUp();
				$(this).stop().stop().toggleClass('active');
				$(this).next().stop().stop().slideToggle('fast');
			}
		}
	}
}

function layoutFunc(){
	function fProductFunc (){
		var wWidth = $(window).width();
		var wWidthPercent = wWidth/100

		var fProductImg = $('.fProductImg');
		fProductImg.find('img').width(wWidth - (wWidthPercent*50));
	}
	fProductFunc();
}

var thisNo = 0;
function mainWindowSize () {
	var wWidth = $(window).width();
	var wHeight = $(window).height();
	
	var ratioWidth = 1600;
	var ratioHeight = 970;
	var imgRatio = ratioHeight/ratioWidth ;
	
	$('.wSize').css({'width':(wWidth)});
	$('.hSize').css({'height':(wHeight)});
	
	trace(wWidth);
	//trace(wHeight);
	
	
	/* equal height */
	layoutFunc();

	// value
	equalHeight($(".dashBoardEqualHeight"));

	// mobile menu
	var btnMobMenu = $('.btnMobMenu a');

	var wrapperMobNavigation = $('.wrapperMobNavigation')
		overlayMobileMenu = $('.overlayMobileMenu');

	btnMobMenu.click(function(e){
		e.preventDefault();
		TweenMax.to(wrapperMobNavigation,0.2,{left:0});
		TweenMax.to(overlayMobileMenu,0.2, {opacity: 0.7, right: 0})
		//trace('clicking');
	})
	overlayMobileMenu.click(function(e){
		e.preventDefault();
		TweenMax.to(wrapperMobNavigation,0.2,{left:'-100%'});
		TweenMax.to(overlayMobileMenu,0.2, { opacity:0, right: '-100%'})
	})
	
	// window width in mobile and navigation
	var btnMobileNav = $('.btnMobileNav a');
	
	var hamburgerLineA = $('.hamburgerLineA'),
		hamburgerLineB = $('.hamburgerLineB'),
		hamburgerLineC = $('.hamburgerLineC'),
		hamburgerLineD = $('.hamburgerLineD');
	
	if(wWidth < 768){
		var menuOpen = false;
		
		
		$('nav').css({"height":"0","overflow":"hidden"});
		var findNavHeight = $('nav ul').height();
		
		btnMobileNav.click(function(e){
			e.preventDefault();
			/*TweenMax.to(hamburgerLineA,0,{width:30});
			TweenMax.to(hamburgerLineC,0,{width:30});
			TweenMax.to(hamburgerLineB,0,{rotation:0});
			TweenMax.to(hamburgerLineD,0,{rotation: 0});*/
			
			menuOpen = !menuOpen;
			
			if(menuOpen){
				
				TweenMax.to(hamburgerLineA,0.2,{width:0});
				TweenMax.to(hamburgerLineC,0.2,{width:0, onComplete: function(){
						TweenMax.to(hamburgerLineB,0.5,{rotation:225});
						TweenMax.to(hamburgerLineD,0.5,{rotation: -90});
					}});
				
				
				
				btnMobileNav.find('a').addClass('selected');
				TweenMax.to($('nav'),0.5,{height:findNavHeight});
				
				} else {
					TweenMax.to(hamburgerLineA,0.5,{width:30});
					TweenMax.to(hamburgerLineC,0.5,{width:30});
					TweenMax.to(hamburgerLineB,0.2,{rotation:0});
					TweenMax.to(hamburgerLineD,0.2,{rotation: 0});
					
					TweenMax.to($('nav'),0.5,{height:'0'});
					};
			});
		} else if (wWidth > 768) {
			
			var findNavHeight = $('nav ul').height();
			$('nav').css({"height":findNavHeight,"overflow":"visible"});
			menuOpen = true;
			TweenMax.to(hamburgerLineA,0,{width:30});
			TweenMax.to(hamburgerLineC,0,{width:30});
			TweenMax.to(hamburgerLineB,0,{rotation:0});
			TweenMax.to(hamburgerLineD,0,{rotation: 0});
			}
};

function productInnerThumb(){
	var btnPdInnerThumb = $('a.btnPdInnerThumb')
		pdInnerLarge = $('.pdInnerLarge');

	btnPdInnerThumb.each(function(){
		$(this).click(function(){
			var currentThumb = $(this).find('img').attr('src');
			var checkThis = currentThumb.replace('products','products/large');

			trace(checkThis);

			pdInnerLarge.find('img').attr('src',currentThumb);
			btnPdInnerThumb.parent('li').removeClass('selected');
			$(this).parent('li').toggleClass('selected');
		})
	})
}

// default placeholder
function defaultPlaceHolder(){
$(".defaultHolder").focus(function(srcc){
        if ($(this).val() == $(this)[0].title){
            $(this).removeClass("defaultHolderFocus");
            $(this).val("");
        }
    });
    $(".defaultHolder").blur(function(){
        if ($(this).val() == ""){
            $(this).addClass("defaultHolderFocus");
            $(this).val($(this)[0].title);
        }
    });
    $(".defaultHolder").blur();  
};

/* equal height */
function equalHeight(group) {
   tallest = 0;
   group.each(function() {
      thisHeight = $(this).height();
      if(thisHeight > tallest) {
         tallest = thisHeight;
      }
   });
   group.height(tallest);
}

function equalHeightRecruitedFunc (){
	var recruitFriendsPopUpHeight = $('.recruitFriendsPopUp').height();
	$('.recruitedPopUp').height(recruitFriendsPopUpHeight);
}

function navDropDownFunc (){
	var btnDdNav = $('nav > ul li a'),
		navDrop = $('.navDrop');
	
	navDrop.hide();
	$('nav > ul li a').add('.navDrop').hover( function(){
			$(this).parent('li').find('.navDrop').stop().show();
		},
		function(){
				$(this).parent('li').find('.navDrop').stop().hide();
	});
	
	$('.userNavi > ul li a').add('.memberNav').hover( function(){
			$('.wrapperUserNavi').css('z-index','9');
			$(this).parent('li').find('.navDrop').stop().show();
	}, function(){
				$('.wrapperUserNavi').css('z-index','1');
				$(this).parent('li').find('.navDrop').stop().hide();
		});
};

/* TweenMax start */
var easeEffect = Sine.easeOut;

/* dash board same height */
function historyPanelFunc(){
	var historyIndication = $('.historyIndication'),
		pointsContent = $('.pointsContent'),
		recruitContent = $('.recruitContent'),
		btnPoints = $('.btnPoints a'),
		btnRecruit = $('.btnRecruit a')
		wrapperHistoryContent = $('.wrapperHistoryContent'),
		historyContent = $('.historyContent');
	
	
	var defaultIndiWidth = btnPoints.width()+94;
	
	historyIndication.width(defaultIndiWidth);
	
	// show recruit
	btnRecruit.click( function(e){
		e.preventDefault();
		
		$('.historyPanel a').removeClass('selected');
		
		var indiWidth = $(this).width();
		
		$(this).addClass('selected');
		TweenMax.to(wrapperHistoryContent,1,{marginLeft:'-100%'});
		TweenMax.to(recruitContent,1,{height:'100%'});
		TweenMax.to(pointsContent,1,{height:'0'});
		TweenMax.to(historyIndication,1,{width:indiWidth+60,left:btnPoints.width()+60})
	});
	// show points
	btnPoints.click( function(e){
		e.preventDefault();
		
		$('.historyPanel a').removeClass('selected');
		
		var indiWidth = $(this).width();
		
		$(this).addClass('selected');		
		TweenMax.to(wrapperHistoryContent,1,{marginLeft:'0%'});
		TweenMax.to(pointsContent,1,{height:'100%'});
		TweenMax.to(historyIndication,1,{width:indiWidth+60,left:0});
	});
}

$(window).scroll(function(){
		
	});

$(document).ready(init);
$(window).load(initLoad);
$(document).scroll(initScroll);

function resizeEvt () {
	$(window).resize(function(){
        setTimeout(function(){
          mainWindowSize();
          initScroll();
          topUpMethodScroll();
          layoutFunc();
        }, 30);
	});
};