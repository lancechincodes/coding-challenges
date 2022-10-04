/*
R: Input - root of BT
Task - check if it is a mirror of itself (aka symmetric)
Output - boolean

E:
Input: root = [1,2,2,3,4,4,3]
Output: true

                        1
            2                       2
    3              4           4            3

A:
Creating a separate function that essentially makes another copy of the tree so that its easier to compare the two 

Base conditions
if t1 and t2 dont exist (reach leafs of both) -> return true
if t1 OR t2 doesnt exist but not both -> return false

return true if the following the 3 checks go through
1) value is same at the node 
2) t1 left and t2 right are same 
3) t1 right and t2 left are same 
*/

// TC: O(n) visit each node once
// SC: O(n) depth of call stack
var isSymmetric = function(root) {

    const isMirror = (t1, t2) => {
        if (!t1 && !t2) return true
        if (!t1 || !t2) return false

        return t1.val === t2.val && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)
    }

    return isMirror(root, root)
};