/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...


**********************************************/

$(document).ready(function () {
//function to put the real time on the header


var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
}



});
