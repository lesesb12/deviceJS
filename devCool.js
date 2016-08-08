var zwaveDoorSensor = dev$.selectByID('ZwaveNode2_Linear_Compatible');
zwaveDoorSensor.subscribeToEvent('contact');

var lightsOn = function(){

	dev$.selectByInterface('Facades/Dimmable').set('power','on');

}

var lightsOff = function(){

		dev$.selectByInterface('Facades/Dimmable').set('power','off');

}

zwaveDoorSensor.on('event', function(resourceID, type, data) {
 
    	console.log(resourceID, 'emitted ', type, 'returns ', data);
    	if(data === false){
    		lightsOn();
    	}
    	if(data === true){
    		lightsOff();    		
    	}


});