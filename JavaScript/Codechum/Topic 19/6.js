function calculateAverage(math, science, filipino) {
    let average = ((math + science + filipino) / 3).toFixed(2);

    console.log("Average Grade:", average);
}

function displayStudentReport(name, grade, math, science, filipino) {
    console.log("Student Name:", name);
    console.log("Grade Level:", grade);
    console.log("Math Grade:", (math).toFixed(2));
    console.log("Science Grade:", (science).toFixed(2));
    console.log("Filipino Grade:", (filipino).toFixed(2));
}

let studentName = prompt("Enter Student Name: ");
let gradeLevel = parseInt(prompt("Enter Grade Level: "));
let math = parseFloat(prompt("Enter Math Grade: "));
let science = parseFloat(prompt("Enter Science Grade: "));
let filipino = parseFloat(prompt("Enter Filipino Grade: "));

displayStudentReport(studentName, gradeLevel, math, science, filipino);
calculateAverage(math, science, filipino);