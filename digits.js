function countDigits(num) {
    // Convert number to string and return its length
    return num.toString().length;
}

// Example with print statement
let num = 287;
let result = countDigits(num);
console.log("Number:", num);
console.log("Number of digits:", result);