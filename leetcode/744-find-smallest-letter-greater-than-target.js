/*
R:
Input - arr of chars (smallest to largest)
Task - return the smallest character in array that is larger than target
Output - str

Edge case
Letters wrap around -> Meaning - return the first character if none of the characters are larger than the target

E:
Input: letters = ["c","f","j"], target = "a"
Output: "c"

Input: letters = ["c","f","j"], target = "a"
Output: "c"

Input: letters = ["c","f","j"], target = "a"
Output: "c"

A: 
1) Linear TC approach (check each character in loop)
2) Binary search approach (split arr in half after each check)
*/

// TC: O(n)
// SC: O(1)
var nextGreatestLetter = function(letters, target) {
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] > target) return letters[i]
    }

    return letters[0]
};

// Optimization
// TC: O(log n) binary search approach
// SC: O(1)
var nextGreatestLetter = function(letters, target) {
    let begIdx = 0
    let endIdx = letters.length - 1
    let midIdx 
    let result = letters[0] // default if no character is larger than target
    while (begIdx <= endIdx) {
        midIdx = Math.floor((begIdx + endIdx) / 2)

        if (letters[midIdx] > target) {
            result = letters[midIdx]
            endIdx = midIdx - 1
        }
        else {
            begIdx = midIdx + 1
        }
        // console.log("Beginning index: " + begIdx)
        // console.log("Middle index: " + midIdx)
        // console.log("End index: " + endIdx)
        // console.log("")
    }

    return result
}