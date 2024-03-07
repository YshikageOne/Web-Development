function checkPrime(){
    let num = Number(prompt("Enter a number: "));
    let isPrime = true;

    if(num < 2){
        isPrime = false;
    }else {
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0){
                isPrime = false;
                break;
            }
        }
    }

    if(isPrime){
        console.log("Prime");
    }else{
        console.log("Not Prime");
    }
}

checkPrime();