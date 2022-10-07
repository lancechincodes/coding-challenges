/*
R: Input - arr of nums and int val
Task - remove all occurrences of val in nums (in place) 
    - relative order of elements may be changed
Output - k slots of nums that are filled with non-val nums

E:Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]

A: 2 pointer approach
- one pointer at the beginning & one pointer at the end of nums
- while (i <= j)
    - if nums[i] is not val
        - increment i 
    - else 
        - if nums[i] === nums[j]
            - decrement j
        - else 
            - set nums[i] = nums[j] 
            - increment i
            - decrement j
- return i (length of k - the non-val numbers in nums arr)
*/

// TC: O(n)
// SC: O(1)
var removeElement = function(nums, val) {
    let i = 0
    let j = nums.length - 1
    while (i <= j) {
        if (nums[i] !== val) {
            i++
        }
        else {
            if (nums[i] === nums[j]) {
                j--
            }
            else {
                nums[i] = nums[j]
                i++
                j--
            }
        }
    }
    return i 
};