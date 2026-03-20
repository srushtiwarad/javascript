function tribonacci(n) {
    // Handle the starting cases provided in the instructions
    if (n === 1) return 0;
    if (n === 2 || n === 3) return 1;

    // These are our three "preceding" numbers
    let a = 0; // 1st
    let b = 1; // 2nd
    let c = 1; // 3rd
    let next;

    // Start the loop from the 4th number up to n
    for (let i = 4; i <= n; i++) {
        next = a + b + c; // Calculate the sum of the three previous

        // Shift all variables one spot to the right
        a = b;
        b = c;
        c = next;
    }

    return c;
}

tribonacci(5);
//returns 4
tribonacci(10);
//returns 81