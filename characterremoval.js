function removeAlternate(str) {
    let result = "";

    for (let i = 1; i < str.length; i += 2) {
        result += str[i];
    }

    return result;
}

console.log(removeAlternate("abcdef"));
console.log(removeAlternate("Hello World!")); 