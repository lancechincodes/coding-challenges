/*
R: 
Input - 2 string arrs 
Output - number of strings that appear exactly once in each of the arrs

E:
Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
Output: 2
Explanation:
- "leetcode" appears exactly once in each of the two arrays. We count this string.
- "amazing" appears exactly once in each of the two arrays. We count this string.
- "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
- "as" appears once in words1, but does not appear in words2. We do not count this string.
Thus, there are 2 strings that appear exactly once in each of the two arrays.

Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
Output: 0
Explanation: There are no strings that appear in each of the two arrays.

Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
Output: 1
Explanation: The only string that appears exactly once in each of the two arrays is "ab".

A:
- Create a hash with occurences for each of the arrs
- Create result and set to 0
- Iterate through the words in words1 
    - if word exists exactly once in each hash, increment result by one 
- Return result

*/
// TC: O(2n + m) where n is the length of words1 and m is the length of words2
// SC: O(n + m) where n is the number of unique words in words1 and m is the number of unique words in words2
var countWords = function(words1, words2) {
    let hash1 = {}
    for (let word of words1) {
        !hash1[word] ? hash1[word] = 1 : hash1[word]++ 
    }
    
    let hash2 = {}
    for (let word of words2) {
        !hash2[word] ? hash2[word] = 1 : hash2[word]++ 
    }

    let result = 0
    for (let word of words1) {
        if (hash1[word] === 1 && hash2[word] === 1) result++
    }

    return result
};