let colors = [];

let numElements = prompt("Enter the number of elements: ");

for(let i = 0; i < numElements; i++){
    let color = prompt(`Enter element ${i+1}: `);
    colors.unshift(color);
}

console.log("Colors:", colors)
