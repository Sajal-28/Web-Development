var names = [];
var addName = prompt("what is your name");
addName = prompt("what is your name");
addName = prompt("what is your name");
addName = prompt("what is your name");
addName = prompt("what is your name");
addName = prompt("what is your name");

name.push("addName");

function whosPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople) + 1;
    var randomPerson = names[randomPersonPosition];
    return randomPerson + " is going to buy the lunch.";
}
whosPaying();