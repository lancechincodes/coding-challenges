/*
R:
Input - arr of characters
Output - don't return anything, just modify the input array in-place

E:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

A:
- Find middle index of s (rounded down to nearest int)
- 3 pointers (beginning pointer, end pointer, and pointer to keep track of number of iterations)
- for loop for i < middleIndex iterations
    - swap technique w/ temp variable
    - increment beginning & decrement end
*/

// TC: O(n)
// SC: O(1), in-place
var reverseString = function(s) {
    let middleIndex = Math.floor((0 + s.length) / 2)

    let beginning = 0
    let end = s.length - 1

    let temp
    for (let i = 0; i < middleIndex; i++) {
        // swap values at end and beginning pointers
        temp = s[beginning]
        s[beginning] = s[end]
        s[end] = temp

        beginning++
        end--
    }

};