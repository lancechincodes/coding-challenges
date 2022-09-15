/*
R: Input - string containing brackets ()[]{}
Output - boolean depending on if the brackets are valid
valid input is one which 
1) open brackets are closed by same type
2) open brackets closed in correct order
3) every closed bracket has corresponding open bracket

E: s = "[({})]" // true
s = "][)(" // false

A: Solve with Stack (LIFO) - last in first out (to follow rule 2)
1) If odd length --> return false (rule 3 is broken)
2) Create object to hold keys and values of opening and closing brackets
3) Create stack variable 
4) Iterate through s string
5) Add ONLY opening element bracket to stack
6) If not opening element (must be the closing bracket corresponding to the last one added to the stack) 
- otherwise return false
7) Outside of loop --> return true if the stack is empty

*/

// Time complexity: O(n) one for loop over all chars in s (push and pop are constant-time operations)
// Space complexity: O(n) creating pairs object and stack
var isValid = function(s) {
    if (s.length % 2 === 1) return false
    let pairs = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    let stack = []
    for(let bracket of s) {
        if (bracket === "(" || bracket === "[" || bracket === "{") {
            stack.push(bracket)
        }
        else if (bracket !== pairs[stack.pop()]) {
            return false
        }
    }
    
    return !stack.length  
};