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
  audio.volume = 0.2;

//animation expression character with fadeIn
setTimeout(function(){
$(".character2").fadeIn();

},2000);


  //the character voice load onto the page blablabla
  responsiveVoice.speak("How rude of you! ", "US English Female", {pitch: 1.2, rate: 0.8 ,volume:1});

//second dialogue delay of 2.5 secondes
  var delay=2500;
  setTimeout(function(){
    responsiveVoice.speak("Then, what do you want to talk about？", "US English Female", {pitch: 1.2, rate: 0.7,
    volume: 1});
  },delay);

});
