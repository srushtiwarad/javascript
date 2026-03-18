function findLarger(num1, num2) {
    if (num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}

// Example from the image:
console.log(findLarger(12, 8)); // Output: 12
console.log(findLarger(5, 5));  // Output: 5