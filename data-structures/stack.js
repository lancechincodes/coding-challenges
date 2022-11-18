// Stack - LIFO (Last in first out)
// Can be implemented multiple ways
// 1) Array - index is not needed in stack, only ORDER so LL could also accomplish this (only need add and remove methods)
    // Easier and more convenient to use in real-life use case
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

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    // a) Push & Pop: O(1) TC
    // technically adding new node to the beginning of the LL (basically unshift but naming it push)
    push(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        }
        else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }

    // technically removing node at the beginning of the LL (basically shift but naming it pop) -> not constant time to remove from the end in LL (must traverse)
    pop() {
        // if empty
        if (!this.first) return null
        let temp = this.first
        // if only 1 element
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        // return removed element value
        return temp.value
    }
}



