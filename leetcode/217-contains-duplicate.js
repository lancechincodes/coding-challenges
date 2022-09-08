// Time complexity: O(n)
// Space complexity: O(n)
var containsDuplicate = function(nums) {
    let seenObj = {}
    
    for (let num of nums) {
        if (seenObj[num]) {
            return true
        }
        else {
            seenObj[num] = 1
        }
    }
    
    return false
};