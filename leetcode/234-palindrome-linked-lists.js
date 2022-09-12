// R: Input - head of singly linked list (numbers 0 - 9)
// return true if palindrome and false otherwise
// palindrome - is a number (in this case) that is written and read the same forwards and backwards

// E: [3,3,6,3,3] // true
// [1,2,3] // false

// A: 1) Create reverse LL helper function
// 2) Use 2 pointer technique from Floyd's Alg (fast and slow pointer)
// 3) Iterate until fast reaches end of list (moves every 2 two while slow moves every 1)
// 4) Reverse slow (at midpoint)
// 5) Iterate through length (how long it took to reach midpoint)
//    - return false if the opposite ends don't equal each other
//    - move them simultaneously and check until length becomes 0
// 6) return true if it makes this far

// C: 
// Time complexity: O(n)
// Space complexity: O(1), changing list in space
// Helper function
const reverse = head => {
    let cur = head
    let prev = null
    let next 
    while(cur) {
        next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
}

var isPalindrome = function(head) {
    let fast = head
    let slow = head
    let start = head
    let length = 0
    
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        length++ //about half of LL's total length
    } 
    
    let endToMid = reverse(slow)
    while(length) {
        length--
        if (endToMid.val !== start.val) return false
        endToMid = endToMid.next
        start = start.next
    }
    return true
};