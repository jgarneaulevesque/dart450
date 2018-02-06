$(document).ready(function () {

  for (var i = 0; i < 900; i++) {
    $("<div class='orange'></div>").appendTo('body');
  }

  setInterval(function () {
    var $div = $('.orange').not('.invisible').first();
    $div.addClass('invisible');
  },90);



});




// var globalID;
//
// function repeatOften() {
//   $("<div />").appendTo("body");
//   globalID = requestAnimationFrame(repeatOften);
// }
//
//   globalID = requestAnimationFrame(repeatOften);
//
 //$("repeat").on("click", function() {
   //cancelAnimationFrame(global);
 //});
