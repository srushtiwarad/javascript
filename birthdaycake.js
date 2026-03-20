function countTallestCandles(arr) {
    let maxHeight = Math.max(...arr);
    let count = arr.filter(x => x === maxHeight).length;
    return count;
}

// Example
let arr = [5, 10, 3, 14, 2, 14];
console.log(countTallestCandles(arr));