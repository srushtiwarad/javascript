function getFirstNVowels(str, n) {
    const vowels = "aeiouAEIOU";
    let result = "";

    for (let i = 0; i < str.length; i++) {
        // If the current character is a vowel
        if (vowels.includes(str[i])) {
            result += str[i];
        }

        // Stop once we have reached n vowels
        if (result.length === n) {
            break;
        }
    }

    return result;
}

// Example: 
getFirstNVowels("Ice and water", 3);
//returns "Iea"   