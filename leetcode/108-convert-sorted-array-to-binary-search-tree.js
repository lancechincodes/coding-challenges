// R: Input int arr nums (sorted from least to greatest)
// Convert to height balanced binary search tree
// height-balance BST = depth of the two subtrees of every node differs by more than one
// Output root of BST
// Constraint: strictly increasing (no duplicates)

// E: [-5,0,5] // [0,-5,5] DFS pre order

// A: Recursive approach
// Stopping condition - nums length is 0
// find middle index and set root to be node at middle index's val
// recursively set root.left and root.right to the portion left and right of middle
// when call stack finishes, return root

// Time complexity: O(n) visit each node
// Space complexity: O(h) height of tree 
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null
    
    let middleIndex = Math.floor(nums.length / 2)
    let root = new TreeNode(nums[middleIndex])
    
    root.left = sortedArrayToBST(nums.slice(0, middleIndex))
    root.right = sortedArrayToBST(nums.slice(middleIndex+1))
    
    return root
};