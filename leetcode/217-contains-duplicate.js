/*
R:
Input - int arr nums
Output - boolean if any value appears at least twice in the arr

E:
Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

A:
- Hashmap approach
- Iterate through numbers in nums
    - if already in hash
        - return true
    - else 
        - define number in hash
- return false loop goes to the end
*/

// Time complexity: O(n)
// Space complexity: O(n)
var containsDuplicate = function(nums) {
    let seenObj = {}
    
    for (let num of nums) {
        if (seenObj[num]) {
            return true
        }
        else {
            seenObj[num] = 1
        }
    }
    
    return false
};

// Slower TC but constant SC 
// TC: O(nlogn)
// SC: O(1)
var containsDuplicate = function(nums) {
    nums = nums.sort()
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            return true
        }
    }
    return false
};