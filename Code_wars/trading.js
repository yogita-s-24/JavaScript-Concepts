function maxProfit(prices) {
    let minPrice = Infinity, maxProfit = 0;
    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}