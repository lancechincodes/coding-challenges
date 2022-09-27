/*
R:
Input - string
Output - boolean if its is a palindrome AFTER converting all uppercase letters into lowercase and removing all non-alphanumeric characters
alphanumeric characters include letters and numbers

E:
"mo...m" //true
"A man, a plan, a canal: Panama" //true

A: 
1) Filtering out non-alphanumeric characters
    - regex
2) Split, reverse, join to form reversed string
3) Compare string and return boolean
*/

// Time complexity: O(n) // str and arr methods depend on number of elements in s
// Space complexity: O(1) // manipulating string in place
var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase() // filtered s
    return s === s.split("").reverse().join("") // comparing filtered s with reversed s
};

// O:
// 2 pointers - slight optimization in time complexity O(n/2) (Note: Big O simplfies to O(n) though)
var isPalindrome = function(s) {
    let left = 0
    let right = s.length - 1
    while (left < right) {
        if (!isAlphanumeric(s[left])) left++
        if (!isAlphanumeric(s[right])) right--
        if (isAlphanumeric(s[left]) && isAlphanumeric(s[right])) {
            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
            left++
            right--
        }
    }
    return true
}

function isAlphanumeric(char) {
    return (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z' || char >= '0' && char <= '9')
}