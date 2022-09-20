/*
R: Input of sorted distinct ints and target value
Return index if the target is found, if not return index where it would be
Challenge is time complexity of O(log n)

E: [1,3,5,6] target = 5 //2
             target = 7 //4
             
A: 
1) Use built in findIndex function to find index if element in nums matches the target 
    - Note: findIndex will return -1 if num in nums does not match target
    - Return the index if it is not -1 
2) Iterate though each num of nums
    - Compare target to number at index 
        - If smaller, return index
        - Otherwise, continue
    - Outside of loop: If found index is still -1 return nums.length (new last num)
3) Return foundIndex

*/

// Time complexity: O(n)
// Space complexity: O(1)
// var searchInsert = function(nums, target) {
    
//     let foundIndex = nums.findIndex(num => num === target)
//     if (foundIndex !== -1) return foundIndex
    
//     for (let i = 0; i < nums.length; i++) {
//         if (target < nums[i]) {
//             return i
//         }
//     }
//     if (foundIndex === -1) return nums.length
// };

// Optimize code - binary search
// Time complexity: O(log n)
// Space complexity: O(1)
var searchInsert = function(nums, target) {

    // definition of binary search
    let middleIndex
    let leftIndex = 0
    let rightIndex = nums.length - 1
    while (leftIndex <= rightIndex) {
        middleIndex = Math.floor((rightIndex + leftIndex) / 2)
        if (nums[middleIndex] === target) return middleIndex
        else if (nums[middleIndex] > target) rightIndex = middleIndex - 1 
        else if (nums[middleIndex] < target) leftIndex = middleIndex + 1
    }

    // if target is not found
    // num at middleIndex will be the number to compare target
    // if target > num at the end --> leftIndex will be placed after num at middleIndex
    // if target < num at the end --> leftIndex will be take the num at middleIndex's place
    return leftIndex
}