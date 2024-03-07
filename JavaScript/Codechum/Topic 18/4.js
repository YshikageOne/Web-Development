function calculatePercentage(value, total){
    let result = (value / total) * 100;

    return result;
}


let value = parseFloat(prompt("Enter the value: "));
let total = parseFloat(prompt("Enter the total: "));

let percentage = calculatePercentage(value, total);

console.log(`${percentage.toFixed(2)}% of ${total.toFixed(2)} is ${value.toFixed(2)}`);