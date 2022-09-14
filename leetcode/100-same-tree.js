// R: Input is two roots of binary trees
// Def of binary tree is that each node has at most 2 children
// Output boolean depending on if they are equal structurally AND by value

// E: p = [1,2,3] , q = [1,2,3] // true
// p = [1,2] (left child), q = [1,null,3] (right child) // false

// A: 
// Recursive function
// 1) Stopping condition if p AND q are null --> return true 
// 2) if p is null or q is null (given that p and q are not both null) or p's val is not equal q's val --> return false
// 3) return recursive call or IST(left) AND IST(right)

// Time complexity: O(n) visit every node
// Space complexity: O(h) height of tallest tree (within call stack)
var isSameTree = function(p, q) {
    if (!p && !q) return true
    
    if (!p || !q || p.val !== q.val) return false
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
           
};