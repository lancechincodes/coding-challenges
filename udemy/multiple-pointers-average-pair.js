// R: Given SORTED array of ints and target average
// determine if pair of values in arr has an average that equals target
// if so, return true
// otherwise, return false

// E: averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

// A: 2 pointer approach 
// Define left pointer at index 0 and right pointer at last index
// calculate avg of values at both pointers
// if calculated avg is greater than target
    // move right pointer to the left 
// if calculated avg is less than target
    // move left pointer to the right
// if calculated avg is equal to the target
    // return true
// continue until left pointer > right pointer (crossed paths)
// return false if nothing is returned in while loop

// Time complexity: O(n)
// Space complexity: O(1)
function averagePair(arr, target){
    // add whatever parameters you deem necessary - good luck!
    // edge case
    if (arr.length < 2) return false
    let left = 0
    let right = arr.length - 1
    let avg
    while (left <= right) {
        avg = (arr[left] + arr[right]) / 2
        if (avg === target) {
            return true
        }
        else if (avg > target) {
            right--
        }
        else if (avg < target) {
            left++
        }
    }
  return false
    
  }

console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false
console.log(averagePair([1],4)) // false