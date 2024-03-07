let num;

do{
    num = prompt("Enter a number: ");

    if(num > 0){
        square = num * num
        console.log(`Square: ${square}`);
    }
    
}while (num >= 0)