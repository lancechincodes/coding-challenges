/*
R: Input - root of binary tree and int targetSum
Output - return true if the root to leaf sums up to targetSum
    - return false otherwise

E:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.

Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.

Edge case
Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.

A: 
- Create dfs helper
    - if no root, return false
    - if at leaf level (no root.left and no root.right)
        - return boolean of target - root.val === 0
    - if not at leaf
        - return boolean of dfs(root.left, target - root.val) OR dfs(root.right, target - root.val)
*/

// Time complexity: O(n), one pass through every node
// Space complexity: O(n), recursive call stack levels (height of tree) (assume worse-case unbalanced tree)
var hasPathSum = function(root, targetSum) {

    const dfs = (root, target) => {
        // if no root, it cannot equal a target sum
        if (!root) return false

        // if no left AND right node, then you have reached the leaf
        if (!root.left && !root.right) {
            return target - root.val === 0
        }

        // if not a leaf, recursive call to the left and right and subtract from target sum respectively
        return dfs(root.left, target - root.val) || dfs(root.right, target - root.val)
    }

    return dfs(root, targetSum)
}