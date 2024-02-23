let number = parseInt(prompt("Enter a number: "));

let isPositive = false;

if(number > 0){
    isPositive = true;
}

if(isPositive == true){
    console.log("The number is positive.");
} else{
    console.log("The number is not positive.");
}