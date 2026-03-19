function findIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}

// Example with print statement
let arr = [2, 4, 6, 8, 10];
let element = 6;
let result = findIndex(arr, element);
console.log(result);