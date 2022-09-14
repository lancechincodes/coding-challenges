// R: Invert left and right and return root
// E: root = [5, 1, 3] // [5, 3, 1]
// A: Recursive DFS
// 1) Stop condition --> if root is null --> basically return itself or null
// 2) Make temp variable to hold one side of current node and swap
// 3) Call function recursively for left and right side (left call stack first then right call stack)
// 4) Return root (current references it)

// Time complexity: O(n), visit each node once
// Space complexity: O(n), storing nodes in temp
var invertTree = function(root) {
    if (!root) return root
    
    let current = root
    let temp
    
    // swap
    temp = current.left
    current.left = current.right
    current.right = temp
    
    invertTree(current.left)
    invertTree(current.right)
    
    return current
};