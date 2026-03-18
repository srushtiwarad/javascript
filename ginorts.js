function ginortSSort(str) {
    const chars = str.split('');

    // 1. Separate into categories
    const lowercase = chars.filter(c => /[a-z]/.test(c)).sort();
    const uppercase = chars.filter(c => /[A-Z]/.test(c)).sort();
    const odds = chars.filter(c => /[0-9]/.test(c) && parseInt(c) % 2 !== 0).sort();
    const evens = chars.filter(c => /[0-9]/.test(c) && parseInt(c) % 2 === 0).sort();

    // 2. Join them in the specific order
    return [...lowercase, ...uppercase, ...odds, ...evens].join('');
}

// Example from the image:
const input = "HelloWorld1234";
console.log(ginortSSort(input)); // Output: "dellloorHW1324"