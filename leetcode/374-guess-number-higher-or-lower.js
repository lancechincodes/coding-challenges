/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

/*
R:
Guessing game
Input - Guessing from 1 to n
Output - Return pick using pre-defined API (int guess(int num) to find it)

E:
Input: n = 10, pick = 6
Output: 6

Input: n = 1, pick = 1
Output: 1

Input: n = 2, pick = 1
Output: 1

A:
- Binary search approach
*/

// TC: O(log n)
// SC: O(1)
var guessNumber = function(n) {
    let begNum = 1, endNum = n
    let midNum, result

    let found = false
    while (!found) {
        midNum = Math.floor((begNum + endNum) / 2)
        result = guess(midNum)

        if (result === 0) {
            return midNum
        }
        // pick is lower -> reset the endNum
        else if (result === -1) {
            endNum = midNum - 1
        } 
        // pick is higher -> reset the begNum
        else if (result === 1) {
            begNum = midNum + 1
        }
    }
};