function getBaseLog(num, base) {
    return Math.log10(num) / Math.log10(base);
}

console.log(getBaseLog(100, 10));
console.log(getBaseLog(8, 2));
console.log(getBaseLog(625, 5));