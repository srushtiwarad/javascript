function isDisarium(num) {
    // 1. Convert the number to a string so we can access each digit
    const digits = num.toString().split('');

    // 2. Calculate the sum of digits powered by their position
    const sum = digits.reduce((acc, digit, index) => {
        // Position is index + 1
        return acc + Math.pow(parseInt(digit), index + 1);
    }, 0);

    // 3. Compare the sum with the original number
    return sum === num ? "Disarium" : "Not Disarium";
}

// Example from the image:
console.log(isDisarium(175)); // Output: "Disarium"
console.log(isDisarium(89));  // Output: "Disarium"
console.log(isDisarium(12));  // Output: "Not Disarium"