/*
R: Input: int arr that represents large int
Task - increment to the large arr by one and return resulting arr
Output - new int arr that represents large int + 1

E: [9] // [1,0]
[4,2] // [4,3]
[3,4,9,9] // [3,5,0,0]
[3,9,9,9] // [4,0,0,0]
[9,9] // [1,0,0]

A: 
- In cases where the last digit in the array is not 9
    - Increment the last digit by 1
    - Return the modified array
- In cases where the last digit is 9
    - while carry is 1
    - set 9 to a 0
    - go to prev index
    - check if prev index is not 9
        - if so add carry to it
        - set carry to 0 to end loop
    - else if the digit is 0 at the first index position
        - break out of while loop
- Unshift one (add to beginning to case where 0 is left at first positon) [9], [9,9]
- Return the modified arr
*/

// Time complexity: O(n) (while loop and unshift)
// Space complexity: O(1) Only created primitive data types
// var plusOne = function(digits) {
//     if (digits[digits.length - 1] !== 9) {
//         digits[digits.length - 1] = digits[digits.length - 1] + 1
//         return digits
//     }
    
//     let carry = 1
//     let i = digits.length - 1
//     while (carry === 1) {
//         digits[i] = 0
//         i--
//         if (digits[i] !== 9) {
//             digits[i] = digits[i] + 1
//             carry = 0
//         }
//         else if (digits[0] === 0) break
//     }
    
//     if (digits[0] === 0) {
//         digits.unshift(1)
//     }
    
//     return digits
// };

// Same TC and SC but a bit cleaner solution
// TC: O(n) for loop and unshift
// SC: O(1)
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++
        if (digits[i] === 10) {
            digits[i] = 0
        }
        else {
            return digits
        }
    }
    // only cases where all digits in the int are 9 make it to this point [9], [9,9], [9,9,9] --> are currently [0], [0,0], and [0. 0, 0]
    digits.unshift(1) // need to add 1 to the beginning
    return digits
}