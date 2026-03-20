function arraySum(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}

console.log(arraySum([10, 20, 30]));