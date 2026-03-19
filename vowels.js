function removeVowels(str) {
    let result = "";
    let vowels = "aeiouAEIOU";

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the character is NOT a vowel
        if (vowels.indexOf(str[i]) === -1) {
            result = result + str[i];
        }
    }

    return result;
}

// Example with print statement
let str = "Orange juice";
let result = removeVowels(str);
console.log("Original string:", str);
console.log("String after removing vowels:", result);