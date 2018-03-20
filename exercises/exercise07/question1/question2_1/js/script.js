/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

  // Insert jQuery code here to run when the page is loaded
  responsiveVoice.speak("How rude of you! ", "US English Female", {pitch: 1.1, rate: 0.8 ,volume:1});

  var delay=2500;
  setTimeout(function(){
    responsiveVoice.speak("...Then..., what do you want to talk about？", "US English Female", {pitch: 1.2, rate: 0.7,
    volume: 1});
  },delay);

});
