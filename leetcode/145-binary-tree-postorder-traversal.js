/*
R: Input - root of binary tree
Output - postorder traversal of nodes values (traverse left, traverse right, and visit)
E: [1,null,2,3] [1,3,2]
A: Create arr to hold values of nodes that are visited
Create postorder traversal helper function
    - if there is a node left, recursively call with its left node
    - if there is a node right, recursively call with its right node
    - push node.val to visited
If root exists, call helper function and pass the root as an arg 
Return visited arr

Walkthrough using example
- traverse(1)
- traverse(2)
- traverse(3)
- [3]
- [3,2]
- [3,2,1]
return [3,2,1]
*/

// Time complexity: O(n) (Every node is visited)
// Space complexity: O(n)
var postorderTraversal = function(root) {    
    let visited = []
    let curr = root
    
    function traverse(node) {
        if (node.left) traverse(node.left)
        if (node.right) traverse(node.right)
        visited.push(node.val)
    }
    
    if (curr) traverse(curr) 
    return visited
};