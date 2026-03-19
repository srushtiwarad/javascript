function calculateProfitOrLoss(sellingPrice, costPrice) {
    let result = sellingPrice - costPrice;

    if (result > 0) {
        return "Profit";
    } else if (result < 0) {
        return "Loss";
    } else {
        return "Break-even";
    }
}

// Example with print statement
let sellingPrice = 50;
let costPrice = 30;
let outcome = calculateProfitOrLoss(sellingPrice, costPrice);
console.log("Selling Price:", sellingPrice);
console.log("Cost Price:", costPrice);
console.log("Result:", outcome);