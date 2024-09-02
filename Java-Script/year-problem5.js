a = prompt("Enter your age :");
lifeInWeeks(a);
function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    var remainingYears = (90 - age);
    var tillYear = (remainingYears*365);
    var tillWeeks = (remainingYears*52);
    var tillMonths = (remainingYears*12);
    
    console.log("You have " + tillYear + " days," + tillWeeks + "weeks, and " + tillMonths + " Months left.");
    
    
    
    
    
/*************Don't change the code below**********/
}