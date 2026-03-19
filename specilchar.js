function removeSpecialChars(str) {
    let result = "";

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // Check if character is a letter (a-z, A-Z), digit (0-9), or space
        if ((char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9') ||
            char === ' ') {
            result = result + char;
        }
    }

    return result;
}

// Example with print statement
let str = "He!1lo@ Wo#rld$%^&*()";
let result = removeSpecialChars(str);
console.log("Original string:", str);
console.log("String after removing special characters:", result);