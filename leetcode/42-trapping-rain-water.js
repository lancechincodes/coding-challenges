/*
R: 
Input - array of heights (non-negative numbers)
Task - calculate trapped rain water using elevation map (the input)
Output - amount of trapped rain water

E: 
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].


Input    | 0 1 0 2 1 0 1 3 2 1 2 1
maxLeft  | 0 0 1 1 2 2 2 2 3 3 3 3 
maxRight | 3 3 3 3 3 3 3 2 2 2 1 0
min(L,R) | 0 0 1 1 2 2 2 2 2 2 1 0

sum      | 0 0 1 0 1 2 1 0 0 1 0 0  -> 6 (ANSWER)

Input: height = [4,2,0,3,2,5]
Output: 9

A: 
- O(n) TC and SC
- Idea to calculate rain water -> trappedWater[i] =  min(L,R) - h[i] where L = max(left side) and R = max(right side)
    - if trappedWater[i] < 0 -> traps 0 water
    - else -> traps x amount of water

- O(n) TC and O(1) SC w/ 2 pointers
*/

// Approach #1
// TC: O(n)
// SC: O(n)
var trap = function(height) {
    let maxLeft = [], maxRight = []
    let minLeftRight = []
    let sum = 0

    // calculate maxLeft at each index
    let maxLeftVal = 0
    for (let i = 0; i < height.length; i++) {
        maxLeft.push(maxLeftVal)
        if (height[i] > maxLeftVal) {
            maxLeftVal = height[i]
        }
    }

    // calculate maxRight at each index
    let maxRightVal = 0
    for (let i = height.length - 1; i >= 0; i--) {
        maxRight.push(maxRightVal)
        if (height[i] > maxRightVal) {
            maxRightVal = height[i]
        }
    }

    // reverse maxRight
    maxRight = maxRight.reverse()

    // calculate min(L,R)
    for (let i = 0; i < height.length; i++) {
        minLeftRight.push(Math.min(maxLeft[i], maxRight[i]))
    }

    // calculate min(L,R) - h[i] and sum to calculate trapped rain water
    for (let i = 0; i < height.length; i++) {
        minLeftRight[i] - height[i] < 0 ? null : sum = sum + minLeftRight[i] - height[i]
    }

    return sum
};

// Optimize memory/space
// Approach #2: 2 pointers
// TC: O(n)
// SC: O(1)
var trap = function(height) {
    let left = 0, right = height.length - 1
    let maxLeft = height[left], maxRight = height[right]
    let sum = 0

    // continue until pointers overlap
    while (left < right) {
        if (maxLeft <= maxRight) {
            left++ // move pointer down 1
            // if difference is negative, update new maxLeft 
            // otherwise, add the difference between maxLeft and height to sum
            maxLeft - height[left] < 0 ? maxLeft = height[left] : sum = sum + maxLeft - height[left]
        }
        else {
            right--
            maxRight - height[right] < 0 ? maxRight = height[right] : sum = sum + maxRight - height[right]
        }
    }
    return sum
};