function calculateHCF(num1, num2) {
    // Find the smaller number
    let smaller = Math.min(num1, num2);
    let hcf = 1;

    // Check from the smaller number down to 1
    for (let i = smaller; i >= 1; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            hcf = i;
            break;  // Stop once we find the largest common factor
        }
    }

    return hcf;
}

// Example with print statement
let num1 = 12;
let num2 = 18;
let result = calculateHCF(num1, num2);
console.log("The HCF of", num1, "and", num2, "is", result);