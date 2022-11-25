/*
R: Input - positive int n 
Output - smallest pos int that is multiple of 2 and n

E:
Input: n = 5
Output: 10
Explanation: The smallest multiple of both 5 and 2 is 10.

Input: n = 6
Output: 6
Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.

A: 
- If n is divisible by 2, then n is already the smallest even multiple
- Otherwise, n * 2 would be the smallest even multiple
*/

var smallestEvenMultiple = function(n) {
    return n % 2 === 0 ? n : n * 2
};