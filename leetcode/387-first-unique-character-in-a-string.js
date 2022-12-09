/*
R: Input - string s 
Output - return index of first non-repeating character

E: 
Input: s = "leetcode"
Output: 0

Input: s = "loveleetcode"
Output: 2

Input: s = "aabb"
Output: -1

A:
1) For loop and collect occurrences in hash
2) Second for loop, check for key in hash that has only 1 occurrence 
    - return ith index
3) Return -1 if there are no repeating characters
*/

// TC: O(2n)
// SC: O(m) where m is unique characters in string
var firstUniqChar = function(s) {
    const hash = {}
    for (let char of s) {
        hash[char] = hash[char] + 1 || 1
    }

    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === 1) return i
    }

    return -1 // if there are no repeating characters
};