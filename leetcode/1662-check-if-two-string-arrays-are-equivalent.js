/*
R: 
Input - 2 string arrs
Output - Booleean when concatened into respective strings
    - true if same string
    - false otherwise

E:
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false

Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true

A:
- For loop to add sections of word1 together
- For loop to add sections of word2 together
- Return boolean based if the concatened versions are equal or not
*/

// TC: O(n + m), n and m are respective length of word1 and word2 arrs 
// SC: O(n + m), n and m are respective length of concatenated words
var arrayStringsAreEqual = function(word1, word2) {
    let concatenatedWord1 = ''
    for (let i = 0; i < word1.length; i++) {
        concatenatedWord1 += word1[i]
    }

    let concatenatedWord2 = ''
    for (let i = 0; i < word2.length; i++) {
        concatenatedWord2 += word2[i]
    }

    return concatenatedWord1 === concatenatedWord2
};