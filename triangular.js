function getTriangularNumber(n) {
    // We follow the algebraic order of operations
    // 1. Add 1 to n
    // 2. Multiply by n
    // 3. Divide by 2
    return (n * (n + 1)) / 2;
}

// Example:
getTriangularNumber(5);
//returns 15
getTriangularNumber(6);
//returns 21