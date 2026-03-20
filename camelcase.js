function toCamelCase(str) {
    // 1. Split the string into an array of words
    // 2. Map through each word
    return str.split(' ').map((word, index) => {
        // If it's the FIRST word, make it lowercase
        if (index === 0) {
            return word.toLowerCase();
        }

        // For all other words, capitalize the first letter and lowercase the rest
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(''); // 3. Join the array back into a single string with no spaces
}

toCamelCase("Hello world");
//returns   "helloWorld"
toCamelCase("How are you");
//returns "howAreYou"