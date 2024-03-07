let numbers = [4, 1, 5, 3, 2];
console.log(numbers);

let max = Math.max(...numbers);
let min = Math.min(...numbers);

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === max || numbers[i] === min){
        numbers[i] = 0;
    }
}

console.log(numbers);