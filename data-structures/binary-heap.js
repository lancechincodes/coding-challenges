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

    // remove the root (max in case max binary heap)
    // swap last element into root's position then bubble down
    extractMax() {
        // swap first value with last value
        this.swap(0, this.values.length-1)
        let extractedMax = this.values.pop()

        // bubble down
        this.bubbleDown()
        return extractedMax
    }
    
    bubbleDown() {
        let parentIndex = 0
        let leftChildIndex = 2 * parentIndex + 1
        let rightChildIndex = 2 * parentIndex + 2
        // continue until parent value is larger than right AND left values
        while(this.values[rightChildIndex] > this.values[parentIndex] || this.values[leftChildIndex] > this.values[parentIndex]) {
            // if both left and right values are larger, swap with the largest child
            if (this.values[rightChildIndex] > this.values[parentIndex] && this.values[leftChildIndex] > this.values[parentIndex]) {
                if (this.values[rightChildIndex] > this.values[leftChildIndex]) {
                    this.swap(parentIndex, rightChildIndex)
                    parentIndex = rightChildIndex
                }
                else {
                    this.swap(parentIndex, leftChildIndex)
                    parentIndex = leftChildIndex
                }
            }
            // if right value is larger
            else if (this.values[rightChildIndex] > this.values[parentIndex]) {
                this.swap(parentIndex, rightChildIndex)
                parentIndex = rightChildIndex
            }
            // if left value is larger
            else if (this.values[leftChildIndex] > this.values[parentIndex]) {
                this.swap(parentIndex, leftChildIndex)
                parentIndex = leftChildIndex
            }

            leftChildIndex = 2 * parentIndex + 1
            rightChildIndex = 2 * parentIndex + 2
        }
    }

    // helper function for swapping 2 values
    swap(firstIndex, secondIndex) {
        let temp = this.values[firstIndex]
        this.values[firstIndex] = this.values[secondIndex]
        this.values[secondIndex] = temp
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

// Testing extractMax method
console.log(maxBinaryHeap.extractMax()) // 55
console.log(maxBinaryHeap) // [41,39,33,18,27,12]
console.log(maxBinaryHeap.extractMax()) // 41
console.log(maxBinaryHeap) // [39,27,33,18,12]