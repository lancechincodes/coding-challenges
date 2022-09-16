/*
R: 
Input - integer array 
Find contiguous subarray containing at least 1 num which has the largest sum
Output the sum

E: 
[-2,1,-3,4,-1,2,1,-5,4] // 6
[1] // 1
[5,4,-1,7,8] // 23
[] // 0

A: 
1) Edge case checks ([], [num])
2) Initialize max sum to be -Infinity
3) Nested for loop to check over all possible combinations
4) Return max sum
*/

// C: Time complexity: O(n^2) too slow
// Space complexity: O(1)
// function maxSubArray(nums) {
//     if (nums.length === 0) return 0
//     if (nums.length === 1) return nums[0]
//     maxSum = -Infinity
//     for (let i = 0; i < nums.length; i++) {
//         tempSum = nums[i]
//         maxSum = Math.max(maxSum, tempSum)
//         for (let j = i + 1; j < nums.length; j++) {
//             tempSum = tempSum + nums[j]
//             maxSum = Math.max(maxSum, tempSum)
//         }
//     }
//     return maxSum
// }

// Kadane's algorithm
// O: Time complexity: O(n)
// Space complexity: O(n)
function maxSubArray(nums) {
    let maxSum = nums[0]
    let current = Math.max(maxSum, 0) // current will hold 0 instead of a potential negative first number
    
    for (let i = 1; i < nums.length; i++) {
        current += nums[i] // add next element in arr
        maxSum = Math.max(maxSum, current) // find max between what max was before and after
        current = Math.max(current, 0) // reset current to zero if negative (no interest in adding neg nums)
    }
    return maxSum
}