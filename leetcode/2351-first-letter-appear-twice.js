/*
R: 
Input - s string 
Output - first letter to appear twice

Assumption - s will contain at least one letter that appears twice

E:
Input: s = "abccbaacz"
Output: "c"
Explanation:
The letter 'a' appears on the indexes 0, 5 and 6.
The letter 'b' appears on the indexes 1 and 4.
The letter 'c' appears on the indexes 2, 3 and 7.
The letter 'z' appears on the index 8.
The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.

Input: s = "abcdd"
Output: "d"
Explanation:
The only letter that appears twice is 'd' so we return 'd'.

A:
Hash map and for loop
*/

// TC: O(n) where n is letters in s
// SC: O(m) is unique letters in s
var repeatedCharacter = function(s) {
    const hash = {}
    for (let letter of s) {
        hash[letter] = hash[letter] + 1 || 1 // if hash[letter] doesn't exist it will be falsy so it will be set to 1
        if (hash[letter] === 2) return letter
    }
};