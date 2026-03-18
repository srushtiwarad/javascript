function coinChange(coins, target) {
    // 1. Initialize a DP array where each index represents an amount.
    // We fill it with Infinity because we haven't found a solution yet.
    const dp = new Array(target + 1).fill(Infinity);

    // 2. Base case: It takes 0 coins to make the amount 0.
    dp[0] = 0;

    // 3. Loop through every amount from 1 to the target
    for (let i = 1; i <= target; i++) {
        // Check every coin denomination
        for (let coin of coins) {
            if (i - coin >= 0) {
                // The value for this amount is the minimum of its current value
                // OR the value of (amount - coin) + 1 (the current coin).
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    // 4. If the target index is still Infinity, it's impossible.
    return dp[target] === Infinity ? -1 : dp[target];
}

// Example 1: coins [3, 2, 1], target 6
console.log(coinChange([3, 2, 1], 6)); // Output: 2 (two 3-coins)

// Example 2: coins [5, 7], target 1
console.log(coinChange([5, 7], 1));    // Output: -1