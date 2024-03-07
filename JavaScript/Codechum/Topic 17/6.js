function calculateBMI(weight, height) {
    let bmi = (weight / (height * height)).toFixed(2);
    console.log("BMI:", bmi)
}


let inputWeight = parseFloat(prompt("Enter your weight in kilograms: "));
let inputHeight = parseFloat(prompt("Enter your height in meters: "));

calculateBMI(inputWeight, inputHeight);