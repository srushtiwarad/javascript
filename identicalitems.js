function checkIdentical(arr) {
    if (arr.length <= 1) return "Identical";

    const firstElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== firstElement) {
            return "Not Identical";
        }
    }

    return "Identical";
}

console.log(checkIdentical([5, 5, 5]));
console.log(checkIdentical([5, 10, 5]));