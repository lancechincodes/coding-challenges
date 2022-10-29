/*
R: 
Input - 2 ints
Output - arr of all self-dividing numbers in range [left, right]

E:
Input: left = 1, right = 22
Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]

Input: left = 47, right = 85
Output: [48,55,66,77]

A:
- Create result global variable
- Loop from left to right (inclusive)
    - stringify ith number
    - set self-dividing to true
    - Loop from first digit in number to last 
        - check if ith num is NOT divisible by its digit(s)
            - set self-dividing to false 
            - break out of this loop
    - if self-dividing remained true
        - push ith number to result arr 
- return result arr

*/
// TC: O(n * m) where n is difference between left and right and m is length of the stringifyed ith number
// SC: O(n) storing result arr and storing string version of number
var selfDividingNumbers = function(left, right) {

    let result = []
    for (let i = left; i <= right; i++) {
        let strI = String(i)
        let selfDividing = true
        for (let j = 0; j < strI.length; j++) {
            if (i % Number(strI[j]) !== 0) {
                selfDividing = false
                break;
            }
        }
        if (selfDividing) result.push(i)
    }

    return result
};

// Slight optimization / Alt solution (additional conditionals to avoid having to go through nested for loops if not necessary)
var selfDividingNumbers = function(left, right) {
    let result = []
    for (let i = left; i <= right; i++) {
        let strI = String(i)
        if (strI.length === 1 || isSelfDividing(strI)) {
            result.push(i)
        }
    }

    return result
}

function isSelfDividing(strI) {
    const numberI = Number(strI)
    let result
    
    for (let i = 0; i < strI.length; i++) {
        let digit = Number(strI[i])
        if (digit === 0 || numberI % digit !== 0) {
            result = false
            break
        }
        result = true
    }

    return result
}