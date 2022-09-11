// R: Input of 2 non-empty LL that represent 2 non-negative integers
// digits are in reverse order
// add the numbers and return LL in reverse order

// E: [1,7,9] [9,3,2] --> [0,1,2,1]

/* A: 1) Traverse through l1 and push values into array
      2) Convert arr into a number (reverse and join)
      3) Repeat steps 1 and 2 for l2     
      // Note: use BigInt to when converting string to numbers
      4) Find sum, convert to string, split, and reverse
      4) Create dummy node and prev reference to dummy
      5) Iterate through length of reversed sum arr
        // convert numbers in arr to be a node
        // append them to LL
      6) Return dummy.next      

*/
// C:
// Time complexity: O(n)
// Space complexity: O(n)
// var addTwoNumbers = function(l1, l2) {
//     let l1Arr = []
//     while(l1) {
//         l1Arr.push(l1.val)
//         l1 = l1.next
//     }
//     let firstNum = BigInt(l1Arr.reverse().join(""))
    
//     let l2Arr = []
//     while(l2) {
//         l2Arr.push(l2.val)
//         l2 = l2.next
//     }
//     let secondNum = BigInt(l2Arr.reverse().join(""))
    
//     let sum = firstNum + secondNum
//     // console.log(sum)
    
//     let reversedSumArr = sum.toString().split("").reverse()
//     // console.log(reversedSumArr)
    
//     let dummy = new ListNode(-Infinity)
//     let prev = dummy;
    
//     for (let i = 0; i < reversedSumArr.length; i++) {
//         let newNode = new ListNode(Number(reversedSumArr[i]))
//         // console.log(newNode)
//         prev.next = newNode
//         prev = prev.next
//     }
    
//     return dummy.next    
// };

// Optimize
// Time complexity: O(n)
// Space complexity: O(1)
const addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(0)
    let current = dummy
    let carry = 0
    let x, y // represent value at lists
    let sum = 0
    while(l1 || l2 || carry !== 0) {
        l1 ? (x = l1.val) : (x = 0)
        l2 ? (y = l2.val) : (y = 0)
        sum = x + y + carry
        carry = Math.floor(sum / 10)
        let newNode = new ListNode(sum % 10)
        current.next = newNode
        current = current.next
        l1 ? l1 = l1.next : null
        l2 ? l2 = l2.next : null
    }
    
    return dummy.next
}
