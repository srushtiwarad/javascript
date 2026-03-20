function isSpongeCase(str) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (i % 2 === 0) {
            // Even index: Must be Uppercase
            if (char !== char.toUpperCase()) {
                return false;
            }
        } else {
            // Odd index: Must be Lowercase
            if (char !== char.toLowerCase()) {
                return false;
            }
        }
    }

    // If we made it through the whole loop, it's valid!
    return true;
}

// Example usage:
console.log(isSpongeCase("SpOnGeCaSe"));
console.log(isSpongeCase("PrOgRaMiZ"));
console.log(isSpongeCase("pRoGrAmIz"));  