function calculateCircleArea(radius) {
    let area = (3.14 * (radius * radius)).toFixed(2);

    console.log(area);
}

let radius = Number(prompt("Enter the radius: "));

calculateCircleArea(radius);