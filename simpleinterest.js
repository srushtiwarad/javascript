function calculateSimpleInterest(principal, rate, time) {
    // Multiply the three values together, then divide by 100
    const interest = (principal * rate * time) / 100;

    return interest;
}

// Example:
calculateSimpleInterest(1000, 5, 2);
//returns 100;