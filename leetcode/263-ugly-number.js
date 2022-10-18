/**
 * @param {number} n
 * @return {boolean}
 */

/*
R: 
Input - number
Task - return true if n is an ugly number
ugly number = pos num whose prime factors are limited to only 2, 3, 5 
Output - boolean

E: 
Input: n = 6
Output: true
Explanation: 6 = 2 × 3

Input: n = 1
Output: true
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.

A: 
- Edge case check: if n is less than zero, return false
- While (n is not 1) (divides evenly into 2, 3, or 5)
    - check n % 2 === 0 -> n /= 2         
    - check n % 3 === 0 -> n /= 3         
    - check n % 5 === 0 -> n /= 5      
    - else return false (not an ugly number) (prime numbers will fall under this check)
- return true 
*/

// TC: O(n)
// SC: O(1)
var isUgly = function(n) {
    // edge case (non-pos number)
    if (n <= 0) return false

    while (n !== 1) {
        if (n % 2 === 0) {
            n /= 2
        }
        else if (n % 3 === 0) { 
            n /= 3
        }
        else if (n % 5 === 0) {
            n /= 5
        }
        else {
            return false
        }
    }

    return true
};