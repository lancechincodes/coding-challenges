/*
R: Input - two string s and t
Task - determine if s and t are isomorphic (chars in s can be replaced to get t)
Output - boolean if s and t are isomorphic

E:
Input: s = "egg", t = "add"
Output: true

Input: s = "foo", t = "bar"
Output: false

Input: s = "paper", t = "title"
Output: true

Input: s = "badc", t = "baba"
Output: false

A: Hash and set used in combination
- **Key to solving problem**
    - if set does not include t[i] char
        - hash[s[i]] = t[i]
        - now add t[i] to set
    - initialize replacedS and replace chars in s string with its corresponding t chars stored in hash
    - return replacedS === t 
*/

// TC: O(n), One pass through at a time
// SC: O(n), Storing memory in set and hash
var isIsomorphic = function(s, t) {
    let hashS = {}
    let set = new Set()

    for (let i = 0; i < s.length; i++) {
        if (!set.has(t[i])) { // O(1) time (in comparison to O(n) arr .includes method)
            hashS[s[i]] = t[i]
            set.add(t[i])
        }
        // ex: set = [b,a]
        // b -> b
        // a -> a
    }

    let replacedS = ''
    for (let i = 0; i < s.length; i++) {
        replacedS += hashS[s[i]] // will add undefined if s[i] is not in hash
    }

    // console.log('replacedS: ' + replacedS)
    // console.log('t: ' + t)
    return replacedS === t
};