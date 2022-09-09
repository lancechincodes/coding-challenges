// R: input of variable number of arguments, checks if there are duplicates among arguments that are passed in
// E: 
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 

// A: Solve using frequency counter OR multiple pointers
// Frequency counter 
// Time complexity: O(n)
// Space complexity: O(n)
// Pro: faster
// Con: takes more space
// function areThereDuplicates(...args) {
//     let obj = {}
//     for (let element of args) {
//         if (!obj[element]) {
//             obj[element] = 1
//         }
//         else if (obj[element]) {
//             return true
//         }
//     }
//     return false
// }

// 2 pointers
// Time complexity: O(log(n)) must sort input
// Space complexity: O(1)
// Pro: save space
// Con: takes longer
// function areThereDuplicates(...args) {
//     // sort input (depending on ifs an array of numbers or strings)
//     if (typeof args[0] === 'number') {
//         args.sort((a,b) => a - b)
//     }
//     else if (typeof args[0] === 'string') {
//         args.sort()
//     }

//     let i = 0
//     let j = 1
//     while (j < args.length) {
//         if (args[i] === args[j]) {
//             return true
//         }
//         i++
//         j++
//     }
//     return false
// }

// Third way to solve is with Set
function areThereDuplicates(...args) {
    const unique = new Set(args)
    if (unique.size === args.length) return false // if lengths are equal that means there are NO duplicates since sets only keep 1 element of same value
    return true
}

console.log(areThereDuplicates(3, 2, 7)) // false
console.log(areThereDuplicates(8, 2, 8)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 
