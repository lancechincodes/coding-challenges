// R: given an array of ints, move 0s to the end while maintaining relative order of non-zero elements

// E: [0, 0, 1, 0, 3, 12]
// output: [1, 3, 12, 0, 0, 0]

// A: 2 pointers
// Define 1st pointer at index 0 (i) and 2nd pointer at index 1 (j)

// while j is less than the length of nums (iterate through entire arr)
    // check if values need to be switched (point 1 is 0 and pointer 2 is non-zero)
        // if so, switch values and iterate to next pointers
    // else if values are both 0 
        // only move up second pointer
    // else (cases wheres values do NOT need to be switched)
        // move up both pointers

// return the array

// Time complexity: O(n) linear iterating through array one time
// Space complexity: O(1) not creating a copy of the array nor a new array

var moveZeroes = function(nums) {
        
    let i = 0
    let j = 1
    
    while (j < nums.length) {
        if (nums[i] === 0 && nums[j] !== 0) { // cases where pointer 1 is 0 and pointer 2 is not 0, switch and move both pointers
            nums[i] = nums[j]
            nums[j] = 0
            j++
            i++
        }
        else if (nums[i] === 0 && nums[j] === 0) { // cases where pointers' values are 0, only move second pointer
            j++
        }
        else { // cases where both pointers are NOT 0 or cases where pointer 1 is not zero and pointer 2 is 0, move both pointers
            i++
            j++
        }
    }
    
    return nums
    
};