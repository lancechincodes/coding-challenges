class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

// Big O Analysis
// Time complexity
// - Insertion: O(log n)
// - Searching: O(log n)

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    // insert a new node
    insert(val) {
        const newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this
        }
        let currentNode = this.root
        while(true) {
            if (newNode.value === currentNode.value) return undefined
            else if (newNode.value > currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = newNode
                    return this
                }
                currentNode = currentNode.right
            }
            else if (newNode.value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode
                    return this
                }
                currentNode = currentNode.left
            }
        }
    }

    // locate node and return boolean based on if exists or not
    find(val) {
        if (!this.root) return false
        let currentNode = this.root
        while(currentNode) {
            if (val === currentNode.value) return true
            else if (val > currentNode.value) {
                currentNode = currentNode.right
            }
            else if (val < currentNode.value) {
                currentNode = currentNode.left
            }
        }
        return false
    }

    // traverse tree with BFS (one horizontal level at a time)
    breadthFirstSearch() {
        let visited = [] // holds dequeued nodes' values 
        let queue = [] // holds nodes
        let current = this.root
        queue.push(current)
        while(queue.length !== 0) {
            current = queue.shift() // FIFO
            visited.push(current.value)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        return visited
    }

    // traverse tree with DFS Pre-Order w/ recursion (add as you visit and visit entire left side, then right side)
    preOrder() {
        let visited = []
        let current = this.root

        // helper function
        function traverse(node) {
            visited.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }

        traverse(current)
        return visited
    }

    // traverse tree with DFS Pre-Order w/ recursion (don't add to visited until you checked left and right side for nodes)'
    postOrder() {
        let visited = []
        let current = this.root

        // helper function
        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            visited.push(node.value)
        }

        traverse(current)
        return visited
    }


}

const tree = new BinarySearchTree()

// Testing insert method
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(15)
tree.insert(12)
tree.insert(3)
tree.insert(8)
//        10
//    6       15
//  3   8    12

// Testing find method
tree.find(10) // true
tree.find(6) // true
tree.find(15) // true
tree.find(12) // true
tree.find(8) // false
tree.find(25) // false

// Testing breadth first search tree traversal 
console.log(tree.breadthFirstSearch()) // [10,6,15,3,8,12]

// Testing depth first search pre order tree traversal
console.log(tree.preOrder()) // [10,6,3,8,15,12]

// Testing depth first search post order tree traversal
console.log(tree.postOrder()) // [3,8,6,12,15,10]

// Testing depth first search in order tree traversal
console.log(tree.postOrder()) // [3,6,8,10,15,12]

