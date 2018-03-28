/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

  $( 'button' ).resizable({
         cancel: false
     });


  // Insert jQuery code here to run when the page is loaded
  responsiveVoice.speak("Question 2. How many sides does a circle have?", "US English Female", {pitch: 1.4, rate: 0.9, volume:13});

  var timeLeft = 15;
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




function youLose() {
// window.open("http://www.pippinbarr.com");
window.location = "gameover/index.html";
}

});
