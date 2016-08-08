/*
*  compile and run: /wigwag/devicejs-ng/bin/devicejs run devScriptSensor.js
 --config=/wigwag/etc/devicejs/devicejs.conf
*
* Changes the filament color randomly every time a sensor's contact returns true or false
*
*/

var zwaveDoorSensor = dev$.selectByID('ZwaveNode2_Linear_Compatible');
zwaveDoorSensor.subscribeToEvent('contact');
zwaveDoorSensor.on('event', function(resourceID, type, data) {
    	console.log(resourceID, 'emitted', type, 'with data', data);
		dev$.selectByID('WWFL000223').set('hsl', {h:Math.random(), s:1, l:0.5});
	    dev$.selectByID('WWFL000232').set('hsl', {h:Math.random(), s:1, l:0.5});
});