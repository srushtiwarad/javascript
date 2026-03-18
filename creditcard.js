function maskCard(cardNumber) {
    return "*".repeat(12) + cardNumber.slice(-4);
}

// Example
let cardNumber = "1234567890123456";
let result = maskCard(cardNumber);

console.log(result); // ************3456