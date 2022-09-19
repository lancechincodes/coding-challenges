/*
R: positive number input, replace number by sum of the squares of digits 
repeat until number equals OR loops endlessly which does not include 1 
numbers that end in 1 are happy
output: return true if num is happy, false otherwise

E: n = 19
1 + 81 = 82
64 + 4 = 68
36 + 64 = 100
1 + 0 + 0 = 1
// true

n = 17
1 + 49 = 50
25 + 0 = 25
4 + 25 = 29
4 + 81 = 85
64 + 25 = 89
64 + 81 = 145
1 + 16 + 25 = ....

A: Initialize hash as empty outside of recursive function so that it does not continuously get reset
Define recursive function that will convert num to a string so that it can iterated on
    - Calculate sum of squares 
    - If sum has already been seen, return false
    - If sum has not been seen, add key/value in hash
    - If sum is 1, return true 
    - Store boolean value with call to recursive function
    - Return boolean value that is left at end of call stack
Store boolean value that will store returned value when calling recursive function for the first time
Return final result 
*/

// Time complexity: O(n*m) where n is number of digits in number and m is the iterations need to get 1 OR to reach a sum that has already been seen
// Space complexity O(m) creating a hash
var isHappy = function(n) {
    let hash = {}
    
    function checkHappy(n) {
        let nStr = n.toString()
        let sum = 0

        for (num of nStr) {
            sum += Number(num)**2
        }
        if (hash[sum]) return false
        if (!hash[sum]) hash[sum] = 1
        if (sum === 1) return true
        
        return checkHappy(sum)
    }
    
    let result = checkHappy(n)
    return result
}