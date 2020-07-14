/**
 * function to grab height and weight
 */
function getValues() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    console.log("Your height: " + height + " meter" + "\nYour Weight: " + weight + " kg");
    
    var BMI = calculateBmi(weight, height);
    console.log("Your BMI: " + BMI);
    addElement(weight, height, BMI);
}

/**
 * function to calculate BMI
 */
function calculateBmi(weight, height){
    var BMI = weight/(height ** 2);
    return BMI.toFixed(2);
}

/**
 * function to create dynamic emelent
 */
function addElement(weight, height, BMI){
    var row = document.createElement('div');
    row.className = 'row';

    row.innerHTML = `<div id="display-details" class="col s12">
                        <h5>Your Details:</h5>
                        <p id="bmi-details">Your Height: ${height}</p>
                        <p id="bmi-details">Your Weight: ${weight}</p>
                        <p id="bmi-details">Your BMI: ${BMI}</p>
                    </div><!--CLOSE COLUMN-->`;

    document.getElementById('main-container').appendChild(row);
}