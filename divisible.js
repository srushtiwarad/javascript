function isDivisibleByFive(num) {
    if (num % 5 === 0) {
        return "Yes";
    } else {
        return "No";
    }
}

// Example from the image:
const num = 10;
const result = isDivisibleByFive(num);

console.log(result); // Output: Yes