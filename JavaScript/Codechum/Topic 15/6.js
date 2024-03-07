let numElements = parseInt(prompt("Enter the number of elements: "));
let fruits = new Array(numElements).fill(0);

for(let i = 0; i < numElements; i++){
    let fruit = prompt(`Enter element ${i+1}: `);
    let index = parseInt(prompt(`Enter index ${i+1}: `));

    if(index >= fruits.length){
        index = fruits.length - 1;
    }

    for(let j = fruits.length - 1; j > index; j--){
        fruits[j] = fruits[j - 1] === 0 ? fruits[j] : fruits[j - 1];
    }

    fruits[index] = fruit;
}

console.log("Modified Fruits:", fruits);