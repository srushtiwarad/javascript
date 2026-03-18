function degreesToRadians(degrees) {
    let radians = (Math.PI / 180) * degrees;
    return Number(radians.toFixed(3)); // round to 3 decimal places
}

// Example
console.log(degreesToRadians(90));