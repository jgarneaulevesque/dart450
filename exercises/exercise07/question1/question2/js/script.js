/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

  // Insert jQuery code here to run when the page is loaded
  responsiveVoice.speak("Awww!... That's nice of you! ", "US English Female", {pitch: 1.3, rate: 0.7 ,volume:1});

  var delay=3000;
  setTimeout(function(){
    responsiveVoice.speak("Then, what do you want to talk about？", "US English Female", {pitch: 1.2,
    volume: 1});
  },delay);

});
