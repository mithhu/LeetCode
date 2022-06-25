/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let curSum = 0;
  let maxSum = -Infinity;
  
  for (let num of nums) {
    if (curSum < 0) {
      curSum = 0;
    }
    curSum += num;
    maxSum = Math.max(curSum, maxSum);
  }
  
  return maxSum;
    
};