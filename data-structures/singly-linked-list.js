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

    // pop method
    pop() {
        if (!this.head) return undefined
        let currentNode = this.head
        let previousNode = currentNode

        // traverse LL until you reach tail
        while(currentNode.next) {
            previousNode = currentNode
            currentNode = currentNode.next
        }

        this.tail = previousNode
        previousNode.next = null
        this.length--

        // in the case that LL has a only 1 node left to pop (otherwise the head and tail will remain)
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return currentNode // value of the node removed
    }
}

// Checking push method
const linkedList = new SinglyLinkedList()
linkedList.push(1)
linkedList.push(2)
linkedList.push(3)
console.log(linkedList.push(4))

// Checking pop method
console.log(linkedList.pop())
console.log(linkedList.pop())
console.log(linkedList.pop())
console.log(linkedList.pop())
console.log(linkedList.pop())