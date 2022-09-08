// R: Input: Non-empty array of int (nums)
// Output: Element that only appears once 

// E: [1, 3, 4, 5, 3, 5, 1]
// Output: 4

// A: Consider solution with O(n) runtime complexity & O(1) extra space
// so we cannot use hash map
// Linear time allows me to iterate OR use array methods
// constant space allows me to create primitive types but not reference types or strings

var singleNumber = function(nums) {
    let hash = {}
    let uniqueNum
    
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1
        }
        else {
            hash[nums[i]]++
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === 1) {
            uniqueNum = nums[i]
        }
    }
    
    return uniqueNum
};