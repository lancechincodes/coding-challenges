// R: input of s with words and spaces , output length of last word in string
// word = non-space characters

// E: s = " why so beautiful      "
// output: 9

// Time complexity: O(n)
// Space complexity: O(n) creating an array
var lengthOfLastWord = function(s) {
    
    // .trim() removes whitespace from beginning and end of string
    return s.trim().split(" ").pop().length
    
};