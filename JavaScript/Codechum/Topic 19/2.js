function calculateLinearEquation(x, m, b) {
    let linear = ((m*x) + b).toFixed(2);

    console.log("Result:", linear);
}

let x = parseFloat(prompt("Enter x: "));
let slope = parseFloat(prompt("Enter slope: "));
let yIntercept = parseFloat(prompt("Enter y intercept: "));

calculateLinearEquation(x, slope, yIntercept);