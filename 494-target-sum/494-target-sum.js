/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  let dp = {};
  
  function backtrack(i, total) {
    if (i === nums.length) {
      return total === target ? 1 : 0;
    }
    
    if (`${i}*${total}` in dp) {
      return dp[`${i}*${total}`];
    }
    
    dp[`${i}*${total}`] = backtrack(i + 1, total + nums[i]) + backtrack(i + 1, total - nums[i]);
    return dp[`${i}*${total}`];
  }
  
  return backtrack(0, 0);
    
};