function calculateEffectiveTaxRate(taxed, original) {
    let taxRate = ((taxed / original) * 100).toFixed(2);

    console.log(`Effective Tax Rate: ${taxRate}%`);
    
}


let taxedAmount = parseFloat(prompt("Enter the taxed amount: "));
let originalAmount = parseFloat(prompt("Enter the original amount: "));

calculateEffectiveTaxRate(taxedAmount, originalAmount);