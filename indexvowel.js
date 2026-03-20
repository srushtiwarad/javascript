function findFirstVowel(str) {
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            return i; // Returns the index as soon as a vowel is found
        }
    }

    return -1; // Return -1 if no vowel is found
}

// Example:
console.log(findFirstVowel("hello")); // Output: 1  