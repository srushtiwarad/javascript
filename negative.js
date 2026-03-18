function isNegative(num) {
    if (num < 0) {
        return "Negative";
    } else {
        return "Not Negative";
    }
}

// Example from the image:
const num = -5;
const result = isNegative(num);

console.log(result); // Output: Negative