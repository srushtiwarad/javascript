function countTypableWords(text, brokenChar) {
    // 1. Split the sentence into an array of words
    const words = text.split(' ');

    // 2. Filter the words to keep only those that DON'T include the broken character
    const safeWords = words.filter(word => !word.includes(brokenChar));

    // 3. Return the count of safe words
    return safeWords.length;
}

// Example from your image:
const sentence = "JavaScript challenges are good for practicing coding";
const broken = "p";

console.log(countTypableWords(sentence, broken)); // Output: 6