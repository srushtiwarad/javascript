function isAlphabeticalOrder(str) {
    // Loop through each character and compare with the next one
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] > str[i + 1]) {
            return "Unordered";
        }
    }
    return "Ordered";
}

// Example with print statement
let str = "abcde";
let result = isAlphabeticalOrder(str);
console.log("String:", str);
console.log("Result:", result);