// R: implement count unique values w/ input of sorted array and counts unique values in arrays
// input accepts negative numbers and will always be sorted 
// output: number of unique numbers

// 2 pointer approach 
// start with a pointer at index 0 (i) and another at index 1 (j)
// if value at pointers are the same, move j down 1
// if value at pointers are different, move i down 1, set i equal to j, and move j down 1
// Stop this process when j reaches end of array (linear time complexity)

// to make this constant space complexity (mutate original array to arrange unique numbers at beginning)
// return the index of i + 1 to account for the length/number of unique values

// Time complexity: O(n) linear (iterate through arr once)
// Space complexity: O(1) constant (only creating primitive datatypes)

function countUniqueValues(arr) {
    // edge case (empty arr)
    if (arr.length === 0) return 0

    let i = 0
    let j = 1
    while (j < arr.length) {
        if (arr[i] ===  arr[j]) j++
        else if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
            j++
        }
    }
    return i + 1
}


// test cases
console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4