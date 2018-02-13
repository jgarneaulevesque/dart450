
//Variables
var c = 0;//Amount Of Likes
var v = 0;//Likes added per second
var r = 1;//Likes Added Per Click
var s = 1;//Display of likes added per click
var b = 100;//Cost to purchase Personal profile/ You are average
var f = 0
function play() {//Event that occurs when you click the facebook clicker
c+=r;
	counter.innerHTML = c;
}
function upgrade() {// increasing the price of the purchase as you buy the upgrade
  if (c<b) {
    alert("Not enough like! you need 1" + b);
  } else {
  r++;
  c-=b;
  b*= 2.0
  s+=1;
    counter.innerHTML = c;
    ssp.innerHTML = "+" + s;
    st.innerHTML = "Personal profile/ You are average +1 like per click: $" + b;
  }
}
function upgrade1() {// increases the amount of like you make per click
    if (c<1) {
    alert("Not enough like! you need 1000");
  } else {
  c-=1;
  v+=5;
    counter.innerHTML = c;
 }
}
//Timer for the adding of likes based on how many upgrades you have purchased
var myVar = setInterval(myTimer, 1000);
function myTimer() {
c+=v;
counter.innerHTML = c;
}
function upgrade2() {
   if (c<7500) {
    alert("Not enough like! you need 7500");
  } else {
  c-=7500;
  v+=57;
    counter.innerHTML = c;
  }
}
function upgrade3() {//Increses amount of like made again
   if (c<20000) {
    alert("Not enough like! you need 20000");
  } else {
  c-=20000;
  v+=135;
    counter.innerHTML = c;
  }
}
function upgrade4() {
   if (c<55000) {
    alert("Not enough like! you need 55000");
  } else {
  c-=55000;
  v+=355;
    counter.innerHTML = c;
  }
}
function upgrade5() {
   if (c<3000) {
    alert("Not enough like! you need 3000");
  } else {
  c-=3000;
  v+=18;
    counter.innerHTML = c;
  }
}
function upgrade6() {
  if (c<500000) {
    alert("Not enough like! you need 500000");
  } else {
    c-=500000;
    v+=5000;
    counter.innerHTML = c;
  }
}
function openNav() {
    document.getElementById("nav").style.width = "250px";
}

function closeNav() {
document.getElementById("nav").style.width = "0";
}
