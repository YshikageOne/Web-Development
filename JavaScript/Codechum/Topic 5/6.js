let firstNumber = parseInt(prompt("Enter the first number: "));
let secondNumber = parseInt(prompt("Enter the second number: "));

let result1 = (firstNumber + secondNumber) * 5;
let result2 = Math.pow(secondNumber, 2);

let compare = result1 <= result2

console.log(compare);