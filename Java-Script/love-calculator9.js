var a = prompt("Enter Name of male.");
var b = prompt("Enter Name of female.");
var n = Math.random();
n = n * 100;
n = Math.floor(n) +1;
if (n > 70){
    alert("Chances of relationship between " + a + " and " + b + " is " + n +"%," + " PROPOSE ALREADY!");
}
if (n >= 30 && n <= 70){
    alert("Chances of relationship between " + a + " and " + b + " is " + n +"%," + " U GOT SOME CHANCE THERE!");
}
if (n >= 10 && n < 30){
    alert("Chances of relationship between " + a + " and " + b + " is " + n +"%," + " IMPROVE YOURSELF!");
}
else {
    alert("Chances of relationship between " + a + " and " + b + " is " + n +"%," + " GO DIE ALONE!");
}