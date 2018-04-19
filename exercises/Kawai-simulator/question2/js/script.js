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

},3000);


//the character voice load onto the page blablabla
  responsiveVoice.speak("Awww! That's nice of you! ", "US English Female", {pitch: 1.3, rate: 0.7 ,volume:1});

//second dialogue delay of 2.8 secondes
  var delay=2800;
  setTimeout(function(){
    responsiveVoice.speak("Then, what do you want to talk about？", "US English Female", {pitch: 1.2,
    volume: 1});
  },delay);

});
