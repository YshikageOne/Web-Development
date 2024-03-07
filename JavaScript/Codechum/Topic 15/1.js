let number = [];

let numElements = prompt("Enter the number of elements: ");

for(let i = 0; i < numElements; i++){
    let num = parseInt(prompt(`Enter element ${i+1}: `));
    number.push(num);
}

console.log(number)