function convertToTotalSeconds(hours, minutes, seconds){
    let totalSec = (hours * 3600) + (minutes * 60) + seconds;
    console.log(`Total seconds: ${totalSec}`)
}


let hours = parseInt(prompt("Enter hours: "));
let minutes = parseInt(prompt("Enter minutes: "));
let seconds = parseInt(prompt("Enter seconds: "));

convertToTotalSeconds(hours, minutes, seconds);