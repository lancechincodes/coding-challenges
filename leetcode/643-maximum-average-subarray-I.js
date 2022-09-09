// R: given array of ints, and integer k
// E: [1, 3 , 2, 5, 6, 8], k = 3
// output: (5+6+8)/3 = 6.333
// A: Sliding window: consecutive "window"
    // 1) calc initial max total with loop
    // 2) separate loop through array and subtract left border of window and add right border of window (start at index of length of window)
    // 3) compare to previously set max total and update if necessary (Math.max) 
    // 4) calculate and return max avg by dividing max total by k

// maxTotal will get you the maxAvg

// Time complexity: O(n) - iterating through nums multiple times but not nested
// Space complexity: O(1) - only primitive datatypes created

var findMaxAverage = function(nums, k) {
    let maxTotal = 0
    let maxAvg
    for (let i = 0; i < k; i++) {
        maxTotal += nums[i]
    }
    
    let tempTotal = maxTotal
    // start i at length of window (at new value)
    for (let i = k; i < nums.length; i++) {
        tempTotal = tempTotal - nums[i - k] + nums[i]
        maxTotal = Math.max(maxTotal, tempTotal)
    }
    return maxTotal / k
};