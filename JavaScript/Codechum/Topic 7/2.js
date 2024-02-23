let number = parseInt(prompt("Enter a number: "));

let isEven = false;

if((number  % 2) === 0){
    isEven = true;
}

if(isEven == true){
    console.log("The number is even.");
} else{
    console.log("The number is not even.");
}