var zwaveFibaro = dev$.selectByID('zw010f200108006');
zwaveFibaro.subscribeToEvent('vibration');

zwaveFibaro.on('event', function(resourceID, type, data) {
 
    	console.log(resourceID, 'emitted ', type, 'returns ', data);
		dev$.selectByInterface('Facades/Colorable').set('hsl', {h:Math.random(), s:1, l:0.5});


});