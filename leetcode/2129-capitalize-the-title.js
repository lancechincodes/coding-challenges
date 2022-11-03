/*
R: 
Input - string title
Output - capitalized title

Rules
1) Length of word is 1 or 2 letters --> change all letters to lowercase
2) Otherwise, change the first letter to uppercase and the remaining letters to lowercase

E: 
Input: title = "capiTalIze tHe titLe"
Output: "Capitalize The Title"
Explanation:
Since all the words have a length of at least 3, the first letter of each word is uppercase, and the remaining letters are lowercase.

Input: title = "First leTTeR of EACH Word"
Output: "First Letter of Each Word"
Explanation:
The word "of" has length 2, so it is all lowercase.
The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.

Input: title = "i lOve leetcode"
Output: "i Love Leetcode"
Explanation:
The word "i" has length 1, so it is lowercase.
The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.

A:
- Split title into individual words (titleArr)
- Loop through each word in titleArr
    - if word is less than 3 letters -> convert all letters to lowercase 
    - otherwise -> convert the first letter of the word to uppercase and the rest to lowercase
- Return the titleArr joined back into a string
*/

// TC: O(n * m) - where n is words in string (separated by spaces) and m is letters in each word - for loop w/ toLowerCase and toUpperCase methods (they are O(m))
// SC: O(n) - split method allocates n space where n is the words in string 
var capitalizeTitle = function(title) {
    let titleArr = title.split(' ')
    for (let i = 0; i < titleArr.length; i++) {
        if (titleArr[i].length < 3) {
            titleArr[i] = titleArr[i].toLowerCase()
        }
        else {
            titleArr[i] = titleArr[i][0].toUpperCase() + titleArr[i].substring(1).toLowerCase()
        }
    }
    return titleArr.join(' ')
};