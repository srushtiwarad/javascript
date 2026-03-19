function isWithinRange(num, lowerLimit, upperLimit) {
    // Check if num is between lowerLimit and upperLimit (inclusive)
    if (num >= lowerLimit && num <= upperLimit) {
        return "Yes";
    } else {
        return "No";
    }
}

// Example with print statement
let num = 10;
let lowerLimit = 1;
let upperLimit = 10;
let result = isWithinRange(num, lowerLimit, upperLimit);
console.log("Number:", num);
console.log("Range:", lowerLimit, "to", upperLimit);
console.log("Result:", result);