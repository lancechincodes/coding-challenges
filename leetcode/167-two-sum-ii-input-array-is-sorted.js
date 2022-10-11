/*
R: 
Input - numbers arr (increasing order (L to H)) and target number
Ouput - indices of two numbers (added by one) [index1, index2]

Constraint - sol must only use constant extra space
1 <= index1 < index2 <= numbers.length

Assumption - exactly one solution

E:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

A: 2 pointer approach
- Initialize pointer i at 0 and j at last index
- while (i doesn't overlap with j)
    - if (numbers[i] and numbers[j] add to target)
        - return [i + 1, j + 1]
    - if sum is greater than target 
        - move j pointer towards middle (number at j is too big)
    - if sum is less than target 
        - move i pointer towards middle (number at i is too small)
- no need to return anything outside of while loop b/c problem assumes exactly one solution
*/

// TC: O(n)
// SC: O(1)
var twoSum = function(numbers, target) {
    let i = 0, j = numbers.length - 1

    while (i < j) {
        if (numbers[i] + numbers[j] === target) {
            return [i + 1, j + 1]
        }
        else if (numbers[i] + numbers[j] > target) {
            j--
        }
        else {
            i++
        }
    }
};