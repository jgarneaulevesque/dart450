/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

  // Insert jQuery code here to run when the page is loaded
  responsiveVoice.speak("My favourite book is Alice in wonderland by Lewis Carroll. I was really fond of the character feelings. It's like I really understand her worries about how she was confuse to be unable to detect if she was in a dream or in reality. Imagine that your whole world that you knew was just an illusion, a trick of our perception of reality. Wouldn't that be scary?", "US English Female", {pitch: 1.3, volume:1});

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
