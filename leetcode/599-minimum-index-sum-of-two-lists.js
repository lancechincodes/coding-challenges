// R: list1 and list2 (arrays of strings)
// common string = in list1 and list2
// returning the common string that has the least index sum
// assumptions: all strings in both lists are unique

// E: list1 = ["hello", "hi", "hey"] list2 = ["yo", "howdy", "hi", "hey"] --> return ["hey"]

// A: psuedocoding (hashmap)

// Time complexity: O(n)
// Space complexity: O(n)

var findRestaurant = function(list1, list2) {
    // create a variable to store leastIndexSum
    // initialize as infinity
    
    // initialize result arr to be empty
    
    // initalize list1 obj to be empty
    
    // iterate through first list 
        // assign first list words to keys in obj with its index as the value
    
    // iterate through second list 
        // check if second list words match keys in obj
            // if index of second list + value of key in hashmap <= leastIndexSum
                // set leastIndexSum = index of second list + value of key in hashmap
    
    // iterate through second list again
        // check if index of second list + value of key in hashmap === leastIndexSum
            // push onto result arr
    
    // return result arr 
    
    let leastIndexSum = Infinity
    let resultArr = []
    let list1Obj = {}
    
    for (let i = 0; i < list1.length; i++) {
        list1Obj[list1[i]] = i
    }
    
    
    for (let i = 0; i < list2.length; i++) {
        if (list1Obj[list2[i]] >= 0) { // counts 0 as false
            if (i + list1Obj[list2[i]] <= leastIndexSum) {
                leastIndexSum = i + list1Obj[list2[i]]
            }
        }
    } 
    
    for (let i = 0; i < list2.length; i++) {
        if (i + list1Obj[list2[i]] === leastIndexSum) {
            resultArr.push(list2[i])
        }
    }
    
    return resultArr;
    
};


// test walkthrough
// happy: 0
// sad: 1,
// good: 2


// Match
// sad - yes 0 + 1 = 1 --> leastIndexSum = 1
// happy - yes 1 + 0 = 1 --> leastIndexSum = 1