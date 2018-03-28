/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

  $( 'button' ).draggable({
         cancel: false
     });


  // Insert jQuery code here to run when the page is loaded
    responsiveVoice.speak("Oh no! I didn’t know that he adds a counter to each barrier now… You’re better to answer fast as you can if we want to go to the next one. I know you can do it! But don’t be a fool by this game though! Good luck!", "US English Female", {pitch: 1.4, rate: 0.9, volume:13});

    var delay=17000;
    setTimeout(function(){
      responsiveVoice.speak("Question 1. Which one is correct? “Penguins flies” or “A Penguin flies”", "US English Female", {pitch: 1.3, rate: 0.9,
      volume: 1});
    },delay);

    var timeLeft = 30;
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
