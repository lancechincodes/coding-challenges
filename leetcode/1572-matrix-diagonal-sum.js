/*
R: 
Input - square matrix
Task - return the sum of the matrix diagonals excluding elements on the secondary diagonal that are shared with the first diagonal
Output - sum

E:
Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.

Input: mat = [[1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]]
Output: 8

Input: mat = [[5]]
Output: 5

A:
- Initialize primarySum to be 0 & secondarySum to be 0

- for loop (i for row)
    - for loop (j for col)
        - if (i === j) primarySum += element[i][j]
        - else if (i + j === matrix.length - 1) secondarySum += element[i][j]

- return primarySum + secondarySum
*/

// Brute force solution
// TC: O(n^2)
// SC: O(1)
var diagonalSum = function(mat) {
    let primarySum = 0, secondarySum = 0

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (i === j) {
                primarySum += mat[i][j]
            }
            else if (i + j === mat.length - 1) {
                secondarySum += mat[i][j]
            }
        }
    }

    return primarySum + secondarySum
};

// O: 
// Optimize TC
// TC: O(n)
// SC: O(1)
var diagonalSum = function(mat) {
    let sum = 0
    for (let i = 0; i < mat.length; i++) {
        sum = sum + mat[i][i] + mat[i][mat.length - 1 - i]
    }

    // check if you need to subtract overlapping middle square -> odd rows/cols
    if (mat.length % 2 === 1) {
        let middleIndex = Math.floor(mat.length / 2)
        sum -= mat[middleIndex][middleIndex]
    }

    return sum
};