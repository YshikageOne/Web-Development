let numbers = [];

let numElements = parseInt(prompt("Enter the number of elements: "));

for(let i = 0; i < numElements; i++){
    let number = parseInt(prompt(`Enter element ${i+1}: `));
    numbers.push(number);
}

let numRemove = parseInt(prompt("Enter the number of elements to remove: "));

for(let i = 0; i < numRemove; i++){
    numbers.shift();
}

console.log("Modified Numbers:", numbers);