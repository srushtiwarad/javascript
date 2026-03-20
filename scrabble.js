function scrabblePoints(word) {
    const points = {
        'a': 1, 'b': 3, 'c': 3, 'd': 2, 'e': 1, 'f': 4, 'g': 2, 'h': 4,
        'i': 1, 'j': 8, 'k': 5, 'l': 1, 'm': 3, 'n': 1, 'o': 1, 'p': 3,
        'q': 10, 'r': 1, 's': 1, 't': 1, 'u': 1, 'v': 4, 'w': 4, 'x': 8,
        'y': 4, 'z': 10
    };

    let total = 0;

    // Convert word to lowercase to match the keys in our 'points' object
    const lowerWord = word.toLowerCase();

    // Loop through each character of the string
    for (let i = 0; i < lowerWord.length; i++) {
        let letter = lowerWord[i];

        // Add the point value of the current letter to our total
        // Using points[letter] looks up the value associated with that key
        total += points[letter] || 0;
    }

    return total;
}

// Example: scrabblePoints("cabbage") would return 14 
console.log(scrabblePoints("cabbage"));