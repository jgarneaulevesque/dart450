/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

  

  // Insert jQuery code here to run when the page is loaded

  $(".character").animateSprite({
      fps: 12,
      animations: {
          walkRight: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      },
      loop: true,
      complete: function(){
          // use complete only when you set animations with 'loop: false'
          alert("animation End");
      }
  });



});
