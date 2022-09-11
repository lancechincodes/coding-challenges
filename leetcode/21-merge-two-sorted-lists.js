// R: Input of heads of 2 sorted linked lists (list1 and list2)
// Output of two lists in 1 sorted lists

// E: [1,2,4], [1,3,4]
// [1, 1, 2, 3, 4, 4]

// A: 1) Create a dummy node BEFORE head (defined at anything since its next will be returned, NOT its value) and create previous pointer that references dummy 
// 2) Iterate until list1 or list2 is null
// 3) Check if list1.val is <= list2.val
// if so, point prev to list1, set prev to list1, and move list1 to next node
// 4) Else
// point prev to list2, set prev to list2, and move list2 to next node
// 5) Outside loop, point prev to remainder of either list1 or list2
// 6) Return dummy.next (what dummy points to)

// Time complexity: O(n), while loop
// Space complexity: O(1), only creating dummy and prev variables
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(-Infinity)
    let prev = dummy
    
    while(list1 && list2) {
        if (list1.val <= list2.val) {
            prev.next = list1
            prev = list1
            list1 = list1.next
        }
        else if (list1.val > list2.val) {
            prev.next = list2
            prev = list2
            list2 = list2.next   
        }
    }
    
    if (!list1) prev.next = list2
    if (!list2) prev.next = list1
    
    return dummy.next
};