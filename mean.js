function meanOfDigits(num) {
    // Convert number to string to access each digit
    let numStr = num.toString();
    let sum = 0;

    // Loop through each digit and add to sum
    for (let i = 0; i < numStr.length; i++) {
        // Convert each character back to number and add to sum
        sum = sum + parseInt(numStr[i]);
    }

    // Calculate mean (sum divided by number of digits)
    return sum / numStr.length;
}

// Example with print statement
let num = 12345;
let result = meanOfDigits(num);
console.log(result);