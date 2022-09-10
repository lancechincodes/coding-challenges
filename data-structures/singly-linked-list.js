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
        return currentNode // returns node that was removed
    }

    // shift method (remove 1st node)
    shift() {
        if (!this.head) return undefined
        let currentHead = this.head
        this.head = currentHead.next
        this.length--

        // in the case that LL has a only 1 node left to shift (otherwise the head and tail will remain)
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }   

        return currentHead // returns the 1st node that is removed
    }

    // unshift method (add new head to LL)
    unshift(val) {
        const newHead = new Node(val)
        if(!this.head) {
            this.head = newHead
            this.tail = this.head
        }
        else {
            newHead.next = this.head
            this.head = newHead
        }
        this.length++
        return this // returns the entire LL
    }

    // get method (return value at inputted index)
    get(index) {
        if (index < 0 || index >= this.length) return undefined // check if index is valid
        let currentNode = this.head
        let counter = 0
        while(currentNode) {
            if (counter === index) return currentNode // return node at index
            counter++
            currentNode = currentNode.next
        }
    }

    // set method (update value at index)
    set(index, val) {
        let foundNode = this.get(index)
        if(foundNode) {
            foundNode.val = val
            return true
        }
        return false
    }

}

// Checking push method
const linkedList = new SinglyLinkedList()
linkedList.push(1)
linkedList.push(2)
linkedList.push(3)
linkedList.push(4)

// Checking pop method
linkedList.pop()
linkedList.pop()

// Checking shift method
linkedList.shift()

// Checking unshift method
linkedList.unshift(5)
linkedList.unshift(7)

// Checking get method
linkedList.get(0)

// Checking set method
console.log(linkedList.set(2, 3))
