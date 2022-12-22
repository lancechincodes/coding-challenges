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

A: 
- Initialize ans array
- Loop through numbers in nums1
    - Initialize seen variable to false
    - Loop through numbers in nums2
        - Check when nums1[i] matches nums2[j]
            - Set seen to be true 
            - Push -1 if at last j index
            - Continue to next j (skip the following if conditional)
        - If seen is true
            - 1) If nums2[j] <= nums1[i] AND j === nums2.length - 1 -> push -1 onto ans
            - 2) Else if nums2[j] > nums1[i] -> push nums2[j] onto ans & break
- Return ans array
*/

// C:
var nextGreaterElement = function(nums1, nums2) {

    const ans = []
    for (let i = 0; i < nums1.length; i++) {
        let seen = false
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                seen = true
                if (j === nums2.length - 1) {
                    ans.push(-1)
                }
                continue;
            }

            if (seen) {
                if (nums2[j] <= nums1[i] && j === nums2.length - 1) ans.push(-1)
                else if (nums2[j] > nums1[i]) {
                    ans.push(nums2[j])
                    break;
                }
                // else, check the next jth element (continue)
            }
        }
    }
    return ans
};