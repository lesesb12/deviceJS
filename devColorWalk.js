/*
*  compile and run: /wigwag/devicejs-ng/bin/devicejs run devColorWalk.js
 --config=/wigwag/etc/devicejs/devicejs.conf
*
* Walks through the color spectrum by changing color every 2 seconds
*
*/

var counter = 0;
var hue = 0.0;

var i = setInterval(function(){

	dev$.selectByInterface('Facades/Colorable').set('hsl', {h:hue, s:1, l:0.5});
	
	if(hue>1.0){
		hue=0.0;
	}
	else{
		hue+0.05;
	}

	counter++;

	if(counter === 20){
		clearInterval(i);
	}

}, 2000);




