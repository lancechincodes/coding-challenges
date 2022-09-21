/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

/*
R: Input - root of binary tree
Ouput - preorder traversal of nodes values (visit, traverse left, and traverse right)
E: [1,null,2,3] [1,3,2]
A: Create arr to hold values of nodes that are visited
Create preorder traversal helper function
    - push node.val to visited
    - if there is a node left, recursively call with its left node
    - if there is a node right, recursively call with its right node
If root exists, call helper function and pass the root as an arg 
Return visited arr

Walkthrough using example
- traverse(1)
- [1]
- traverse(2)
- [1,2]
- traverse(3)
- [1,2,3]
return [1,3,2]
*/

// Time complexity: O(n) (Every node is visited)
// Space complexity: O(n)
var preorderTraversal = function(root) {    
    let visited = []
    let curr = root
    
    function traverse(node) {
        visited.push(node.val)
        if (node.left) traverse(node.left)
        if (node.right) traverse(node.right)
    }
    
    if (curr) traverse(curr) 
    return visited
};