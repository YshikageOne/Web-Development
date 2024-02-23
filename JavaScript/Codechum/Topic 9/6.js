let n = parseInt(prompt("Enter a number: "));

if(isPrime(n)){
    console.log(`${n} is a prime number.`);
}else{
     console.log(`${n} is not a prime number.`);
}

function isPrime(n){
    if(n <= 1){
        return false;
    }

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            return false;
        }
    }

    return true;
}