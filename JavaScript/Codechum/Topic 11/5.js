let num;
let product = 1;

do{
    num = prompt("Enter a number: ");

    if(num != 0){
        product *= num;
    }
}while (num != 0);

console.log(`The product of numbers is: ${product}`);