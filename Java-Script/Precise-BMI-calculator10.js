function bmiCalculator (weight, height) {
    var interpretation = Math.round(weight / (height * height));
    return interpretation;
}

var interpretation = bmiCalculator(55, 2);

if (interpretation < 18.5){
    console.log("Your BMI is " + interpretation + ",so you are underweight.")
}
if (interpretation >= 18.5 && interpretation < 24.9) {
    console.log("Your BMI is" + interpretation + ",so you have a normal weight.")
}
if (interpretation > 24.9){
    console.log("Your BMI is " + interpretation + ",so you are overweight")
}

