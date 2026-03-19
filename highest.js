function highestDigit(num) {
    let numStr = num.toString();
    let highest = 0;

    for (let i = 0; i < numStr.length; i++) {
        let digit = parseInt(numStr[i]);
        if (digit > highest) {
            highest = digit;
        }
    }

    return highest;
}

// Example with print statement
let num = 39482;
let result = highestDigit(num);
console.log("Number:", num);
console.log("Highest digit:", result);