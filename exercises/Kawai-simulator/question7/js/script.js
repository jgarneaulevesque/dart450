/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

  // Insert jQuery code here to run when the page is loaded

//music audio volume
  var audio = document.getElementById("music");
    audio.volume = 0.4;


    //the character voice load onto the page blablabla
  responsiveVoice.speak("Question 2. How many sides does a circle have?", "US English Female", {pitch: 1.8, rate: 0.9, volume:13});

//Timer count down
  var timeLeft = 20;
var timer;

$(document).ready(function () {

$('#timer').text(timeLeft);
timer = setInterval(tick,1000);

});

function tick() {
timeLeft = timeLeft - 1;
$('#timer').text(timeLeft);

if (timeLeft == 0) {
  clearInterval(timer);
  youLose();
}
}


//If timer go down to 0 go to the gameover page

function youLose() {
// window.open("http://www.pippinbarr.com");
window.location = "gameover/index.html";
}

});
