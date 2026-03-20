function basicCalculator(num1, op, num2) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            // Check for division by zero to avoid "Infinity"
            if (num2 === 0) {
                return null;
            }
            return num1 / num2;
        default:
            // If the operator isn't one of the four allowed, return null
            return null;
    }
}

basicCalculator(5, '+', 3);
//returns 8
basicCalculator(10, '/', 0);
//returns null