/*
R:
Input - arr of strs
Output - arr of arr in groups

E: 
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

A:
- Define hash
- Iterate thru strs arr
    - sort str
    - if str does not exist in hash, define its value as the original string in []
    - if str does exist in hash, push the original string
- Return hash's values (Object.values returns an arr)

*/

// C:
// Time complexity: O(n * slog(s)) where n is number of strings in strs and s is the number of letters in each individual string
// Space complexity: O(n)
var groupAnagrams = function(strs) {
    
    let hash = {}
    for (let str of strs) {
        let sortedStr = str.split("").sort().join("")
        
        if (!hash[sortedStr]) hash[sortedStr] = [str]
        else hash[sortedStr].push(str)
    }
    
    return Object.values(hash)
};