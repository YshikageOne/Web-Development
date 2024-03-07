let numberArray = [];
let evenNum = 0;

console.log("Enter 12 integers: ")

for(let i = 0; i < 12; i++){
    let num = prompt("");
    numberArray.push(num);

    if(num % 2 === 0){
        evenNum++;
    }
}

console.log(`Number of even elements: ${evenNum}`);