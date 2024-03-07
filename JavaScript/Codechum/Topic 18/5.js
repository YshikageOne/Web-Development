function convertCelsiusToFahrenheit(celsius){
    let fahrenheit = celsius * (9/5) + 32;

    return fahrenheit;
}


let inputCelsius = parseFloat(prompt("Enter temperature in Celsius: "));
let fahrenheitTemperature = convertCelsiusToFahrenheit(inputCelsius);
console.log("Temperature in Fahrenheit:", fahrenheitTemperature.toFixed(2));