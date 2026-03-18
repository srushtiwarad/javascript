function moveZeroes(arr) {
    let lastNonZeroIndex = 0;

    // Move all non-zero elements to the front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[lastNonZeroIndex] = arr[i];
            lastNonZeroIndex++;
        }
    }

    // Fill the rest of the array with zeroes
    for (let i = lastNonZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;
}

let arr = [10, 0, 5, 20, 0, 12, 0];
console.log(moveZeroes(arr)); // Output: [10, 5, 20, 12, 0, 0, 0]