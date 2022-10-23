/*
R:
Input - integer n 
Output - boolean if it's a power of 4

E:
Input: n = 16
Output: true

Input: n = 5
Output: false

Input: n = 1
Output: true

A: 
n = 4^x
x = log4(n) (base 4) 
*/

// TC: O(1)
// SC: O(1)
var isPowerOfFour = function(n) {
    // edge case (log(0) is undefined)
    if (n === 0) return false

    // stores logarithm of n with base 4 log4(n) 
    let x = (Math.log(n) / Math.log(4))
    return x === Math.floor(x)
};