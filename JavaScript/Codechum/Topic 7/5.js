let x = parseInt(prompt("Enter the first number: "));
let y = parseInt(prompt("Enter the second number: "));

let minNum = findMin(x, y);

function findMin(x, y){
    let min = x;

    if(y < min){
        min = y;
    }

    return min;
}

console.log(`The minimum number is: ${minNum}`);