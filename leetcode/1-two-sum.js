/*
R:
Input - arr of ints and target sum
Output - indices of 2 ints in arr that add up to sum
Assumptions
1) exactly one solution
2) you may not use same element twice

E:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

A:
- hash map approach to optimize TC
- key is the current number in arr's "matching pair" -> target - nums
- store index of current number in arr
- Note: Object keys are always strings (doesn't make a difference because )
*/

// Time complexity: O(n)
// Space complexity: O(n)
var twoSum = function(nums, target) {
    let hash = {}

    for (let i = 0; i < nums.length; i++) {
        let pair = target - nums[i]

        // greater than or equal to 0 is used instead of just if hash[nums[i]] b/c index 0 is false in nature
        if (hash[nums[i]] >= 0) {
            return [hash[nums[i]], i]
        }
        
        // define key/value after checking to avoid using same element twice
        hash[pair] = i
    }
};