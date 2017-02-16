var	audioFormat;
function setFormat()	{
		var	audio	= new Audio();
		if	(audio.canPlayType("audio/mp3"))	{
						audioFormat	= ".mp3";
		}	else	{
						audioFormat	= ".ogg";
		}
}
setFormat();	//	we've	still	got	to	call	the	function	for	the	code	in	it	to	run
var	sound	= new Audio("file:///C:/Users/Ashleigh/Documents/pomo/sounds/pomo-stop.wav");
//sound.play();

function checkTime(){
  var date = new Date();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  if((minutes == 0 && seconds == 1) || (minutes == 30 && seconds == 1)){
    sound.play();
  }//WORK TIME
  if((minutes == 25 && seconds == 1) || (minutes == 55 && seconds == 1)){
    sound.play();
  }//BREAK TIME
}

setInterval(checkTime, 300);
