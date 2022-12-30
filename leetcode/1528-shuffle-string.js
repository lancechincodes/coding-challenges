/*
R: 
Input - string s and int arr indices of same length
Output - shuffled string in which character at the ith pos in s moves to indices[i] in the shuffled string

E:
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

Input: s = "abc", indices = [0,1,2]
Output: "abc"
Explanation: After shuffling, each character remains in its position.

A:
- Create result arr
- Loop 0 to s.length-1
- Assign result[indices[i]] to be equal to s[i]
- Return result.join("") (converts array into string without spaces or commas)
*/

// C:
// TC: O(n) where n is s.length
// SC: O(n) where n is s.length
var restoreString = function(s, indices) {
    let result = []
    for (let i = 0; i < s.length; i++) {
        result[indices[i]] = s[i]
    }
    return result.join("")
};