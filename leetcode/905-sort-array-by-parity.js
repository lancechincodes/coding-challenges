/*
R: 
Input - nums array
Output - array with all even ints at beginning and all odds at end

E: 
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Input: nums = [0]
Output: [0]

A:
2 pointers - mutate in-place
- while (left < right)
    - swap if odd on left side and even on right side
    - move left pointer down if already even 
    - move right pointer down if already odd
- return nums arr
*/

// TC: O(n) (worse case will go over all elements in the arr)
// SC: O(1) (in-place mutation) 
var sortArrayByParity = function(nums) {
    let left = 0 
    let right = nums.length - 1
    while (left < right) {
        // swap if odd on left side AND even on right side
        if (nums[left] % 2 === 1 && nums[right] % 2 === 0) {
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
        }
        // move left pointer down if already even
        else if (nums[left] % 2 === 0) left++
        // move right pointer down if already odd
        else if (nums[right] % 2 === 1) right-- 
    }

    return nums
};