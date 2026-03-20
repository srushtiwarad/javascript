function sumGreaterThan(arr, num) {
    let sum = 0;

    for (let element of arr) {
        if (element > num) {
            sum += element;
        }
    }

    return sum;
}

const result = sumGreaterThan([4, 6, 10], 5);
console.log(result);