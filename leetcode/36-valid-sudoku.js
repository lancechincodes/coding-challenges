/*
R: Determine if 9x9 sudoku board is valid
Valid if
- Each row, col, and sub-boxes contains digits 1-9 w/o repetition

E:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

A:
- Check row, col, and sub-boxes with sets 
- Brute force sub-boxes first 
- Alg to optimize sub-boxes
    - let subBoxEl = board[3 * Math.floor(i/3) + Math.floor(j/3)][3 * (i%3) + (j%3)]
*/

// Brute force approach
var isValidSudoku = function(board) {
    let digitsSet

    // check row for unique digits
    for (let i = 0; i < board.length; i++) {
        digitsSet = new Set()
        for (let j = 0; j < board[i].length; j++) {
            if (digitsSet.has(board[i][j])) return false
            if (board[i][j] !== '.') digitsSet.add(board[i][j])
        }
    }

    // check col for unique digits
    for (let i = 0; i < board.length; i++) {
        digitsSet = new Set()
        for (let j = 0; j < board[i].length; j++) {
            if (digitsSet.has(board[j][i])) return false
            if (board[j][i] !== '.') digitsSet.add(board[j][i])
        }
    }

    // check sub-box (0,0) for unique digits
    digitsSet = new Set()
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (digitsSet.has(board[i][j])) return false
            if (board[i][j] !== '.') digitsSet.add(board[i][j])
        }
    }

    // check sub-box (0,1) for unique digits
    digitsSet = new Set()
    for (let i = 0; i < 3; i++) {
        for (let j = 3; j < 6; j++) {
            if (digitsSet.has(board[i][j])) return false
            if (board[i][j] !== '.') digitsSet.add(board[i][j])
        }
    }

    // check sub-box (0,2) for unique digits
    digitsSet = new Set()
    for (let i = 0; i < 3; i++) {
        for (let j = 6; j < 9; j++) {
            if (digitsSet.has(board[i][j])) return false
            if (board[i][j] !== '.') digitsSet.add(board[i][j])
        }
    }

    // check sub-box (1,0) for unique digits
    digitsSet = new Set()
    for (let i = 3; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
            if (digitsSet.has(board[i][j])) return false
            if (board[i][j] !== '.') digitsSet.add(board[i][j])
        }
    }

    // check sub-box (1,1) for unique digits
    digitsSet = new Set()
    for (let i = 3; i < 6; i++) {
        for (let j = 3; j < 6; j++) {
            if (digitsSet.has(board[i][j])) return false
            if (board[i][j] !== '.') digitsSet.add(board[i][j])
        }
    }

    // check sub-box (1,2) for unique digits
    digitsSet = new Set()
    for (let i = 3; i < 6; i++) {
        for (let j = 6; j < 9; j++) {
            if (digitsSet.has(board[i][j])) return false
            if (board[i][j] !== '.') digitsSet.add(board[i][j])
        }
    }

    // check sub-box (2,0) for unique digits
    digitsSet = new Set()
    for (let i = 6; i < 9; i++) {
        for (let j = 0; j < 3; j++) {
            if (digitsSet.has(board[i][j])) return false
            if (board[i][j] !== '.') digitsSet.add(board[i][j])
        }
    }

    // check sub-box (2,1) for unique digits
    digitsSet = new Set()
    for (let i = 6; i < 9; i++) {
        for (let j = 3; j < 6; j++) {
            if (digitsSet.has(board[i][j])) return false
            if (board[i][j] !== '.') digitsSet.add(board[i][j])
        }
    }

    // check sub-box (2,2) for unique digits
    digitsSet = new Set()
    for (let i = 6; i < 9; i++) {
        for (let j = 6; j < 9; j++) {
            if (digitsSet.has(board[i][j])) return false
            if (board[i][j] !== '.') digitsSet.add(board[i][j])
        }
    }

    return true
};

// TC: O(n^2)
// SC: O(n)
var isValidSudoku = function(board) {
    let rowSet, colSet

    // check row AND col for unique digits
    for (let i = 0; i < 9; i++) {
        rowSet = new Set()
        colSet = new Set()
        subBoxSet = new Set()
        for (let j = 0; j < 9; j++) {
            let rowEl = board[i][j]
            let colEl = board[j][i]
            let subBoxEl = board[3 * Math.floor(i/3) + Math.floor(j/3)][3 * (i%3) + (j%3)] // this is the golden ticket but not sure about this line

            if (rowSet.has(rowEl) || colSet.has(colEl) || subBoxSet.has(subBoxEl)) return false

            if (rowEl !== '.') rowSet.add(rowEl)
            if (colEl !== '.') colSet.add(colEl)
            if (subBoxEl !== '.') subBoxSet.add(subBoxEl)
        }
    }

    return true
}