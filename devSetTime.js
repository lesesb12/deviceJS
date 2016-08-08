var theTime = new Date(2016, 6[,29[,15[,59]]]);

var bool = true;

while(bool){
	if (theTime){
		dev$.selectByInterface('Facades/Colorable').set('power', 'off');
		bool=false;
	}
}

