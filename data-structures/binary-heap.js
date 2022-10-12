/* 
Intro to Binary Heaps
- Binary heaps are very similar to binary search trees but with different rules
- Max binary heap: parent nodes are always larger than child nodes
- Min binary heap: parent nodes are always smaller than child nodes

Binary Heap Rules
- Each parent has at most two child nodes --> "binary"
- Either follow max or min heap
- No guaranteed relationship between sibling nodes (nodes on same level of tree)
- Binary heaps are compact as possible --> all the children of each node are as full as they can be
- Left children are filled out first

Use Cases
- Important when implementing priority queues (which are a very common DS)
- Also useful with graph traversal algorithms

Representing a Heap
- As an array/list
- Left child index: 2n + 1
- Right child index: 2n + 2
    - where n is index of parent

- If given opposite (Have index n which the child)
    - Parent index: Math.floor((n-1)/2)

*/

// Implementing max binary heap but min binary heap is similar
class MaxBinaryHeap {
    constructor() {
        this.values = [] // initialize as empty arr
    }

    insert(val) {
        // 1) push the val into values property on the heap
        this.values.push(val)
        // 2) bubble up
        this.bubbleUp()
        return this.values
    }

    // helper function for insert
    bubbleUp() {
        let index = this.values.length - 1
        let parentIndex = Math.floor((index-1) / 2)
        while (this.values[parentIndex] < this.values[index]) {
            // swap values at index and parent index
            let temp = this.values[parentIndex]
            this.values[parentIndex] = this.values[index]
            this.values[index] = temp

            // set new index and parent index
            index = parentIndex
            parentIndex = Math.floor((index-1) / 2)
        }
    }
}

// Testing methods
// Create instance of binary heap
let maxBinaryHeap = new MaxBinaryHeap()
maxBinaryHeap.insert(41)
maxBinaryHeap.insert(39)
maxBinaryHeap.insert(33)
maxBinaryHeap.insert(18)
maxBinaryHeap.insert(27)
maxBinaryHeap.insert(12) // [41,39,33,18,27,12]
/*
            41
        39      33
      18  27   12  
*/

// Testing insert method
maxBinaryHeap.insert(55) // [55,39,41,18,27,12,33]
/*
            55
        39       41
      18  27   12  33
*/
maxBinaryHeap.insert(1) // [55,39,41,18,27,12,33,1]
maxBinaryHeap.insert(45) // [55.45.41.39,27,12,33,1,18]
