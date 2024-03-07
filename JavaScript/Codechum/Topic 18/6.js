function calculateFactorial(num) {
    let result = 1;
    for(let i = 1; i <= num; i++){
        result *= i;
    }

    return result
}


let inputNumber = parseInt(prompt("Enter a number: "));
let resultFactorial = calculateFactorial(inputNumber);
console.log("The factorial of", inputNumber, "is", resultFactorial);