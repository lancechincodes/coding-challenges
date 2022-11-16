/*
R:
- Given n nums in range [0,n], return only number in range that is missing 

E:
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

A:
- Two for loops
- First for loop -> add nums into a set
- Second for loop -> check if 0 to n is not included in the set 
    - If so, return ith num
*/

// TC: O(n)
// SC: O(n)
var missingNumber = function(nums) {
    let numsSet = new Set()
    for (let i = 0; i < nums.length; i++) {
        numsSet.add(nums[i])
    }

    for (let i = 0; i < nums.length + 1; i++) {
        if (!numsSet.has(i)) return i
    }
};

// Optimize SC - calculate expected sum and subtract actual sum to find missing num
// TC: O(n)
// SC: O(1)
var missingNumber = function(nums) {
    let expectedSum = 0, actualSum = 0
    // expected sum including all nums 
    for (let i = 0; i <= nums.length; i++) {
        expectedSum += i
    }

    // actual sum excluding missing num
    nums.forEach(num => actualSum += num)

    return expectedSum - actualSum
}