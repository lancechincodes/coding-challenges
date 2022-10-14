/*
R: 
Input - head of sorted LL
Task - delete all nodes that duplicate numbers
Output - return only distinct numbers in sorted LL

E:
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Input: head = [1,1,1,2,3]
Output: [2,3]

A: Prev, curr, and next pointer approach
- create dummy node and set to prev
- set curr to head and next to curr.next
- while curr exists 
    - if curr val and next val are equal
        - while curr val equals next
            - keep moving next
        - pointer prev to next
        - move curr to next
        - move next to its next
    - else curr val and next val are NOT equal
        - move all pointers down
        - update prev, curr, and next (if it exists)

- return dummy.next (ref to prev)
*/

// Time complexity: O(n), only one pass thru list
// Space complexity: O(1)
var deleteDuplicates = function(head) {
    // edge case for empty list
    if (!head) return head

    let dummy = new ListNode(-Infinity, head) // point to head (its next value)
    let prev = dummy
    let curr = head
    let next = curr.next

    while(curr) {
        if (next && curr.val === next.val) {
            // continue moving next until reaches next val is either a different number as curr val or null
            while (next && curr.val === next.val) {
                next = next.next
            }

            prev.next = next // point prev pointer to the distinct number or null
            // increment curr and next
            curr = next
            next = next ? next.next : null // avoid errors by checking if next exists
        }
        // increment everything
        else {
            prev = curr
            curr = next
            next = next ? next.next : null // avoid errors by checking if next exists
        }
    }

    // return reference to dummy
    return dummy.next  
};