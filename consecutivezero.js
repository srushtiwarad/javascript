function longestConsecutiveZeros(str) {
    let maxZeros = 0;
    let currentZeros = 0;

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            currentZeros++;
            if (currentZeros > maxZeros) {
                maxZeros = currentZeros;
            }
        } else {
            currentZeros = 0;  // Reset counter when encountering '1'
        }
    }

    return maxZeros;
}

// Example with print statement
let str = "1010010001";
let result = longestConsecutiveZeros(str);
console.log("Binary string:", str);
console.log("Longest consecutive zeros:", result);