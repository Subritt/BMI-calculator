/**
 * function to grab height and weight
 */
function getValues() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    console.log(weight + " ||| " + height);
    
    calculateBmi(weight, height);
}

/**
 * function to calculate BMI
 */
function calculateBmi(weight, height){
    var BMI = weight/(height ** 2);
    console.log("Your BMI: " + BMI.toFixed(2));
}