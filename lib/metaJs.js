$(document).ready(function(){
	windowResolution();
	
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
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
	};
	
	if (isMobile.iOS()){
		$('head').append('<meta name="viewport" content="" />')}
	if (isMobile.iOSphone()){
		$('head').append('<meta name="viewport" content="width=640; initial-scale=0.5; user-scalable=1;" />')}
		
	if (isMobile.AndroidOnly()){
		$('head').append('<meta name="viewport" content="width=768; initial-scale=0.5; user-scalable=1;" />')}
	
	if(rwWidth=720 && isMobile.AndroidOnly()){
		trace('yes is this');
		$('head').append('<meta name="viewport" content="width=720; initial-scale=0.5; user-scalable=1;" />')
		}
});

function windowResolution(){
	var rwWidth = $(window).width();
	var rwHeight = $(window).height();
}