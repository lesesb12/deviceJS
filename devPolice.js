/*
*  compile and run: /wigwag/devicejs-ng/bin/devicejs run devPolice.js
 --config=/wigwag/etc/devicejs/devicejs.conf
*
* Changes the filament color for the first filament from red to blue
and for the second filament from blue to red every 2.5 seconds for 30
iterations
*
*/

var hue = 0.7;

var police1 = function(){
	dev$.selectByID('WWFL000223').set('hsl', {h:0.7, s:1, l:0.5});
	dev$.selectByID('WWFL000232').set('hsl', {h:0.02, s:1, l:0.5});

	hue =0.02;

}
var police2 = function(){
	
	dev$.selectByID('WWFL000223').set('hsl', {h:0.02, s:1, l:0.5});
	dev$.selectByID('WWFL000232').set('hsl', {h:0.7, s:1, l:0.5});

	hue = 0.7;
}

var counter = 0;

var i = setInterval(function(){

	if(hue===0.7){
		police1();
	}
	else if(hue===0.02){
		police2();
	}
	
	counter++;

	if(counter === 30){
		clearInterval(i);
	}
}, 2500);
