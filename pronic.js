function isPronic(num) {
    for (let i = 0; i <= num; i++) {
        if (i * (i + 1) === num) {
            return "Pronic";
        }
    }
    return "Not Pronic";
}

// Example
console.log(isPronic(12)); // "Pronic"