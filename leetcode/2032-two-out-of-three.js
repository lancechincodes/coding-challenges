/*
R:
Input - 3 int arrays
Output - arr containing values that are present in at least 2 of the 3 arrs

E:
Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
Output: [3,2]
Explanation: The values that are present in at least two arrays are:
- 3, in all three arrays.
- 2, in nums1 and nums2.

Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
Output: [2,3,1]
Explanation: The values that are present in at least two arrays are:
- 2, in nums2 and nums3.
- 3, in nums1 and nums2.
- 1, in nums1 and nums3.

Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
Output: []
Explanation: No value is present in at least two arrays.

A: 
- Create empty hash
- Loop through first nums1 arr
    - if not in hash, set hash value to 1 (seen 1 time)
- Create set 
- Loop through second nums2 arr
    - if not in hash, set hash value to 1 AND add to number to set (to avoid adding occurences in same arr)
    - else if was already seen 1 time in the first arr and NOT in the nums2 set
        - add to occurences of number in hash
- Loop through third nums3 arr
    - if already in hash, increment occurence 
- Final for loop to push keys in hash that have two or more occurences 
- Return result arr
*/

// Time complexity: O(n1 + n2 + n3) where n1, n2, and n3 are length of each respective array
// Space complexity: O(n + m) where n is memory of hash and m is memory of set
var twoOutOfThree = function(nums1, nums2, nums3) {
    let hash = {}

    for (let number of nums1) {
        if (!hash[number]) {
            hash[number] = 1
        }
    }

    let set = new Set()
    for (let number of nums2) {
        if (!hash[number]) {
            hash[number] = 1
            set.add(number)
        }
        else if (hash[number] === 1 && !set.has(number)) {
            hash[number]++
        }
    }

    for (let number of nums3) {
        if (hash[number] === 1) {
            hash[number]++
        }
    }

    let result = []
    for (let key in hash) {
        if (hash[key] >= 2) {
            result.push(key)
        }
    }

    return result   
};