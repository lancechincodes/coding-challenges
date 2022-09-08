// R: Input arr of nums (non-decreasing order = increasing order) 
// Output array of the squares of each number in increasing order

// Goal: Solution with O(n) linear time complexity

// Trivial solution first
// Time complexity: O(log n) (sorting)
// Space complexity: O(n) (creating array - dependent on array length)
// var sortedSquares = function(nums) {
//     let squaredNumbers = nums.map(num => num ** 2)
//     let sortedSquaredNumbers = squaredNumbers.sort((a,b) => a- b)
//     return sortedSquaredNumbers
// };

// Optimized solution
// 2 pointer approach 
// Start with 1 pointer at index 0 (left)) and another pointer at last index which is nums.length - 1 (right)
// compare absolute values of values at pointers 
// unshift greater value to resultArr
// if right pointer is greater --> shift it to the left by 1
// if left pointer is greater --> shift it the right by 1
// stopping condition when i === j
// square resultArr and return it

// Time complexity: O(n) 
// Space complexity: O(n)
var sortedSquares = function(nums) {
    // edge case if nums array only has 1 element
    if (nums.length === 1) return [nums[0]**2]
    
    let left = 0
    let right = nums.length - 1
    let resultArr = []
    
    let absNums = nums.map(num => Math.abs(num))    
    
    while (left !== right) {
        if (absNums[right] >= absNums[left]) {
            resultArr.push(absNums[right])
            right--
        }
        else if (absNums[right] < absNums[left]) {
            resultArr.push(absNums[left])
            left++
        }
        // adding the last element in nums
        if (left === right) {
            resultArr.push(absNums[left])
        }
    }
        
    resultArr = resultArr.map(num => num ** 2).reverse()
    return resultArr
}