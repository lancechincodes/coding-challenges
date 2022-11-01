/*
R: 
Input - nums arr
Output - arr of triplets that sum to 0 and are not at same index 
Constraints - sol set must not contain duplicate triplets

E:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

Input: nums = [-2,0,0,2,2]
Output: [[-2,0,2]]
Explanation: Avoiding duplicates this is the only solution

A:
1) Brute force solution - triple for loops and hashmap to remove duplicates
2) 3 pointer solution - i,j,k pointers and twoSum helper function
*/

// Brute force solution - too slow
// TC: O(n^3)
// SC: O(1)
var threeSum = function(nums) {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }

    // to remove duplicates
    const hash = {}
    const overallResult = []
    for (let i = 0; i < result.length; i++) {
        let sortedRes = result[i].sort((a,b) => a-b)
        sortedRes = String(sortedRes)
        if (!hash[sortedRes]) {
            hash[sortedRes] = true
            overallResult.push(result[i])
        }
    }

    return overallResult
};

// 3 pointer solution
// TC: O(n^2)
// SC: O(n)

// Two sum helper function 
const twoSum = function(j, target, nums) {
    const result = []
    k = nums.length - 1
    while (j < k) {
        let leftVal = nums[j]
        let rightVal = nums[k]
        if (leftVal + rightVal > target) k--;
        else if (leftVal + rightVal < target) j++;
        else {
            result.push([(target * -1), leftVal, rightVal])
            // avoid duplicates by pushing pointers down if value next to the pointer is the same
            while (j < k && leftVal === nums[j+1]) j++
            while (j < k && rightVal === nums[k-1]) k--
            j++
            k--
        }
    }
    return result
}

var threeSum = function(nums) {
    // sort nums arr so duplicate numbers in nums will be next to each other
    nums = nums.sort((a,b) => a-b)

    const result = []
    for (let i = 0; i < nums.length; i++) {
        // avoid duplicates
        if (nums[i] === nums[i - 1]) continue

        // looking for a target sum between two other numbers in nums that sum to the opposite of the ith number
        let target = nums[i] * -1
    
        // start j pointer at i + 1
        let subResult = twoSum(i + 1, target, nums)

        // spread operator to remove outermost brackets
        result.push(...subResult)
    }
    return result
}