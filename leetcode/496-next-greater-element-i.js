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
// TC: O(n * m) where n is # of elements in nums1 and m is # of elements in nums2
// SC: O(n) where n is equivalent to the length of nums1.length
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

// O: Goal is to find O(nums1.length + nums2.length) TC sol (Stack and map)
// TC: O(n + m) where n is the nums1.length and m is the nums2.length
// SC: O(a + b) where a is the number of next greater element key-value pairs and b is the number of elements in the stack
var nextGreaterElement = function(nums1, nums2) {
	const map = {};
	const stack = [];
    
    console.log('nums1:', nums1);
    console.log('nums2:', nums2);
	
	// For every n in nums2, fill the stack starting at n, and ending with (but not pushing) the first number in nums2 (after n) that is > n (since all numbers are unique)
	// Once a number is found that passes this condition, add it to a hashmap as a value, with its key being the top of the stack (aka a value found earlier in nums2)
	// This map has the "next largest element below it in nums2" as keys, and the "next greater elements" as the values

    // Goal of this is to fill in the map with the key/value pairs of the next greatest element in nums2 
	nums2.forEach(n => {
        console.log('n:', n);
        
        // while stack is not empty and last value at stack is less than the next number
		while (stack.length > 0 && stack[stack.length - 1] < n) {
            // add the key of the last value at the stack with its corresponding matched next number and pop last top element in stack
			map[stack.pop()] = n;
            console.log('map:', map);
		}
        // the number in the stack is the target element that we are looking for its potential next greater element
		stack.push(n);
        
        console.log('stack:', stack);
	});
	
    // if the key for a number in nums1 does not exist in the map, it does not have a next greater element and thus it is given a -1 at that position in the ans array
	return nums1.map(n => map[n] || -1);
};