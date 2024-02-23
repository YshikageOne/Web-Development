let angle1 = parseInt(prompt("Enter the first angle: "));
let angle2 = parseInt(prompt("Enter the second angle: "));
let angle3 = parseInt(prompt("Enter the third angle: "));

let isTriangle = (angle1 + angle2 + angle3) === 180;

if(isTriangle){
    console.log("The angles form a triangle.");
}else{
    console.log("The angles do not form a triangle.");
}