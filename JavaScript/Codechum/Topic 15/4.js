let fruits = [];

let numElements = parseInt(prompt("Enter the number of elements to add: "));

for(let i = 0; i < numElements; i++){
    let fruit = prompt(`Enter element ${i+1}: `);
    fruits.push(fruit);
}

let numRemove = parseInt(prompt("Enter the number of elements to remove: "));

for(let i = 0; i < numRemove; i++){
    fruits.pop();
}

console.log("Modified Fruits:", fruits);