let firstNumber = prompt("Enter the first value: ");
let secondNumber = prompt("Enter the second value: ");

let loose = (firstNumber == secondNumber);
let strict = (firstNumber !== secondNumber);

console.log("Loose Equality:", loose);
console.log("Strict Inequality:", strict);