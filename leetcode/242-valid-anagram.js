/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
R: Input -  str s and str t
Output - Return true if t is an anagram of s 
Anagram = word or phrase formed by rearranging letters of a different word of phrase using all the original letters exactly once

E: 
Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false

A: 1) Sort then compare s and t
2) Hash map w/ 2 for loops 
    - first for loop stores number of instances of each unique character in str s
    - second for loop compares occurrences of characters in str t to s
    - return true if makes it through second for loop
*/

// TC: O(n log n)
// SC: O(n), using split method
// var isAnagram = function(s, t) {
//     return s.split('').sort().join('') === t.split('').sort().join('')
// };

// Optimize solution - hash
// TC: O(n)
// SC: O(n)
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    let hash = {}
    for (let char of s) {
        if (!hash[char]) hash[char] = 1
        else hash[char]++
    }

    // console.log(hash)

    for (let char of t) {
        // !hash[char] = 0 is falsy so cases like s='aacc' to t='aaab' will be caught and return false since hash[a] = 0 and is no longer considered to exist in hash
        if (!hash[char]) return false
        hash[char]--
    }

    // console.log(hash)

    return true
}