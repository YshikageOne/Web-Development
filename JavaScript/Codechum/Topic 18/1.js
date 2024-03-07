function getRemainder(num1, num2) {
    let result = num1 % num2

    return result;
}

let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));
let result = getRemainder(num1, num2);

console.log("Remainder: " + result);