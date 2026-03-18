function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example from the image:
const num = 7;
const result = evenOrOdd(num);

console.log(result); // Output: Odd