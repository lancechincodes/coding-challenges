// Stack - LIFO (Last in first out)
// Can be implemented multiple ways
// 1) Array - index is not needed in stack, only ORDER so LL could also accomplish this
// 2) Linked list

// *****************************************************************************************

// 1) Implementation w/ Array
// a) Push & Pop: O(1) TC
// Better option than 1b
const stack = []
stack.push("google") // 1
stack.push("instagram") // 2
stack.push("youtube") // 3

stack // ["google", "instagram", "youtube"]

stack.pop() // "youtube"
stack.pop() // "instagram"

// b) Unshift & Shift: O(n) TC
// Inefficient time complexity -> re-index all elements when using shift

// add to beg of the array
const newStack = []
newStack.unshift("hello") // 1
newStack.unshift("world") // 2
newStack.unshift("!") // 3'

newStack // ["!", "world", "hello"]

// remove from beg of the array
newStack.shift() // "!"
newStack.shift() // "world"

// *****************************************************************************************

// 2) Implementation w/ Linked List




