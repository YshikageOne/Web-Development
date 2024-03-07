function calculateSum() {
    let num = Number(prompt("Enter a number: "));
    let sum = 0;

    for(let i = 1; i <= num; i++){
        sum += i;
    }

    console.log(sum);
}


calculateSum();