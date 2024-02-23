let year = parseInt(prompt("Enter a year: "));

let leapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

if(leapYear){
    console.log("It is a leap year.");
}else{
    console.log("It is not a leap year.");
}