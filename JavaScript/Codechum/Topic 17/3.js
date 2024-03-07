function calculateAverage(num1, num2, num3) {
    let average =  parseFloat((num1 + num2 + num3) / 3).toFixed(2);
    console.log(`The calculated average is: ${average}`);
}


let input1 = parseFloat(prompt("Enter the first number: "));
let input2 = parseFloat(prompt("Enter the second number: "));
let input3 = parseFloat(prompt("Enter the third number: "));

calculateAverage(input1, input2, input3);