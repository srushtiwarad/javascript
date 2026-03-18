function ginortSSort(str) {
    return str.split('').sort((a, b) => {
        // 1. Assign priority scores
        const getPriority = (char) => {
            if (/[a-z]/.test(char)) return 1; // Lowercase first
            if (/[A-Z]/.test(char)) return 2; // Uppercase second
            if (/[13579]/.test(char)) return 3; // Odd digits third
            if (/[02468]/.test(char)) return 4; // Even digits last
            return 5;
        };

        const pA = getPriority(a);
        const pB = getPriority(b);

        // 2. If priorities are different, sort by priority
        if (pA !== pB) return pA - pB;

        // 3. If priorities are the same, sort alphabetically/numerically
        return a.localeCompare(b);
    }).join('');
}

// Example from the image:
const input = "HelloWorld1234";
console.log(ginortSSort(input)); // Output: "dellloorHW1324"