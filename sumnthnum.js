function sumEveryNth(arr, n) {
    if (n <= 0 || n > arr.length) {
        return 0;
    }

    let sum = 0;

    for (let i = n - 1; i < arr.length; i += n) {
        sum += arr[i];
    }

    return sum;
}

const exampleArray = [5, 10, 15, 20, 25, 30, 35, 40];

console.log(sumEveryNth(exampleArray, 3));
console.log(sumEveryNth(exampleArray, 5));
console.log(sumEveryNth(exampleArray, 9)); 