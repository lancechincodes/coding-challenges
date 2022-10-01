/*
R: Input - 2 int arrs (num1 and num2) & 2 ints (m and n)
Task - Merge nums1 and num2 into single arr
Output - Store final arr in nums1 (length of m + n)

E:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1

A: 
2 pointer approach (basically 3 pointers)
start index pointer at end of nums1
start first pointer at index of m - 1 (largest num of values that matters in nums1)
start second pointer at index of n - 1 (largest num of values that matters in nums2)

while (until second pointer reaches beginning) aka no more values to sort
    compare which value is larger between nums1 and nums2
    then populate the nums1[i] with bigger one 
    and decrement the index of the value that you filled in

*/

// TC: O(n + m) -> O(n)
// SC: O(1)
var merge = function(nums1, m, nums2, n) {
    let first = m - 1
    let second = n - 1
    let i = m + n - 1

    while (second >= 0) {
        let fVal = nums1[first]
        let sVal = nums2[second]

        if (fVal > sVal) {
            nums1[i] = fVal
            i--
            first--
        }
        else {
            nums1[i] = sVal
            i--
            second--
        }
    }
};