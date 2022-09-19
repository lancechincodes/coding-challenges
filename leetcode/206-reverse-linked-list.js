// R: Reverse LL
// E: [1,2,3,4] --> [4,3,2,1]
// A: Initialize prev and next pointers
// While head exists
    // Updata next, head.next, prev, and head (in that order)
// Return prev (because it be the new head when the LL is reversed)

// Time complexity: O(n)
// Space complexity: O(1)
var reverseList = function(head) {
    let prev = null
    let next
    while(head) {
        next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
};