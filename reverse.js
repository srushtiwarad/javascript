function reverseNumber(num) {
    // 1. Convert to string: "1234"
    // 2. Split into array: ["1", "2", "3", "4"]
    // 3. Reverse array: ["4", "3", "2", "1"]
    // 4. Join back to string: "4321"
    const reversedStr = num.toString().split('').reverse().join('');

    // Convert back to a number
    return parseInt(reversedStr);
}

console.log(reverseNumber(1234)); // Output: 4321