function isEmpty(str) {
    // Check if string length is 0
    if (str.length === 0) {
        return "Empty";
    } else {
        return "Not Empty";
    }
}

// Example with print statement
let text = "Hello World!";
let result = isEmpty(text);
console.log("String:", text);
console.log("Result:", result);