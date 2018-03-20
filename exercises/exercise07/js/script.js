/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

  // Insert jQuery code here to run when the page is loaded

//the character voice load onto the page blablabla
  responsiveVoice.speak("Hello... welcome to the Kawaï simulator game.", "US English Female", {pitch: 1.3, volume:1});


  //second dialogue delay of 3 secondes
  var delay=3000;
  setTimeout(function(){
    responsiveVoice.speak("Have you missed me？", "US English Female", {pitch: 1.4, rate: 0.8,
    volume: 0.8});
  },delay);

});
