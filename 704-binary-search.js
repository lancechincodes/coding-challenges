// R: input is an array of integers in ascending order (least to greatest) AND a target integer
// Goal: search target in nums and return its index if it exists 
    // return -1 otherwise
// Must be done in O(log n) time complexity --> hence binary search

// E: [2, 5, 6, 8, 2] , target = 5
// output would be 1 
// A: Find middle number (Math.floor(nums.length/2)) --> Math.floor(2.5) --> 2 (index) --> 6 (number at index) --> repeat
 
// Non-recursive way
// Time complexity: O(log n)
// Space complexity: O(1)
var search = function(nums, target) {
    
    // set initial index
    let startIndex = 0
    // set end index 
    let endIndex = nums.length - 1
    // set middle index
                      
    while (startIndex <= endIndex) {
        // find middleIndex
        let middleIndex = Math.floor((startIndex + endIndex)/2)

        // find middle number
        let middleNumber = nums[middleIndex]

        // check if target was found
        if (middleNumber === target) {
            return middleIndex
        }
        else if (middleNumber > target) {
            endIndex = middleIndex - 1
        }
        else if (middleNumber < target) {
            startIndex = middleIndex + 1
        }
    }

    return -1 // if target does not exist
};

/*
    Another example
    [1, 2, 3], target = 5
    initialIndex = 0, endIndex = 2, middleIndex = 1, middleNumber = 2 
    Middle number is 2
    Middle number of 2 is < target of 5
    new startIndex is 2, endIndex is still 2, new middleIndex is 2
    keep going
    middleNumber = 3, target = 5,
    middleNumber < target, startIndex is 3, endIndex is still 2, newMiddleIndex is 2 BUT
    startIndex > endIndex which is a problem so loop should stop
*/