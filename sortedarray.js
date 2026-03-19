function isArraySorted(arr) {
    // Loop through the array and check if each element is less than or equal to the next
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return "Not Sorted";
        }
    }
    return "Sorted";
}

// Example with print statement
let numbers = [10, 20, 30, 40];
let result = isArraySorted(numbers);
console.log("Array:", numbers);
console.log("Result:", result);