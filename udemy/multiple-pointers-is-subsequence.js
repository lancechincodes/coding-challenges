// R: Input - 2 strings, check whether the characters in the first string match characters in the second string (in the same order)
// Edge case: if str1 is longer than str2 --> return false
// E: str1 = 'may', str2 = 'mwwwwwawwwwy' // true
// A: 2 pointer approach
// O(N + M) means that you would iterate through 1 str with N elements and another with str with M elements
// Goal: constant space complexity (so don't create any new reference datatypes)

// 1) Define 1 pointer at index 0 of str1 and another pointer at index 1 of str2
// 2) iterate through str2
// 3) Check if characters match
    // if so, move both pointers down pointers
    // if not, only move second pointer down str1
// stopping condition if j gets to end of string
// if i is not at end of string 1 --> return false
// otherwise --> return true

// Time complexity: O(n + m) but essentially is rounded to O(n)
// Space complexity: O(1)
function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    // edge case 
    if (str2.length < str1.length) return false

    let i = 0
    for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
            i++
        }
    }
    
    if (i !== str1.length) {
        return false
    }
    return true
    
  }

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
console.log(isSubsequence('may', 'mwwwwawwwwy')); // true
console.log(isSubsequence('may', 'm')); // false
