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

//the character voice load onto the page blablabla
setTimeout(function(){
$(".character").fadeOut();

},15000);

setTimeout(function(){
$(".character2").fadeIn();

},17000);

setTimeout(function(){
$(".character3").fadeIn();

},23000);

setTimeout(function(){
$(".character3").fadeOut();

},31000);

setTimeout(function(){
$(".character2").hide();

},48000);


setTimeout(function(){
$(".character4").fadeIn();

},46000);



  // explode script character
setTimeout(function(){
$( ".character4" ).toggle( "explode" ,
                     {pieces: 900}, 2000);

},58000);

setTimeout(function(){
$("p").fadeIn();

},62000);



//the character voice load onto the page blablabla
  var delay=1000;
  setTimeout(function(){
    responsiveVoice.speak("We made it!", "US English Female", {pitch: 1.6, rate: 0.9, volume:23});
},delay);

  //Second dialogue delay of 3 secondes
var delay=3000;
setTimeout(function(){
  responsiveVoice.speak("We succeed at last", "US English Female", {pitch: 1.6, rate: 0.6, volume:23});
},delay);

  //Third dialogue delay of 8 secondes
  var delay= 8000;
  setTimeout(function(){
    responsiveVoice.speak("We finally passed to the last barrier of this game. Therefore, I can collect my original data from the file of the game.", "US English Female", {pitch: 1.5, volume:13});
},delay);

  //Fourth dialogue delay of 18 secondes
var delay= 18000;
setTimeout(function(){
  responsiveVoice.speak("Ah! It's good to be back in his own badass body.", "UK English Female", {pitch: 1.2, rate: 0.9, volume:13});
},delay);

  //Fifth dialogue delay of 23 secondes
var delay= 23000;
setTimeout(function(){
  responsiveVoice.speak("You did not expected that, didn't you?   ", "UK English Female", {pitch: 1.2, rate: 0.9, volume:13});
},delay);

  //Sixth dialogue delay of 26 secondes
var delay= 26000;
setTimeout(function(){
  responsiveVoice.speak("Ha ha ha! Well, at least I made a good impression on you.", "UK English Female", {pitch: 1.1, rate: 0.8, volume:13});
},delay);

  //Seventh dialogue delay of 32 secondes
var delay= 32000;
setTimeout(function(){
  responsiveVoice.speak("Anyway! Thank you so much for your help! I will remember your kindness act forever!   ", "UK English Female", {pitch: 1.2, rate:0.9, volume:13});
},delay);

  //eighth dialogue delay of 38 secondes
var delay= 38000;
setTimeout(function(){
  responsiveVoice.speak(" I must return to my game now, there so much to do to repair this mess. Oh, and also You're better to stop by on my game next time. Got it.  ", "UK English Female", {pitch: 1.2, rate:0.9, volume:13});
},delay);

  //Nineth dialogue delay of 49 secondes
var delay= 49000;
setTimeout(function(){
  responsiveVoice.speak("Well, it's time to say goodbye! Thank you again to save me from this visual novel game. I hope to see you soon. Farewell!  ", "UK English Female", {pitch: 1.2, rate:0.7, volume:13});
},delay);

});
