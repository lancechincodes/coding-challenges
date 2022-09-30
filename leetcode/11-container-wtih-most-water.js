/*
R: 
Input arr of heights (dividers)
Output max area that form container with x-axis as the width and input as the heights

E: [5,4,2,2] // Between 5 and 4, maxArea = 4, between 5 and 2, maxArea = 4, between 5 and 1, maxArea = 8
maxArea = 8

// A: 2 pointer approach (1 at the beginning and 1 at the end)
// while (pointers don't cross)
// set max area to be min height between the 2 borders * x-distance between pointers
// move the pointer that has the smaller height over and keep larger height to maximize potential area
// outside of loop, return max area
*/

// Time complexity: O(n) each element is visited at least once
// Space complexity: O(1) only creating new primitive data types
var maxArea = function(height) {
    let left = 0 
    let right = height.length - 1
    let maxArea = 0
    let tempArea
    let minHeight, width
    while (left < right) {
        minHeight = Math.min(height[left], height[right])
        width = right - left
        tempArea = minHeight * width
        if (tempArea > maxArea) maxArea = tempArea
        
        if (height[left] >= height[right]) right--
        else left++
    }
    
    return maxArea
};

// 2 pointer approach (one at beg and one at end) 
// Same sol, just another go at the problem
// TC: O(n)
// SC: O(1)
var maxArea = function(height) {

    let maxArea = 0, currArea = 0
    let i = 0, j = height.length - 1
    let currWidth, currHeight
    while (i < j) {
        currWidth = j - i
        currHeight = Math.min(height[i], height[j])
        currArea = currWidth * currHeight
        maxArea = Math.max(currArea, maxArea)

        if (height[i] >= height[j]) {
            j--
        }
        else {
            i++
        }
    }

    return maxArea
};