/*
R:
Input - string s
Task/Output - Return the longest palindromic substring in s
Palindrome - spelled same backwards as forwards

E:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Input: s = "cbbd"
Output: "bb"

*/

// Too slow
// TC: O(n^3)
// SC: O(1)
var longestPalindrome = function(s) {

    // helper function
    const isPalindrome = function(ss) {
        return ss === ss.split('').reverse().join('')
    }

    let longestSS = ''
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let ss = s.substring(i,j+1)
            if (isPalindrome(ss) && ss.length > longestSS.length) {
                longestSS = ss
            }
        }
    }

    return longestSS    
};


// Optimize
var longestPalindrome = function(s) {

}