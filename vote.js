function checkEligibility(age) {
    if (age >= 18) {
        return "Eligible";
    } else {
        return "Not Eligible";
    }
}

// Example from the image:
const age = 20;
const result = checkEligibility(age);

console.log(result); // Output: Eligible