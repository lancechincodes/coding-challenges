/*
R:
Input - Array of nums (size n)
Output - Number that appears more than n / 2 times
Assumptions - majority element always exists in the arr

E: 
Input: nums = [3,2,3]
Output: 3

Input: nums = [2,2,1,1,1,2,2]
Output: 2

A:
- Create empty hash
- For loop that goes from 0 to size of nums
    - if not seen in hash -> initialize it 
    - else if in hash -> increment it value at key in hash
- Separate for loop
    - if value at hash[key] is greater than nums.length / 2
    - return the key
*/

// TC: O(n)
// SC: O(n)
var majorityElement = function(nums) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) hash[nums[i]] = 1
        else if (hash[nums[i]]) hash[nums[i]]++
    }

    for (let key in hash) {
        if (hash[key] > (nums.length / 2)) {
            return key
        }
    }
    
};