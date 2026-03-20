function findShortestWord(str) {
    // 1. Split the string by spaces to get an array of words
    const words = str.split(' ');

    // 2. Assume the first word is the shortest to start
    let shortest = words[0];

    // 3. Loop through the rest of the array
    for (let i = 1; i < words.length; i++) {
        // 4. If the current word is strictly shorter than our current 'shortest'
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }

    return shortest;
}

findShortestWord("I love programming languages");
//returns "I"