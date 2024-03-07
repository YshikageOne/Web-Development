function printPattern(){
    let num = prompt("Enter a number: ");

    for(let i = 0; i < num; i++){
        let pattern = "";
        for(let j = 0; j < num - i; j++){
            pattern += (j + 1);
        }
        console.log(pattern)
    }
}



printPattern();