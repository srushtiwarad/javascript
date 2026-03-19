function largestNumberAfterSwap(num) {
    // Convert number to array of digits
    let digits = num.toString().split('');
    let maxNum = num;

    // Try swapping every pair of digits
    for (let i = 0; i < digits.length; i++) {
        for (let j = i + 1; j < digits.length; j++) {
            // Swap digits at positions i and j
            let temp = digits[i];
            digits[i] = digits[j];
            digits[j] = temp;

            // Convert back to number and check if it's larger
            let newNum = parseInt(digits.join(''));
            if (newNum > maxNum) {
                maxNum = newNum;
            }

            // Swap back to original for next iteration
            temp = digits[i];
            digits[i] = digits[j];
            digits[j] = temp;
        }
    }

    return maxNum;
}

// Example with print statement
let num = 2736;
let result = largestNumberAfterSwap(num);
console.log("Original number:", num);
console.log("Largest number after swapping two digits:", result);