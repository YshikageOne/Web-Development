let firstNum = parseInt(prompt("Enter the first number: "));
let secondNum = parseInt(prompt("Enter the second number: "));

let operator = prompt("Enter the operator: ");

let result;

switch(operator){

    case '+':
        result = firstNum + secondNum;
        console.log(`The result is: ${result}`);
        break;

    case '-':
        result = firstNum - secondNum;
        console.log(`The result is: ${result}`);
        break;

    case '*':
        result = firstNum * secondNum;
        console.log(`The result is: ${result}`);
        break;

    case '/':
        //anti divide by 0
        if(secondNum !== 0){
            result = firstNum / secondNum;
            console.log(`The result is: ${result}`);
        } else{
            console.log("error don't divide by 0 :)");
            return;
        }
        break;
}        
