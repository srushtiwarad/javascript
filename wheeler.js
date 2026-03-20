function checkVehicleType(wheels) {
    if (wheels === 2) {
        return "Two-wheeler";
    } else if (wheels === 4) {
        return "Four-wheeler";
    } else {
        // This handles any other number (0, 3, 10, etc.)
        return "Invalid";
    }
}

console.log(checkVehicleType(2)); // "Two-wheeler"
console.log(checkVehicleType(5)); // "Invalid"