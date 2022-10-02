/*
R: 
Input - input of int 
Output - reversed version of int without leading zeroes

Assumptions
1) Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

E: 
Input: x = 123
Output: 321
Input: x = -123
Output: -321
Input: x = 120
Output: 21

A: 
- Check if negative number
- convert to int to str

- Loop through digits in str starting from end to beginning 
    - pop if 0
    - once non-zero number is hit, break

- If positive number, split, reverse, join
- If negative number, split, reverse, join, convert to num, and add negative sign to str

- return num conversion of x
*/

// TC: O(n)
// SC: O(n)
var reverse = function(x) {

    let isNegative = false
    x = x.toString()

    if (x < 0) {
        x = x.substring(1)
        isNegative = true
    }

    for (let i = x.length - 1; i >= 0; i--) {
        if (x[i] === 0) x.pop()
        else break
    }

    x = x.split('').reverse().join('')

    if (Number(x) < -1 * 2**31 || Number(x) > 2**31 - 1) return 0

    if (isNegative) x = '-' + x

    return Number(x)
};