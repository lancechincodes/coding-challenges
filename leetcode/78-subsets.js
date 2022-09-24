/*
R: Input - int arr of unique elements
Output - Arr containing arrs of all subsets

E: nums = [1,2,3]
[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

A: Recursive backtracking DFS
Decision tree between EXCLUDE or INCLUDE
                               []                                depth = 0, elements = 1
              []                              [1]                depth = 1, elements = 2
        []         [2]                [1]           [1,2]        depth = 2, elements = 4
    []     [3]  [2]  [2,3]        [1]    [1,3]  [1,2]  [1,2,3]   depth = 3, elements = 8
    
    elements = 2^n where n = depth
When depth is the length of num (at leafs) --> push copy of the subset into the global result arr
Otherwise backtrack the binary tree

Step-by-step walk through example for [1,2,3]

***CALL STACK*** (1 asterisk means first recursive call, dash means second recursive call, and 2 asterisk means finished)
subsets(nums,0,[],[]) *-*
subsets(nums,1.[],[]) *-*
subsets(nums,2,[],[]) *-*
subsets(nums,3,[],[])
results = [[]]
subset = [3]
subsets(nums,3,[3],[[]])
results = [[],[3]]
subset = []
subset = [2]
subsets(nums,2,[2],[[],[3]]) *-*
subsets(nums,3,[2],[[],[3]])
results = [[],[3],[2]]
subset = [2,3]
subsets(nums,3,[2,3],[[],[3],[2]]
results = [[],[3],[2],[2,3]]
subset = [2]
subset = []
subset = [1]
subsets(nums,1,[1],[[],[3],[2],[2,3]]) *-*
subsets(nums,2,[1],[[],[3],[2],[2,3]]) *-*
subsets(nums,3,[1],[[],[3],[2],[2,3]]) 
results =  [[],[3],[2],[2,3],[1]]
subset = [1,3]
subsets(nums,3,[1,3],[[],[3],[2],[2,3],[1]])
results = [[],[3],[2],[2,3],[1],[1,3]]
subset = [1]
subset = [1,2]
subsets(nums,2,[1,2],[[],[3],[2],[2,3],[1],[1,3]]) *-*
subsets(nums,3,[1,2],[[],[3],[2],[2,3],[1],[1,3]]) 
results = [[],[3],[2],[2,3],[1],[1,3],[1,2]]
subset = [1,2,3]
subsets(nums,3,[1,2,3],[[],[3],[2],[2,3],[1],[1,3],[1,2]])
results = [[],[3],[2],[2,3],[1],[1,3],[1,2],[1,2,3]]
subset = [1,2]
subset = [1]
subset = []
*/

// Time complexity: O(n^2 * n) 2 choices at each level 2^n where n = depth * scan of n elements of leaf element
// Space complexity: O(n^2 * n) height of tree n * result space 2^n
var subsets = function(nums, depth = 0, subset = [], results = []) {
    
    // at leaf level
    if (depth === nums.length) {
        results.push([...subset])
    }
    else {
        // exclude
        subsets(nums, depth + 1, subset, results)
        // include
        subset.push(nums[depth])
        subsets(nums, depth + 1, subset, results)
        subset.pop()
    }
    return results
};