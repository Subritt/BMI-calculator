/**
 * function to grab height and weight
 */
function getValues() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    console.log("Your height: " + height + " meter" + "\nYour Weight: " + weight + " kg");
    
    var bmiResult = calculateBmi(weight, height);
    console.log("Your BMI: " + bmiResult[0]);
    addElement(weight, height, bmiResult);

    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
}

/**
 * function to calculate BMI
 */
function calculateBmi(weight, height){
    var BMI = weight/(height ** 2);
    return [BMI.toFixed(2), checkRange(BMI)];
}

/**
 * function to check BMI range
 */
function checkRange(BMI) {
    if (BMI < 18.5) {
        return "You fall under UNDERWEIGHT Range!";
    }else if(BMI >= 18.5 && BMI < 25){
        return "You fall under NORMAL Range :)";
    }else if(BMI >= 25 && BMI < 30){
        return "You fall under OVERWEIGHT Range!";
    }else{
        return "You fall under OBESE Range";
    }
}

/**
 * function to create dynamic emelent
 */
function addElement(weight, height, bmiResult){
    var row = document.createElement('div');
    row.className = 'row';

    row.innerHTML = `<div id="display-details" class="col s12 m12">
                        <div class="card blue-grey lighten-5">
                            <div class="card-content">
                                <span class="card-title"><b>Your Details:</b><hr></span>
                                <p id="bmi-details" class="center"><b>${bmiResult[1]}</b></p>
                                <p id="bmi-details">Your Height: <b>${height}</b></p>
                                <p id="bmi-details">Your Weight: <b>${weight}</b></p>
                                <p id="bmi-details">Your BMI: <b>${bmiResult[0]}</b></p>
                            </div>
                        </div>
                    </div>`;

    document.getElementById('main-container').appendChild(row);
}