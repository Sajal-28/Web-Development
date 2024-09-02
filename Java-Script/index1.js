
//1 Create a var the stores the name that user gives by prompt 
var name = prompt ("what is your name");
//2 Create a var that stores the value of uppercase letter of the name

//a isolate the first character 

var firstchar = name.slice(0,1);

//b creating the given first character to uppercase

var upperfirst = firstchar.toUpperCase();

//c isolate the rest of the character

var restchar = name.slice(1,name.length);

//d rest of the char should be lowerchase 

restchar = restchar.toLowerCase();

//d add both char 
var mainchar = upperfirst + restchar;
//3 create an alert with uppercase letter of the name 

alert("Hellow! " + mainchar);
