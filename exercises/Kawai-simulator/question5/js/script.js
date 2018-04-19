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

},22000);

setTimeout(function(){
$(".character2").fadeOut();

},32000);

//the character voice load onto the page blablabla
    responsiveVoice.speak("If you want to help me to get out of this game, we must hack the game by going through the security barriers that the programmer scripted to prevent me from leaving. Each security barriers have a riddle to answers. If you answered correctly, we will move forward to the next barrier and to be able to finally get me free. However if you made a single mistake on an answer, the game will crash and thereby this will erase my data. Which I will disappear forever. Are you always ready to help me? ", "US English Female", {pitch: 1.2, rate: 0.8, volume:1});

});
