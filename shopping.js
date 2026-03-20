function memorialDayDiscount(prices) {
    let totalCost = 0;

    for (let i = 0; i < prices.length; i++) {
        let currentPrice = prices[i];

        if (currentPrice > 100) {
            // Apply 10% discount: price * 0.9
            totalCost += currentPrice * 0.9;
        } else {
            // Keep price as is
            totalCost += currentPrice;
        }
    }

    return totalCost;
}

// Example usage:
// memorialDayDiscount([120, 50, 600]) returns 698