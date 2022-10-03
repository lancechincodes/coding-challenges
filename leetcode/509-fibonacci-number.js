/*
R: Fibonacci - sequence where each number is the sum of the two preceding ones starting at 0 and 1
constraints of input (0 <= n <= 30)

E:
Example 1:
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Example 2:
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

Example 3:
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

A:
1) Recursive
2) Recursive w/ memo
    where memoization is the practice of making sure a function does not run for the same inputs more than once by keeping a record of the results (usually in object)
3) Iterative w/ memo (Dynamic Programming)
4) Iterative w/ swapping

 */

// VERY INEFFICIENT
// 1) Recursive
// TC: O(2^n) exponential
// SC: O(n) space complexity is proportional to the maximum depth of the recursion tree
var fib = function(n) {
    if (n <= 1) return n

    return fib(n-1) + fib(n-2)
};

// MORE EFFICIENT TC BUT TRADE OFF SC
// 2) Recursive w/ memo
// TC: O(n) -> fib(n-2) will be cached so that that the time complexity will reduce to fib(n-1) + cached equation which is O(n) + 1 -> O(n)
// SC: O(n)
let memo = {}
var fib = function(n) {
    if (n <= 1) return n
    if (memo[n]) return memo[n]

    let result = fib(n-1) + fib(n-2)
    memo[n] = result
    return result
};

// 3) Iterative w/ memo & DP  (   
// TC: O(n)
// SC: O(n)
var fib = function(n) {
    let memo = [0,1]

    for (let i = 2; i <= n; i++) {
        memo[i] = memo[i-1] + memo[i-2] 
    }

    return memo[n]
}

// MOST EFFICIENT TC & SC
// 4) Iterative w/ swapping (   
// TC: O(n)
// SC: O(1)
var fib = function(n) {
    // start of fib seq (index 0 and 1)
    if (n === 0) return 0
    if (n === 1) return 1 

    // index 2 and beyond
    let prevprev = 0
    let prev = 1
    let curr
    for (let i = 2; i <= n; i++) {
        curr = prevprev + prev
        prevprev = prev
        prev = curr
    }

    return curr
};