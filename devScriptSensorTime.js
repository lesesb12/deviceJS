/*
*  compile and run: /wigwag/devicejs-ng/bin/devicejs run devScriptSensorTime.js
 --config=/wigwag/etc/devicejs/devicejs.conf
*
* Turns lights on and off by opening and closing the door sensor, stores the time between open and closed doors
*
*/

var zwaveDoorSensor = dev$.selectByID('ZwaveNode2_Linear_Compatible');
zwaveDoorSensor.subscribeToEvent('contact');
var startOn=0;
var endOn=0;
var openTime=0;
var closeTime=0;
var timeCheck;
var openArray = [];
var closedArray = [];
var i = 0;
var j = 0;
const fs = require('fs');

var lightsOn = function(){

	dev$.selectByInterface('Facades/Dimmable').set('power','on');

}

var lightsOff = function(){

	dev$.selectByInterface('Facades/Dimmable').set('power','off');

}

/*var breakEvent = function() {

	zwaveDoorSensor.removeAllListeners('event');
	console.log("Open door times: ")
	for(var x = 0; x<openArray.length; x++){
		console.log(openArray[x]);	
	}
	console.log("Closed door times: ")
	for (var i = 0; i < closedArray.length; i++) {
		console.log(closedArray[i]);
	}
}*/

zwaveDoorSensor.on('event', function(resourceID, type, data) {
 
    	console.log(resourceID, 'emitted ', type, 'returns ', data);
    	if(data === false){
    		lightsOn();
    		startOn = new Date().getTime();

    	}
    	else if(data === true){
    		lightsOff();  
    		endOn = new Date().getTime(); 
	
    	}
    	
    	timeCheck = endOn-startOn;

    	if(data === true){
    		if(startOn!=0&&endOn!=0){
    			openTime=(endOn-startOn)/1000;
    			console.log('Door closed, door was open for ', openTime,' seconds' );
    			fs.appendFile('MyOpenFile.txt', openTime + "\n", (err) => {
    				if (err) throw err;
    					console.log('It\'s saved!');
    			});
    			openArray[i]=openTime;
    			i++;
    		}
    	}
    	else if(timeCheck<0){
    		if(startOn!=0&&endOn!=0){
    			closeTime=(startOn-endOn)/1000;
    			console.log('Door opened, door was closed for ', closeTime, ' seconds');
    			fs.appendFile('MyCloseFile.txt', closeTime + "\n", (err) => {
    				if (err) throw err;
    					console.log('It\'s saved!');
    			});
    			closedArray[j]=closeTime;
    			j++;
    		}
    	}

    	//if(i>5&&j>5){
    	//	breakEvent();
    	//}


 
});
