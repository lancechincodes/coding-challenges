/*
R: Input - Array
Output - Return all permutations (aka unique arrays with nums) in 1 array

E: 
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

A:
Conceptual approach
Use recursive dfs template
Start i and j pointer on index 0 -> swap i&j -> move j pointer down -> swap i&j
    continue until j reaches end of nums
Move to next level (move i pointer down) and repeat swap process

Coding approach 
- create global result arr
- create dfs recursive function
    - base case: when i reaches leaf level (bottom)
        - add copy of mutated nums to result
        - exit function by returning
    - otherwise
        - iterate through j=i till j reaches end of nums
        - swap values at i and j
        - recursive call with i moved down
        - reswap i and j to go back up tree
- call dfs recursive function
- return result

                        1,2,3
        1,2,3           2,1,3             3,2,1
   1,2,3   1,3,2     2,1,3   2,3,1      3,2,1. 3,1,2
*/

// Time complexity: O(n! * n) factorial (1 less combination as you go down each level) times leaf level (scan n)
// Space complexity: O(n! * n) creating factorial result times height of tree (n)
var permute = function(nums) {
    // create global result
    const result = []
    
    // dfs helper recursive function
    const dfs = (i, nums) => {
        // at leaf level (base case)
        if (i === nums.length) {
            result.push([...nums]) // copy of nums
            return
        }
        
        for (let j = i; j < nums.length; j++) {
            // swap value at i and j
            [nums[i], nums[j]] = [nums[j], nums[i]]
            dfs(i + 1, nums); // the semi-colon is NEEDED here to tell js that line is ending
            // unswap as you go back up tree
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
    
    dfs(0, nums)    
    return result
};