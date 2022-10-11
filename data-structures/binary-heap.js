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