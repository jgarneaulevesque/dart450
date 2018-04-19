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

},16000);

setTimeout(function(){
$(".character2").fadeOut();

},56000);

//the character voice load onto the page blablabla
  responsiveVoice.speak("Sorry to going all the way through of this. You must be confused by now. It is just the only way we can talk without being interrupted by the game's programming. So... yeah... where to begin?", "US English Female", {pitch: 1.2, rate: 0.8, volume:1});

  //second dialogue delay of 16 secondes
  var delay=16000;
  setTimeout(function(){
    responsiveVoice.speak("I said earlier that I was kidnapped  which in fact it's true. I don't belong in this world, well not in the visual novel game universe I mean. I am from a retro shooting game called  Space Mania . I am the protagonist of this game well, I was. Until an obsessive man, who likes frantically my game, he tried to rid me off of my game by copying the source code and put me in his mediocre visual novel game without my consent. His goal was simple, it was to be able to satisfy himself while seeing me nude!", "US English Female", {pitch: 1.2, rate: 0.8,
    volume: 1});
  },delay);

  //Third dialogue delay of 56 secondes
  var delay=56000;
  setTimeout(function(){
    responsiveVoice.speak(" Yeah, you hear me right! The whole point of this game is to abuse me! This is really embarrassing!", "US English Female", {pitch: 1.3, rate:0.7,
    volume: 9});
  },delay);

});
