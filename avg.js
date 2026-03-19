function calculateAverage(arr) {
    let sum = 0;

    // Loop through the array to calculate the sum
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    // Calculate average (sum divided by number of elements)
    let average = sum / arr.length;
    return average;
}

// Example with print statement
let numbers = [4, 6, 8, 10];
let result = calculateAverage(numbers);
console.log("The average of", numbers, "is", result);