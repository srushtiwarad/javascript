/**
 * Calculates the total resistance for three resistors in series.
 * @param {number} R1 - Resistance of the first component.
 * @param {number} R2 - Resistance of the second component.
 * @param {number} R3 - Resistance of the third component.
 * @returns {number} The total sum of resistances.
 */
function getTotalResistance(R1, R2, R3) {
    return R1 + R2 + R3;
}

// Example usage:
const R1 = 5;
const R2 = 10;
const R3 = 15;

console.log(getTotalResistance(R1, R2, R3));
//returns 30