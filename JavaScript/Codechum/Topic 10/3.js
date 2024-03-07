let number = parseInt(prompt("Enter a number: "));

let multiple = 1;

while(multiple <= 10){
    let product = number * multiple;
    console.log(`${number} x ${multiple} = ${product}`);
    multiple++;
}