function printPattern(rows) {
    for(let i = 1; i <= rows; i++){
        let pattern = "";
        for(let j = 0; j < i; j++){
            pattern += "*";
        }
        console.log(pattern)
    }
}


let inputRows = parseInt(prompt("Enter the number of rows: "));
printPattern(inputRows);