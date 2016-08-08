var quirkySwitch = dev$.selectByID('QuirkySmart Switch53670');
quirkySwitch.subscribeToEvent('contact');

quirkySwitch.on('event', function(resourceID, type, data) {
 
    	console.log(resourceID, 'emitted ', type, 'returns ', data);
		dev$.selectByInterface('Facades/Colorable').set('hsl', {h:Math.random(), s:1, l:0.5});


});