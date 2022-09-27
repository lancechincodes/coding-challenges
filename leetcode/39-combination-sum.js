/*
R: 
Input - distinct int arr and target int
Output - return combinations of ints in arr that add up to target (arr of combo arrs

E: 
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

A:
- Create global result
- Sort candidates from least to greatest
- Define recursive helper
    - if target < 0 return (stop recursion)
    - if target = 0 push slate to result
    - otherwise
        - Loop through j = i to j < candidates' length
            - Push candidates[j] to slate to add candidate
            - Recursive call with j and subtract candidate[j] from target
            - Pop element off slate 
    - Call dfs helper
    - Return result
    
*Idea behind this approach:
- Recursive backtracking dfs
- DFS -> Go down to the leaf level first (2222) and stop when either hits backtracking or base case
    - then remove last element
    - then go back up tree
        - add next element and repeat
        
                                                []
                        2                       3                       5
               22      23      25           33     *35                  55
        222 223 225   *233 235   255        333 335                 
    *2222   2233
    
Call stack walk through
- slate = [2]
- slate = [2,2]
- slate = [2,2,2]
- slate = [2,2,2,2]
- result = [[2,2,2,2]]
- slate = [2,2,2]
- slate = [2,2,2,3] -> hit backtracking case
- slate = [2,2,2,6] -> hit backtracking case
- slate = [2,2,2,7] -> hit backtracking case
- slate = [2,2,2]
- slate = [2,2]
....
    
*/
// Typical for combination problems
// Similar but not exactly to this
// Time complexity: O(2^n * n)  
// Space complexity: O(2^n * n)
var combinationSum = function(candidates, target) {
    // create global result
    let result = []
    
    // sort candidates
    candidates.sort((a, b) => a - b)
    
    // dfs recursive helper
    function dfs(i, candidates, target, slate) {
        // backtracking case
        if (target < 0) return
        
        // base case 
        if (target === 0) {
            result.push([...slate])
            return
        }
        
        // dfs recursive case
        for (let j = i; j < candidates.length; j++) {
            slate.push(candidates[j]) // adding new candidate
            dfs(j, candidates, target - candidates[j], slate)
            slate.pop() // resetting slate
        }
    }

    dfs(0, candidates, target, [])
    return result
};