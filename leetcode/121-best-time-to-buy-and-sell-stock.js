/*
R: 
Input - prices arr
Task - choose a single day to buy stock and single day in the future to sell
Output - max profit (sell - buy)

E: 
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

A: Sliding window approach
- Initialize max profit to be 0 and current profit to be 0
- 2 pointers at i = 0, j = 1 
- while (j < prices.length)
    - check if prices[i] >= prices[j]
        - set i = j
        - shift j
    - else if prices[i] < prices[j]
        - calc current profit
        - shift j
    - set max profit to be the max of the current profit and pre-existing max profit
- return max profit
*/

// TC: O(n)
// SC: O(1)
var maxProfit = function(prices) {
    let maxProfit = 0
    let curProfit = 0
    let i = 0, j = 1
    while (j < prices.length) {
        if (prices[i] >= prices[j]) {
            i = j
            j++
        }
        else if (prices[i] < prices[j]) {
            curProfit = prices[j] - prices[i]
            j++
        }
        maxProfit = Math.max(maxProfit, curProfit)
    }
    return maxProfit
};