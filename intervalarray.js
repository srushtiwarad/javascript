function findInterval(arr) {
    // Find the maximum and minimum values in the array
    let max = arr[0];
    let min = arr[0];

    // Loop through the array to find max and min
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    // Calculate the interval
    return max - min;
}

// Example with print statement
let numbers = [5, 2, 9, 1];
let interval = findInterval(numbers);
console.log("Array:", numbers);
console.log("Interval (max - min):", interval);