/*
R: Input - int array (non-decreasing order = least to greatest)
Task - Remove duplicates in-place (without creating new arr)
Relative order of elements should be kept same
return nums in which 1st section of the arr is the unique sorted nums and the rest is neglible
Assumption - length of nums arr will be >= 1 (no empty input)

E: [1, 3, 5, 5, 5, 6] // [1, 3, 5, 6, _, _]
[1] // [1]

A: 2 pointers
- Pointer 1 (i) on index 0 and pointer 2 (j) on index 1 initially
- While (pointer 2 is not at the end of the array) {
    - if pointers are not equal
        - move pointer 1 up
        - set value at pointer 1 to be value at pointer 2
    - move pointer 2 up
}
- Return k which is the length of the expected answer w/o the 2nd section of the arr which is negligble 
- Custom Judge Function will call function I write below
    int[] nums = [...]; // Input array
    int[] expectedNums = [...]; // The expected answer with correct length

    int k = removeDuplicates(nums); // Calls your implementation

    assert k == expectedNums.length;
    for (int i = 0; i < k; i++) {
        assert nums[i] == expectedNums[i];
    }

*/

// Time complexity: O(n) only iterating through nums once
// Space complexity: O(1) only creating primitive data types
var removeDuplicates = function(nums) {
    let i = 0, j = 1
    while(j < nums.length) {
        if (nums[i] !== nums[j]) {
            i++
            nums[i] = nums[j]
        }
        j++
    }
    
    return i + 1 // + 1 b/c return length of unqiue and sorted numbers in nums
};