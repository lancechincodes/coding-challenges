// R: Given 2 positive numbers, find out if the numbers have the same frequency of digits 
// same numbers and occur same number of time 
// output: boolean

// E: 
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// A: Frequency counter with object
// edge cases: if no arguments, return false
// convert numbers to strings
// initialize empty objects
// if the length of the 2 numbers is different, return false
// loop through 1st string (number), set digits as keys in obj and frequency as values
// in separate loop, do the same with the 2nd string
// in separate loop, loop through 1st string again
    // check that obj2 has the same keys as obj1, return false if not
    // check that obj2 at the same key as obj1 has the same frequency too, return false if not
// return true if it makes pass these checks

// Time complexity: O(n)
// Space complexity: O(n) creating objects to store n digits
function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    if (arguments.length === 0) {
        return false
    }

    let numStr1 = num1.toString()
    let numStr2 = num2.toString()

    let obj1 = {}
    let obj2 = {}
    
    if (numStr1.length !== numStr2.length) {
        return false;
    }

    for (let i = 0; i < numStr1.length; i++) {
        obj1[numStr1[i]] = (obj1[numStr1[i]] || 0) + 1
    }

    for (let i = 0; i < numStr2.length; i++) {
        obj2[numStr2[i]] = (obj2[numStr2[i]] || 0) + 1
    }
    
    for (let i = 0; i < numStr1.length; i++) {
        // does object 2 have the same keys as object one (if not --> return false)
        if (!obj2[numStr1[i]]) {
            return false
        }
        // does the key show up the same amount of times in object 2 than in object 1
        if (obj1[numStr1[i]] !== obj2[numStr1[i]]) {
            return false
        }
    }
    return true
  }