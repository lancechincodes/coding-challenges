// Main benefit of linked list vs array
// LL has cheap insertion and deletion while arrays have expensive insertion and deletion (need to re-index)

// Defining singly linked list class
// piece of data - val
// reference to next node - next

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // push method 
    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this // returns entire LL
    }
}

// Checking push method
// const linkedList = new SinglyLinkedList()
// console.log(linkedList.push(1))
// console.log(linkedList.push(2))
// console.log(linkedList.push(3))
// console.log(linkedList.push(4))
