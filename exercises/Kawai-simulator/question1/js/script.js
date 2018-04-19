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

},5000);

setTimeout(function(){
$(".character3").fadeIn();

},10900);


//the character voice load onto the page blablabla
responsiveVoice.speak("Oh sorry! I didn't realize that you didn't know my name, silly me! It is in the title after all. That said, my name is Kawaï Setsuna! Nice to meet you! Say, how do I look? Am I pretty to you?", "US English Female", {pitch: 1.3, volume:1});


});
