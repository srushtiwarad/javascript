function findFirstLastIndex(arr, num) {
    let firstIndex = -1;
    let lastIndex = -1;

    // Loop through the array to find first and last occurrences
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            if (firstIndex === -1) {
                firstIndex = i;  // Set first index when number is found for the first time
            }
            lastIndex = i;  // Update last index every time number is found
        }
    }

    return [firstIndex, lastIndex];
}

// Example with print statement
let arr = [5, 13, 14, 13, 14, 15];
let num = 13;
let result = findFirstLastIndex(arr, num);
console.log("Array:", arr);
console.log("Number to find:", num);
console.log("First and last index:", result);