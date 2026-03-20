function toSnakeCase(str) {
    return str
        .toLowerCase()      // 1. Convert the entire string to lowercase
        .trim()             // 2. Remove leading/trailing whitespace (optional but good practice)
        .split(/\s+/)       // 3. Split by one or more spaces
        .join('_');         // 4. Join the words back together with underscores
}

// Example usage:
const input = "Hello World";
console.log(toSnakeCase(input));
//returns "hello_world"