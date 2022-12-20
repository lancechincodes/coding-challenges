/*
R:
Input - 2 int arrays nums1 and nums2
Output - array ans of length nums1.length such that ans[i] is the next greater element
    - 1) Find index j such that nums1[i] === nums2[j]
    - 2a) Determine next greater element in nums2
    - 2b) If there is no next greater element, then push -1 into ans

Constraints -
    1) All the ints of nums1 appear in nums2
    2) All ints in nums1 and nums2 are unique respectively

E:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1. 

Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

*/