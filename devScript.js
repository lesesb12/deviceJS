/*
*  compile and run: /wigwag/devicejs-ng/bin/devicejs run devScript.js
 --config=/wigwag/etc/devicejs/devicejs.conf
*
* Changes the filament color randomly every 2 seconds for 20 iterations
*
*/

var counter = 0;

var i = setInterval(function(){

	dev$.selectByInterface('Facades/Colorable').set('hsl', {h:Math.random(), s:1, l:0.5});
	
	counter++;

	if(counter === 20){
		clearInterval(i);
	}
}, 2000);




