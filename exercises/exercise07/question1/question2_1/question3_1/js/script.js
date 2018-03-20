/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

  // Insert jQuery code here to run when the page is loaded
  responsiveVoice.speak("I really like role-playing games. It's just so much fun to play a character that we can customize with. We can explore in a fantastic world we rather never see, and beat enormous monsters whenever we want. If only we could experience it in real life. Wouldn't that be fun?", "US English Female", {pitch: 1.3, volume:1});

  //able to click anywhere on the page
  $(document).click(showSecretMessage);
  $(document).click(showSecretMessage2);
//show hidden button and message2
  $('#message2').click(showmenu);



});

//click to appear a secret message of the character inner thought
function showSecretMessage() {
  $('#message').show();
}

function showSecretMessage2() {
  $('#message2').show();
}

function showmenu() {
  $('#menu').show();
}
