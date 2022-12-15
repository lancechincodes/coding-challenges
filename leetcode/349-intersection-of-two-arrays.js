/*
R: Input - Two int arrays nums1 and num2
Output - Return array of their intersection (unique elements and you may return result in any order)

E: 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

A:
- Initialize hash obj
- Loop through nums1 
    - Add occurrence of element to hash
- Initialize result arr
- Loop through nums2
    - if hash has element
        - push to result arr
- Return result
*/