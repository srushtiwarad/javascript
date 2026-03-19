function calculateHypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
}

// Example with print statement
let a = 3;
let b = 4;
let hypotenuse = calculateHypotenuse(a, b);
console.log("For a right triangle with sides", a, "and", b);
console.log("The hypotenuse is:", hypotenuse);