// R: Determine if a number reads the same backwards (including negative symbols), input is an integer and output is a boolean
// E: x = 404 --> true (404)
//    x = 34 --> false (43)
// Note: any negative number will NOT be a palindrome integer
// A: psuedocode

// Time complexity: O(n)
// Space complexity: O(n)

var isPalindrome = function(x) {
    // if negative int
        //  return false (not a palindrome)
    
    // convert int into original string 
    // initialize reversed string as split, reverse, and join
    
    // compare original string and reversed string 
        // same --> return true
    
    // return false
    
    if (x < 0) return false
    
    const originalString = x.toString()
    const reversedString = originalString.split("").reverse().join("")
    
    return originalString === reversedString
};

// Challenge: Without converting int to str
// TC: O(n)
// SC: O(1)
var isPalindrome = function(x) {
    // edge case
    if (x < 0) return false

    let quotient = x
    let remainder
    let reversedNumberStr = ''
    while (quotient !== 0) {
        remainder = quotient % 10
        reversedNumberStr += remainder
        quotient = Math.floor(quotient / 10)

    }

    return x === Number(reversedNumberStr)
}