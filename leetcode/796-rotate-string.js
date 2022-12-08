/*
R: 
Input - 2 strings (s and goal)
Output - boolean if s can become goal after some number of shifts
Shifts = moving the leftmost character of s to the rightmost position

E:
Input: s = "abcde", goal = "cdeab"
Output: true

Input: s = "abcde", goal = "cdeab"
Output: true

A:
- Edge cases
    - If goal and s length are different, return false
    - If s is the same word as goal, return true
- Loop through each letter in s 
    - set temp to be s substring from ith index + s substring from 0 to ith (non-inclusive of i)
    - If temp is the same word as goal, return true
- Return false
*/

// TC: O(n * m) where n is the length of s and m is the length of the starting and ending endpoints
// SC: O(n)
var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false
    if (s === goal) return true

    let temp
    for (let i = 0; i < s.length; i++) {
        temp = s.substring(i) + s.substring(0,i)
        if (temp === goal) return true
    }

    return false
};