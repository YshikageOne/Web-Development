let numbers = [ 1, 2, 3, 4, 5 ];
console.log(numbers);

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 2){
        numbers[i] *= 2;
    }
}

console.log(numbers);