let grades = [80, 90, 75, 60, 85];

console.log(grades);

let pass = prompt("Enter the pass mark: ");

for(let i = 0; i < grades.length; i++){
    if(grades[i] < pass){
        grades[i] = 0;
    }
}

console.log(grades)