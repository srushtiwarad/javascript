function findSmallest(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}

// Example from the image:
const num1 = 10;
const num2 = 5;
const result = findSmallest(num1, num2);

console.log(result); // Output: 5