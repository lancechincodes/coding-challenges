/*
R: 
Input - head of a sorted linked list
Task - delete all duplicates such that each element appears once once
Output - the non-duplicate sorted linked list

E:
Input: head = [1,1,2]
Output: [1,2]

Input: head = [1,1,2,3,3]
Output: [1,2,3]

A:
- Edge case: if no head, return the empty LL

- Initialize current (at head) and next pointers (at head.next) 
- While (next is not null) 
    - Check if current and next pointer vals are not equal
        - move curr and next pointers down
    - Check if current and next pointer vals are equal
        - move next pointer down
        - pointer current's pointer to the new next

- Return head (of the sorted non-duplicate LL)  
*/

// Time complexity: O(n). visit each node
// Space complexity: O(1), only primitive datatypes
var deleteDuplicates = function(head) {
    // if empty LL, just return it
    if (!head) return head

    let curr = head
    let next = curr.next
    // while next is not null
    while(next) {
        // if current val is NOT next val --> continue curr and next pointer
        if (curr.val !== next.val) {
            curr = curr.next
            next = next.next
        }
        // if duplicate --> continue next pointer and adjust current pointer to point to the new next
        else {
            next = next.next
            curr.next = next
        }
    }

    return head
};