function addFloatingNumber(num1, num2, num3, num4){
    let sum = (num1 + num2 + num3 + num4).toFixed(2);

    console.log(`Sum of floating numbers: ${sum}`);
}

let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));
let num3 = parseFloat(prompt("Enter third number: "));
let num4 = parseFloat(prompt("Enter fourth number: "));

addFloatingNumber(num1, num2, num3, num4)