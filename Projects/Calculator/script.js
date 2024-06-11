const inputDisplay = document.getElementById('input-text');
const resultDisplay = document.getElementById('result');
let currentInput = '0';
let expression = '';
let hasOperator = false;

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (button.id === 'clear'){
            currentInput = '0';
            expression = '';
            hasOperator = false;
            resultDisplay.innerText = '';
        }

        else if (button.id === 'plus-minus'){
            currentInput = (parseFloat(currentInput) * -1).toString();
            
        }

        else if (button.id === 'percent'){
            currentInput = (parseFloat(currentInput) / 100).toString();
            
        }

        else if (button.id === 'divide' || button.id === 'multiply' || button.id === 'subtract' || button.id === 'add'){
            if (currentInput !== '0' || expression !== '') {
                expression += currentInput + value;
                currentInput = '0';
                hasOperator = true;
            }
        }

        else if (button.id === 'equals'){
            if (expression) {
                expression += currentInput;
                const result = evaluateExpression(expression);
                resultDisplay.innerText = formatNumber(result);
                expression = '';
                currentInput = '';
                inputDisplay.innerText = formatNumber(result);
                expression = result;
                resultDisplay.innerText = '';
                hasOperator = false;
            }
        }

        else {
            if (currentInput === '0'){
                currentInput = value;
            } else {
                currentInput += value;
            }
        }

        inputDisplay.innerText = formatNumber(expression + currentInput);
        
        if (hasOperator && button.id !== 'equals') {
            resultDisplay.innerText = formatNumber(evaluateExpression(expression + currentInput));
        }
    });
});

setInterval(adjustFontSize, 10);

function evaluateExpression(expr) {
    try {
        return Function('"use strict";return (' + expr.replace(/×/g, '*').replace(/÷/g, '/') + ')')();
    } catch (e) {
        return 'Error';
    }
}

function formatNumber(num) {
    if (isNaN(num)) return num;
    return parseFloat(num).toLocaleString('en');
}

function adjustFontSize() {
    const maxFontSize = 60;
    const minFontSize = 16;
    const displayWidth = inputDisplay.parentElement.clientWidth;
    let fontSize = maxFontSize;

    inputDisplay.style.fontSize = fontSize + 'px';
    let formattedText = inputDisplay.textContent;

    console.log(formattedText.length);
    while (inputDisplay.scrollWidth > displayWidth && fontSize > minFontSize) {
        fontSize--; 
        inputDisplay.style.fontSize = fontSize + 'px'; 
    }
}

function updateDisplay(text) {
    inputDisplay.textContent = text;
    adjustFontSize();
}

window.addEventListener('resize', adjustFontSize);
adjustFontSize();