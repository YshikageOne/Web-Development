let base = prompt("Enter the base number: ");

let exponent = prompt("Enter the exponent: ");

let result = 1;
while(exponent > 0){
    result *= base;
    exponent--;
}

console.log(`Result: ${result}`)