function calculate(paramX){
    let localX = 5;
    let result = paramX * localX;
    console.log(result);
}

let paramX = parseFloat(prompt("Enter a number: "));

calculate(paramX);