function insertDashes(num) {
    return num.toString().split("").join("-");
}

// Example
let num = 12345;
let result = insertDashes(num);

console.log(result); // "1-2-3-4-5"