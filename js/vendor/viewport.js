/*
var agent = navigator.userAgent;
if(agent.search(/iPad/) != -1){
	document.write('<meta name="viewport" content="width=980">');
}
*/
/*
var getDevice = (function(){
	var ua = navigator.userAgent;
	if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0 || ua.indexOf('Windows Phone') > 0) {
		alert('sp');
	}else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
		alert('tablet');
	}else{
		alert('other');
	}
})();
*/
var getDevice = (function(){
	var ua = navigator.userAgent;
	if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0 || ua.indexOf('Windows Phone') > 0) {
		;
	}else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
		document.write('<meta name="viewport" content="width=1200">');
	}else{
		;
	}
})();