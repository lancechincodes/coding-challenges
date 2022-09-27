/*
R: 
Input - arr of nums
Output - arr of arrs of possible subsets with no duplicates

E: 
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

A: 
- Recursive dfs template to compute ALL subsets (including duplicates)
- Create hash to store unique combos
- Return hash's values (Object.values(hash))
*/

// Time complexity: O(2^n * n)
// Space complexity: O(2^n * n)
var subsetsWithDup = function(nums) {
    // create global result
    let result = []
    
    // sort nums
    nums = nums.sort((a,b) => a - b)
    
    // recursive dfs helper
    const dfs = (i, nums, subset) => {        
        // base case
        if (i === nums.length) {
            result.push([...subset])
            return
        }
        
        // exclude
        dfs(i + 1, nums, subset)
        
        // include
        subset.push(nums[i])
        dfs(i + 1, nums, subset)
        subset.pop()
    }
    
    dfs(0, nums, [])
    
    // create hash to filter duplicate combos (only an extra O(n) TC & SC) 
    // relatively negligible 
    let hash = {}
    for (let combo of result) {
        if (hash[combo]) continue // 'continue' breaks out of current iteration and moves to the next
        hash[combo] = combo // only unseen combos will be added to the hash
    }
    
    return Object.values(hash) // returning the values of the distinct combos
};