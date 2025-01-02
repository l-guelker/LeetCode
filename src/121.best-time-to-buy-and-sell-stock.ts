/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let max_profit: number = -Infinity;
    let best_buy_value: number = Infinity;

    for (let i = 0; i < prices.length-1; i++) {
        if (prices[i] < best_buy_value) {
            best_buy_value = prices[i];

            let best_profit_in_slice: number = Math.max(...prices.slice(i + 1)) - prices[i];
            max_profit = Math.max(max_profit, best_profit_in_slice);
        }
        // else skip
    }

    return max_profit > 0 ? max_profit : 0;
};
// @lc code=end

