function toPascalCase(str) {
    return str
        .split(' ')              // 1. Split the string into an array of words
        .map(word =>             // 2. Map through each word
            word.charAt(0).toUpperCase() + // Capitalize the first letter
            word.slice(1).toLowerCase()    // Ensure the rest is lowercase
        )
        .join('');               // 3. Join them back together with no spaces
}

// Example usage:
const input = "hello world";
console.log(toPascalCase(input));
//returns "HelloWorld"