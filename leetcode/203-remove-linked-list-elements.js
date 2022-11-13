/*
R: Given head of a LL and int val - remove all nodes of LL whose value is equal to parameter val

E: 
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Input: head = [], val = 1
Output: []

Input: head = [7,7,7,7], val = 7
Output: []

A: 
- Create dummy node
- Set dummy.next pointing to head
- Set prev to be dummy
- Set current node to be head

- While curr exists
    - if curr.val !== val
        - set prev to curr
        - set curr to curr.next
    - else 
        - set prev.next pointing to curr.next
        - set curr to curr.next

- Return dummy.next
*/

// TC: O(n) traversing LL
// SC: O(1) constant
var removeElements = function(head, val) {
    let dummy = new ListNode(-1)
    dummy.next = head
    let prev = dummy
    let curr = head

    while (curr) {
        if (curr.val !== val) {
            prev = curr
            curr = curr.next
        }
        else {
            prev.next = curr.next
            curr = curr.next
        }
    }

    return dummy.next
};