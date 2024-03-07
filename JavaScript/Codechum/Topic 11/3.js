let num;

do{
     num = prompt("Enter an integer: ");

    if(num > 0){
        console.log("positive");
    }else if(num < 0){
        console.log("negative");
    }
}while(num != 0);