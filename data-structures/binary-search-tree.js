class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

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

    
}

const tree = new BinarySearchTree()

// Testing insert method
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(15)
console.log(tree.insert(12))