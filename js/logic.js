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

    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
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

    row.innerHTML = `<div id="display-details" class="col s12 m12">
                        <div class="card blue-grey lighten-5">
                            <div class="card-content">
                                <span class="card-title"><b>Your Details:</b><hr></span>
                                <p id="bmi-details">Your Height: <b>${height}</b></p>
                                <p id="bmi-details">Your Weight: <b>${weight}</b></p>
                                <p id="bmi-details">Your BMI: <b>${BMI}</b></p>
                            </div>
                        </div>
                    </div>`;

    document.getElementById('main-container').appendChild(row);
}