/*
R:
Input - m x n matrix
Output - Boolean if matrix is toeplitz
Toeplitz = every diagonal from top-left to bottom-right has the same elements

E:
Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
Output: true
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.

Input: matrix = [[1,2],[2,2]]
Output: false
Explanation:
The diagonal "[1, 2]" has different elements.

A:
- Calculate number of rows
- Calculate number of cols
- Nested for loop that go until one less than rows and cols
    - check if the current element in the matrix is NOT equal to its adjacent diagonal (matrix[i+1][j+!])
        - return false if condition is met
- return true if makes if through nested for loops
*/

// TC: O(n * m)
// SC: O(1)
var isToeplitzMatrix = function(matrix) {
    let numRows = matrix.length
    let numCols = matrix[0].length

    for (let i = 0; i < numRows - 1; i++) {
        for (let j = 0; j < numCols - 1; j++) {
            if (matrix[i][j] !== matrix[i+1][j+1]) return false
        }
    }

    return true
};