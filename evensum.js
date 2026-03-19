function makeSumEven(num1, num2) {
    let sum = num1 + num2;

    // If sum is odd, add 1 to make it even
    if (sum % 2 !== 0) {
        return sum + 1;
    }

    return sum;
}

// Example with print statement
let num1 = 4;
let num2 = 3;
let result = makeSumEven(num1, num2);
console.log("First number:", num1);
console.log("Second number:", num2);
console.log("Original sum:", num1 + num2);
console.log("Sum after making it even:", result);