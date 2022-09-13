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

}

const tree = new BinarySearchTree()

// Testing insert method
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(15)
console.log(tree.insert(12))

// Testing find method
console.log(tree.find(10)) // true
console.log(tree.find(6)) // true
console.log(tree.find(15)) // true
console.log(tree.find(12)) // true
console.log(tree.find(8)) // false
console.log(tree.find(25)) // false