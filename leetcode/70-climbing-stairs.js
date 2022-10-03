/*
R: Input - number of steps to reach the top
Output - number of distinct combinations

E: Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

A: Template DFS recursive

target = 3
                                0
               1                              2                             2
    11              12*                 21*          12*                    4
111*   112 X      

*/

// Solution is too slow
// Worst case: (backtracking will reduce complexity)
// Time complexity: O(2^n)
// Space complexity: O(2^n) -> call stack memory
var climbStairs = function(n) {
    // create global count
    let count = 0

    // recursive dfs helper
    const dfs = (target) => {
        // backtracking case
        if (target < 0) return

        // base case
        if (target === 0) {
            count++
            return
        }

        // recursive case
        // Route 1: Subtract 1 step from target
        dfs(target - 1)
        // Route 2: Subtract 2 steps from target
        dfs(target - 2)
    }

    dfs(n)
    return count
};

// Significant optimization
// Alt solution - dynamic programming
// Use base cases to solve for future iterations
// constraints = 1 <= n <= 45
// n = 1 -> sol = 1
// n = 2 -> sol = 2 
// n = 3 -> sol = 3

// TC: O(n)
// SC: O(n)
var climbStairs = function(n) {
    // n = 0 not in range so memo[0] can be set to 1
    // n = 1 is 1 so memo[1] = 1
    let memo = [1,1]
    // the loop will set memo[2] and beyond (aka 2 stairs and beyond)
    for (let i = 2; i <= n; i++) {
        memo[i] = memo[i-1] + memo[i-2]
    }

    return memo[n]
}