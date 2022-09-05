// cold, warm, and hot 
// every second, you can fill 2 cups with different types of water OR 1 cup of any type of water

// R: input of integer array of length 3 where 
//    - amount[0]: cold, amount[1]: warm, amount[2]: hot
// C W H
// output minimum number of seconds needed to fill up all the cups

// E: [2, 3, 2]
// More efficient option is to fill 2 at a time
// Less efficient option is to fill 1
// try to mis-match 
// 1 C 1 W
// 1 C 1 W
// 1 W 1 H
// 1 H

// 4 seconds

// A: goal is to mismatch as much as possible until you cannot 


// Time complexity: O(n)
// Space complexity: O(1)
var fillCups = function(amount) {
    let numCold = amount[0]
    let numWarm = amount[1]
    let numHot = amount[2]
    
    // initialize seconds to be 0
    let minSeconds = 0
    
    // iterate as long as we need to fill up cups
        // check if numCold > 0 && numWarm > 0
            // subtract one from each 
            // add to minSeconds 
        // else if numCold > 0 && numHot > 0
            // subtract one from each
            // add to minSeconds
        // else if numWarm > 0 && numHot > 0 
            // subtract one from each
        // else if numCold > 0
            // subtract one from numCold
            // add to minSeconds 
        // else if numWarm > 0
            // subtract one from numWarm 
            // add to minSeconds 
        // else if numHot > 0
            // subtract one from numHot
            // add to minSeconds
    
    // return minSeconds

    
    while (numCold > 0 || numWarm > 0 || numHot > 0) {
        if (numCold >= numWarm && numWarm >= numHot && numCold !== 0 && numWarm !==0) {
            numCold--
            numWarm--
            minSeconds++
        }
        else if (numCold >= numHot && numHot >= numWarm && numCold !==0 && numHot !==0) {
            numCold--
            numHot--
            minSeconds++
        }
        else if (numWarm >= numHot && numHot >= numCold && numWarm !==0 && numHot !==0) {
            numWarm--
            numHot--
            minSeconds++
        }
        else if (numWarm >= numCold && numCold >= numHot && numWarm !==0 && numCold !==0) {
            numWarm--
            numCold--
            minSeconds++
        }
        else if (numHot >= numCold && numCold >= numWarm && numHot !==0 && numCold !==0) {
            numHot--
            numCold--
            minSeconds++
        }
        else if (numHot >= numWarm && numWarm >= numCold && numHot !==0 && numWarm !==0) {
            numHot--
            numWarm--
            minSeconds++
        }
        else if (numHot > 0) {
            numHot--
            minSeconds++
        }
        else if (numCold > 0) {
            numCold--
            minSeconds++
        }
        else if (numWarm > 0) {
            numWarm--
            minSeconds++
        }
        console.log("Num Cold: ", numCold)
        console.log("Num Warm: ", numWarm)
        console.log("Num Hot: ", numHot)
        console.log('----------------')
    }
    
    
    
    return minSeconds
    
};

// 5 4 4
// 4 3 4 1s
// 3 2 4 2s
// 2 1 4 3s
// 1 0 4 4s
// 0 0 3 5s
// 0 0 2 6s
// 0 0 1 7s
// 0 0 0 8s

// C W H
// 5 4 4 
// 4 4 3 1s
// 3 3 3 2s
// 2 2 3 3s
// 2 1 2 4s
// 1 1 1 5s 
// 0 0 1 6s
// 0 0 0 7s

// C W H
// 3 2 10 


// Trend - fill up aka subtract from the greatest and second greatest num of cups