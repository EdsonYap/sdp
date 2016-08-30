/**
* …
* @author CK_Wong
*/
var logArr = [];
var totalLog = 0;
function trace(string){
	var logNum = 5;
	totalLog ++;
	if(logArr[logArr.length-1] != string+"<br>"){
		logArr.push(string+"<br>");
		if(logArr.length>=logNum){
			logArr = logArr.slice(-logNum);	
		}
	}
	$('#log').html("Log Massage<br>");
	for (var i=0;i<logArr.length;i++){
		var asd = totalLog - i;
		$('#log').append( asd + "." +logArr[i]);
	}
}
function twoDigi(num){
	var digi = "";
	if(num.toString().length == 2){
		digi = num.toString();
	}else{
		digi = "0" + num.toString();
	}
	return digi;
}
function randomNum(minNum,maxNum){
	return Math.floor((Math.random()*maxNum)+minNum); 
}
function createCircle() {
	var circle = new createjs.Shape();
	circle.graphics.beginFill("red").drawCircle(0, 0, 10);
	return circle;
}
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
function timeConvert(tim){
	var Hours = Math.floor(tim/ (1000*60*60));
	var Minutes = Math.floor((tim % (1000*60*60)) / (1000*60));
	var Seconds = Math.floor(((tim % (1000*60*60)) % (1000*60)) / 1000);
	return Hours +":"+ twoDigi(Minutes) +":"+ twoDigi(Seconds);
}