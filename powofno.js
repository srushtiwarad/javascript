function calculatePower(base, exponent) {
    let result = 1;

    // Multiply base by itself 'exponent' times
    for (let i = 0; i < exponent; i++) {
        result = result * base;
    }

    return result;
}

// Example with print statement
let base = 2;
let exponent = 3;
let power = calculatePower(base, exponent);
console.log(base + " raised to the power of " + exponent + " is " + power);