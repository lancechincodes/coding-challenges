/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/*
R: 
Input - array of numbers and target number
Task - find all unique combinations where candidates numbers sum to target
    - each number in candidates must only be used once in the combination
Output - combinations (arr of arrs)

E: 
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[[1,1,6],[1,2,5],[1,7],[2,6]]

A:
Recursive DFS template w/ tree
- start with nothing, split into different 
- after first branch, we only want to go i+1
*/

// Time complexity: O(2^n * n)
// Space complexity: O(2^n * n)
var combinationSum2 = function(candidates, target) {
    // create global result
    let result = []

    // create global hash
    let hash = {}

    // sort candidates
    candidates = candidates.sort()

    // dfs recursive approach
    const dfs = (i, target, combo) => {
        // backtracking case
        if (target < 0) {
            return
        }

        // base case
        if (target === 0) {
            result.push([...combo])
            return
        }

        // recursive case
        for (let j = i; j < candidates.length; j++) {
            if (i !== j && candidates[j] === candidates[j - 1]) continue; // to avoid going down duplicate combos routes
            combo.push(candidates[j])
            dfs(j+1, target - candidates[j], combo)
            combo.pop()
        }
    }

    dfs(0, target, [])

    return result

    // Doesn't pass extreme SC test cases

    // let hash = {}
    // for (let combo of result) {
    //     combo.sort()
    // }

    // for (let combo of result) {
    //     hash[combo] ? null : hash[combo] = combo
    // }

    // return Object.values(hash) 
};