// R: Given int array of coins and int amount (1 coin === 1 amount, 2 coin === 2 amount, etc)
// Return fewest number of coins to make up that money assuming you have infinite number of each coin
// Otherwise, return -1

// E: [1,2,5] 13 // 5 + 5 + 2 + 1 // 4

// A: Dynamic programming - tabulation
// Create a table filled with infinity (0 to amount) so length of amount + 1
// Set first index to be 0 because you don't need any coins to reach amount of 0
// Iterate over each coin that you have
// Iterate each amt (with this approach, you will solve for the minimum number of coins needed to make the amount leading up to the target amount NOT just the target amount)
// If (coin is less than amount) ex. 1 <= 2 you contribute to make that amount 
    // Set index of the potential amount to be amt - coin
    // Set potential amount to be table[index] + 1
    // Set the new lowest number of coins to each that amount (index stands for amt) to be the mininum of current and new potential amt that was just calculated
// If the last index of the table was not updated (can't evenly make the target amount with given coins) return -1
    // otherwise return the value at the last index of the table

// Time complexity: O(n^2) nested for loop
// Space complexity: O(n) creating array which depends on target amount
var coinChange = function(coins, amount) {
    const table = new Array(amount + 1).fill(Infinity)
    table[0] = 0
    
    for (let coin of coins) {
        for (let amt = 0; amt < table.length; amt++) {
            if (coin <= amt) {
                let idx = amt - coin
                let potentialAmt = table[idx] + 1
                table[amt] = Math.min(potentialAmt, table[amt])
            }
        }
    }
    
    return table[table.length - 1] === Infinity ? -1 : table[table.length - 1]
};