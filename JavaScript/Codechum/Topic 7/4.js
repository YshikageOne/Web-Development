let x = parseInt(prompt("Enter the first number: "));
let y = parseInt(prompt("Enter the second number: "));
let z = parseInt(prompt("Enter the third number: "));

let largestNum = findLarge(x, y, z);

function findLarge(x, y, z){
    //Imperative
    let largest = x;

    if(y > largest){
        largest = y;
    }

    if(z > largest){
        largest = z;
    }

    return largest;

    //Declerative
    //return Math.max(x, y, z);
}

console.log(`The maximum number is: ${largestNum}`);