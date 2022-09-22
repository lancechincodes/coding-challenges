/*
R: Input: rows (levels) in pascals triangle
E: 3 // [[1], [1,1], [1,2,1]]
A: Nested for loop
- Create a new level arr after filling out each level
- Reset index of prev level to start at 0
- Within inner for loop
    - if j = 0 or j is the last element in the level --> just push 1
    - otherwise 
        - calc the sum by adding the left and right "parents" (i represents a level so it will be i - 1)
        - push that sum
        - increment the index of the prev level
- Push level into result which holds all levels
- Return the resulting pascal triangle
*/

// Time complexity: O(n^2)
// Space complexity: O(n)
var generate = function(numRows) {
    let result = []
    for (let i = 0; i < numRows; i++) {
        let level = []
        let indexOfPrevLevel = 0
        for (let j = 0; j <= i; j++) {
            if (j === 0) level.push(1)
            else if (j === i) level.push(1)
            else {
                let sum = result[i-1][indexOfPrevLevel] + result[i-1][indexOfPrevLevel + 1]
                level.push(sum)     
                indexOfPrevLevel++
            }
        }
        result.push(level)
    }
    return result
};