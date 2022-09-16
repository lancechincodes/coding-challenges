// R: Input - array of strings
// Output string of longest common prefix

// E: strs = ["racecar", "racer", "races"] // race

// A: 
// Iterate through first string's length
// Check if every ith letter are equal to first string's ith letter
// If so, add to result (prefix)
// else, break out of loop
// return result

// Time complexity: O(n^2)
// Space complexity: O(1)
var longestCommonPrefix = function(strs) {   
    let result = ""
    
    for (let i = 0; i < strs[0].length; i++) {
        let str1Char = strs[0][i]
        if (strs.every(str => str[i] === str1Char)) {
            result += str1Char
        }
        else {
            break
        }
    }
    return result    
};