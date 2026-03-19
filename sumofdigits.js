function sumOfDigits(num) {
    let numStr = num.toString();
    let sum = 0;

    for (let i = 0; i < numStr.length; i++) {
        sum = sum + parseInt(numStr[i]);
    }

    return sum;
}

// Example with print statement
let num = 12345;
let result = sumOfDigits(num);
console.log("Number:", num);
console.log("Sum of digits:", result);