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

A: 
1) Brute force
    - Check all combinations (O(n^3))
2) Inside out approach
    - for loop going through each char in s
        - even palindrome (check i-1 and i to be equal)
        - odd palindrome (check i-1 and i+1 to be equal)
            - if equal move left and right down 
            - if not equal, break out of while loop
        - set current max between even and odd (indices)
        - set overall max between overall max and current max (indices)
    - return s.slice(max indices)
*/

// Too slow
// TC: O(n^3)
// SC: O(n), creating str
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
// Helper function to get indices of longest left and right palindrome with the ith element as the middle
const getIndices = (left, right, s) => {
    while (left >= 0 && right < s.length) {
        if (s[left] !== s[right]) break
        left--
        right++
    }
    return [left + 1, right]
}

// TC: O(n^2), for every ith element worse case run n times
// SC: O(n)
var longestPalindrome = function(s) {
    // base case
    let max = [0,1]

    for (let i = 0; i < s.length; i++) {
        let even = getIndices(i - 1, i, s) // ex: "cbbd" --> bb
        let odd = getIndices(i - 1, i + 1, s) // ex: "babad" --> bab
        let curMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even

        max = max[1] - max[0] > curMax[1] - curMax[0] ? max : curMax
    }

    return s.slice(max[0], max[1]) // non-inclusive in end index
}