/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

  // Insert jQuery code here to run when the page is loaded


responsiveVoice.speak("私はかわいい...ですか ?", "Japanese Female", {pitch: 1.2});

$(document).click(function () {
  // say() is a function defined below
  responsiveVoice.speak("あなたは...失礼です!", "Japanese Female", {pitch: 1.3})
});

$(document).keypress(function (event) {
responsiveVoice.speak("ありがとうございました！それが私を幸せにする!","Japanese Female", {pitch: 1.2})
});

});
