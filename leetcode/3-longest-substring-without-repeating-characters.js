/*
R:
Input - string
Task - Find length of longest substring without repeating chars
Output - length of substring

E:
"abcdabc" - 4 abcd, bcda, cdab, dabc

A:
Sliding window
- Set 2 pointers at index 0
- Initialize temp and max length to be 0, and empty hash
- While either pointer doesnt reach the end
- Check if key does not exist in hash
    - If so, create key value in hash
    - Increment temp length
    - Set max length to be larger length between temp length and pre-existing max length
    - Move pointer 2 down 1
- Else (value exists at key)
    - If so, delete key/value at i
    - Decrement temp length
    - Move pointer 1 down 1
- Return max length
    
*/

// Brute force - too slow to submit
// Time complexity: O(n^2)
// Space complexity: O(n)
// var lengthOfLongestSubstring = function(s) {
//     let maxLength = 0, tempLength = 0
//     let hash = {}
//     for (let i = 0; i < s.length; i++) {
//         hash = {}
//         tempLength = 0
//         for (let j = i; j < s.length; j++) {
//             if (hash[s[j]]) {
//                 hash = {}
//                 tempLength = 0
//             }
//             hash[s[j]] = 1
//             tempLength++
//             if (tempLength > maxLength) maxLength = tempLength
//         }
//     }
//     return maxLength
// };

// Solution with sets
// TC: O(n) // .has, .add, and .delete run on sublinear time (on avg. O(1) )
// SC: O(n)
// var lengthOfLongestSubstring = function(s) {

//     let i = 0, j = 0
//     let tempLength = 0, maxLength = 0
//     const set = new Set()
    
//     while (i < s.length && j < s.length) {
//         if (!set.has(s[j])) {
//             set.add(s[j])
//             tempLength = j - i + 1
//             maxLength = Math.max(maxLength, tempLength)
//             j++
//         }
//         else {
//             set.delete(s[i])
//             i++
//         }        
//     }
    
//     return maxLength
// };


// Solution with hash map
// TC: O(n)
// SC: O(n)
var lengthOfLongestSubstring = function(s) {

    // important to start pointers at same index bc want to only add 1 to length at a time
    let i = 0, j = 0
    let tempLength = 0, maxLength = 0
    let hash = {}
    
    while (i < s.length && j < s.length) {
        // No problem -> Move down right pointer
        if (!hash[s[j]]) {
            hash[s[j]] = 1
            tempLength++
            maxLength = Math.max(maxLength, tempLength)
            j++
        }
        // Problem -> Remove potential problem, and move left pointer
        else {
            delete hash[s[i]]
            tempLength--
            i++
        }        
    }
    
    return maxLength
};