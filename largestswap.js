function isLargestAfterSwap(num) {
    // Convert number to string to access digits
    let numStr = num.toString();

    // Get the two digits
    let firstDigit = parseInt(numStr[0]);
    let secondDigit = parseInt(numStr[1]);

    // Form the swapped number
    let swappedNum = parseInt(secondDigit.toString() + firstDigit.toString());

    // Check if original number is greater than or equal to swapped number
    return num >= swappedNum;
}

// Example with print statement
let num = 27;
let result = isLargestAfterSwap(num);
console.log("Original number:", num);
console.log("Swapped number:", parseInt(num.toString()[1] + num.toString()[0]));
console.log("Is original number the largest possible?", result);