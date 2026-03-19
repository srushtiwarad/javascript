function hasSpace(str) {
    // Check if the string includes a space character
    if (str.includes(' ')) {
        return "Space";
    } else {
        return "No Space";
    }
}

// Example with print statement
let text = "Hello World";
let result = hasSpace(text);
console.log("String:", text);
console.log("Result:", result);