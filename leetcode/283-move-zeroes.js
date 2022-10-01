/*
R: Input - int arr nums
Task - move all 0s to end of arr while maintaining relative order of non-zero elements
Output - same nums arr (in place w/o copy of arr)

E: 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Edge cases 
if empty, 1 element, or no zeros -> return untouched nums

A: 2 pointers
i at index 0 and j at index 1
while j is not at end 
    if nums[i] === 0 && nums[j] !== 0 swap i++ & j++
    else if nums[i] === 0 && nums[j] === 0 j++
    else if nums[i] !== 0 && nums[j] === 0 i++ j++
    else if nums[i] !== 0 && nums[j] !== 0 i++ j++
return nums
*/

// TC: O(n)
// SC: O(1)
var moveZeroes = function(nums) {

    let i = 0, j = 1
    while (j < nums.length) {
        if (nums[i] === 0 && nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++
        }
        else if (nums[i] !== 0 && nums[j] === 0) {
            i++
        }
        else  if (nums[i] !== 0 && nums[j] !== 0) {
            i++
        }
        j++
    }

    return nums
};

// Challenge: Could you minimize the total number of operations done?
// combine else if statement
var moveZeroes = function(nums) {
    let i = 0, j = 1
    while (j < nums.length) {
        if (nums[i] === 0 && nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++
        }
        else if (nums[i] !== 0 && nums[j] === 0 || nums[i] !== 0 && nums[j] !== 0) {
            i++
        }
        j++
    }

    return nums
};