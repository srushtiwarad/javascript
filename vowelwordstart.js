function checkVowelStart(word) {
    // 1. Get the first character and make it lowercase
    const firstChar = word.charAt(0).toLowerCase();

    // 2. Define the vowels
    const vowels = "aeiou";

    // 3. Check if 'vowels' includes our first character
    if (vowels.includes(firstChar)) {
        return "VStart";
    } else {
        return "Start";
    }
}

// Example usage:
console.log(checkVowelStart("apple"));
console.log(checkVowelStart("Banana")); 