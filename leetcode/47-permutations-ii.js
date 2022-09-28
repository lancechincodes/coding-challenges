/*
R: 
Input - array of nums with potential duplicates
Output - array of arrs (possible permutations (rearranging nums in different order)) (w/ no repeats)

E: 
Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
 
A:
- Template DFS recursive approach
    - Twist: create hash function before for loop
        - if the number at pointer j has already been seen -> continue onto next iteration
        - set to number at pointer j to seen now and proceed
 
                                1,1,2                                                    i=0
        1,1,2           1,1,2 -> skip recursive call           2,1,1                     i=1
    1,1,2   1,2,1                                  2,1,1  2,1,1 -> skip recursive call   i=2

*/

// Time complexity: O(n! * n)
// Space complexity: O(n! * n)
var permuteUnique = function(nums) {
    // create global result
    let result = []
        
    // dfs recursive helper function 
    const dfs = (i, nums) => {
        // base case
        if (i === nums.length) {
            result.push([...nums])
            return
        }
        
        let hash = {}
        for (let j = i; j < nums.length; j++) {
            if (hash[nums[j]]) continue // skip over duplicate iterations 
            hash[nums[j]] = true; // semi-colon must be here
            
            // swap value at i and j
            [nums[i], nums[j]] = [nums[j], nums[i]]    
            dfs(i + 1, nums); // semi-colon must be here, i + 1 indicates moving to next level down in BT
            // unswap to go back up tree
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
    
    dfs(0, nums)
    return result
};