// R: Input of arr of ints (nums), and a Number (k)
// finds MAX window in arr corresponding to length of Number

// E: [1, 3, 4, 6] k = 2 --> // 10
// [] k = 2 // null
// edge case --> if k > nums.length return null

// A: sliding window --> time complexity of O(n) and space complexity of O(1)
// edge case first
// 1) First for loop - set initial max sum (go from 0 to k)
// 2) Set temp sum = max sum
// 3) Second for loop - updating temp sum = temp sum - left edge + right edge of window 
//  left edge = nums[k - i] and right edge = nums[i]
// 4) Within second loop, set max to be max of either previous max or tempsum
// return max

// Time complexity: O(n)
// Space complexity: O(1)
function maxSubarraySum(nums, k){
  // add whatever parameters you deem necessary - good luck!
  if (k > nums.length) return null
  
  let maxSum = 0
  for (let i = 0; i < k; i++) {
      maxSum += nums[i]
  }
  
  let tempSum = maxSum
  for (let i = k; i < nums.length; i++) {
      tempSum = tempSum - nums[i - k] + nums[i]
      maxSum = Math.max(tempSum, maxSum)
  }
  
  return maxSum
}