function countParams(...args) {
    // The spread operator (...) collects all arguments into an array
    return args.length;
}

// Example with print statement
let result = countParams(6, 23, 69, 22, 9);
console.log("Number of parameters:", result);