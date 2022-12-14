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
- Initialize hash1 obj
- Loop through nums1 
    - Add # of occurrences of element to hash1
- Initialize hash2 obj
- Initialize result arr
- Loop through nums2
    - Add # of occurrences of element to hash1
    - if hash1 has element AND element has only been seen once in hash2
        - push to result arr
- Return result arr
*/

// C: Solution #1
// TC: O(n + m) where n is # of elements in nums1 and m is # of elements in nums2
// SC: O(n + m) where n is # of elements in nums1 and m is # of elements in nums2
var intersection = function(nums1, nums2) {
    const hash1 = {}
    for (el of nums1) {
        // if first time being seen, set occurrence count to 1
        // otherwise, set occurrence count to increment by 1
        !hash1[el] ? hash1[el] = 1 : hash1[el]++
    }

    const hash2 = {}
    const result = []
    for (el of nums2) {
        !hash2[el] ? hash2[el] = 1 : hash2[el]++
        // if element was seen in nums1 AND is the first time being seen in nums1
        if (hash1[el] && hash2[el] === 1) result.push(el)
    }

    return result
};

// O: Optimized Solution #2: Goal is to only use 1 hashmap to optiize SC
// TC: O(n + m) where n is # of elements in nums1 and m is # of elements in nums2
// SC: O(n) where n is # of elements in nums1
var intersection = function(nums1, nums2) {
    const map = new Map()
    for (let el of nums1) {
        // ignore duplicate elements
        if (!map.has(el)) {
            map.set(el, 1)
        }
    }

    // .filter will filter out elements in nums2 that return true
    return nums2.filter(el => {
        if (map.has(el)) {
            map.delete(el) // delete from the map to avoid duplicate elements
            return true
        }
        else {
            return false
        }
    })
}