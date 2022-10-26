/*
R:
Input - int arr nums and int k
Output - boolean 
    - true if nums[i] == nums[j] and abs[i - j] <= k

E:
Input: nums = [1,2,3,1], k = 3
Output: true
i = 0 and i = 3 -> abs(0-3) = 3 <= 3 -> true

Input: nums = [1,0,1,1], k = 1
Output: true
i = 2 and and i = 3 -> abs(2-3) = 1 <= 1 -> true 

Input: nums = [1,2,3,1,2,3], k = 2
Output: false

A:
- edge case: if nums only has one number then result must be false
- create hash map
- iterate through nums array once 
    - if hash at nums[i] has already been seen and abs(i - stored index at hash[nums[i]])
        - return true
    - else store the index in hash[nums[i]]
- return false if iterates though loop

1 2 3 1
      i

1 0 1 1
      i

1 2 3 1 2 3
          i 
*/

// TC: O(n)
// SC: O(n)
var containsNearbyDuplicate = function(nums, k) {
    // edge case
    if (nums.length === 1) return false

    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] !== undefined && Math.abs(i - hash[nums[i]]) <= k) {
            return true
        }
        else {
            hash[nums[i]] = i // stores the most recent index of nums[i] that didn't pass the abs(i-j) <= k constraint
        }
    }
    
    return false
};