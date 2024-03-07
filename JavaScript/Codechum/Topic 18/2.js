function calculateArea(width, height){
    let area = width * height;

    return area;
}

let inputWidth = parseFloat(prompt("Enter the width: "));
let inputHeight = parseFloat(prompt("Enter the height: "));
let area = calculateArea(inputWidth, inputHeight);
console.log("The area of the rectangle is:", area);