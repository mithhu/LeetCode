/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxSub = -Infinity;
  let curSum = 0;
  
  for (let num of nums) {
    if (curSum < 0) {
      curSum = 0;
    }
    curSum += num;
    maxSub = Math.max(maxSub, curSum);
  }
  return maxSub;
    
};