/**
 * function to grab height and weight
 */
function getValues() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    console.log("Your height: " + height + " meter" + "\nYour Weight: " + weight + " kg");
    
    calculateBmi(weight, height);
}

/**
 * function to calculate BMI
 */
function calculateBmi(weight, height){
    var BMI = weight/(height ** 2);
    console.log("Your BMI: " + BMI.toFixed(2));
}