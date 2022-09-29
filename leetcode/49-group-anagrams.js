/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*
R:
Input - arr of strs
Output - arr of arr in groups

E: 
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Input: strs = ["teen", "neet", "code"]
Output: [["code"], ["teen","neet"]]

A:
- Define hash
- Iterate thru strs arr
    - sort str
    - if str does not exist in hash, define its value as the original string in []
    - if str does exist in hash, push the original string
- Return hash's values (Object.values returns an arr)
*/

// Time complexity: O(n * slog(s)) where n is number of strings in strs and s is the number of letters in each individual string (linear times nlogn)
// Space complexity: O(n)
var groupAnagrams = function(strs) {
    let hash = {}
    for (let str of strs) {
        let sortedStr = str.split("").sort().join("")
        hash[sortedStr] ? hash[sortedStr].push(str) : hash[sortedStr] = [str]
    }
    
    return Object.values(hash)
};

/*
Optimize TC:
Idea: 
- Create an empty count arr that holds spots for each letter in alphabet
- Replace counts of each letter in count arr (char.charCodeAt() - 97) a-97, b-98, c-99, etc. -> subtracking 97 will make a - index 0, b - index 1, c - index 2, and so on 
- Create key that joins count arr
- if hash at key already exists --> push, otherwise create arr with str in it
*/
// Time complexity: O(n * s) (quadratic), less time b/c NOT sorting which has nlogn TC on average
// Space complexity: O(n)
var groupAnagrams = function(strs) {
    let hash = {}
    for (let str of strs) {
        let countArr = new Array(26).fill(0)
        for (let char of str) {
            countArr[char.charCodeAt() - 97]++
        }
        let key = countArr.join("|") // the "|" is necessary to separate letters *See below
        console.log(key)
        hash[key] ? hash[key].push(str) : hash[key] = [str]
    }
    return Object.values(hash)
};

// When console logging key
// Your input
// ["teen","neet","code"]

// stdout
// 0|0|0|0|2|0|0|0|0|0|0|0|0|1|0|0|0|0|0|1|0|0|0|0|0|0
// 0|0|0|0|2|0|0|0|0|0|0|0|0|1|0|0|0|0|0|1|0|0|0|0|0|0
// 0|0|1|1|1|0|0|0|0|0|0|0|0|0|1|0|0|0|0|0|0|0|0|0|0|0

// *It will fail in certain scenarios where the input has 10 characters repeated.
// eg: ["bdddddddddd","bbbbbbbbbbc"] -> With out a separator, both will have hash key value as 010100000000000000000000000
// Note, that first string has 10 d's in it & second string has 10 b's in it.
// Your input
// ["bdddddddddd","bbbbbbbbbbc"]
// stdout
// 0|1|0|10|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0
// 0|10|1|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0