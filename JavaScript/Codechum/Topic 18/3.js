function calculateDiscountPercentage(discountedPrice, originalPrice) {
    let discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;

    return discountPercentage;
}


let discountedPrice = parseFloat(prompt("Enter the discounted price: "));
let originalPrice = parseFloat(prompt("Enter the original price: "));

let discountPercentage = calculateDiscountPercentage(discountedPrice, originalPrice);

console.log(`Discount Percentage: ${discountPercentage.toFixed(2)}%`);