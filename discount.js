function getDiscount(originalPrice, discountedPrice) {
    return originalPrice - discountedPrice;
}

// Example from the image:
const originalPrice = 500;
const discountedPrice = 400;

const discountAmount = getDiscount(originalPrice, discountedPrice);

console.log(discountAmount); // Output: 100