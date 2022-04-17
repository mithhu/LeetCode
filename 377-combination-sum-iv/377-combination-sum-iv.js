/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  let dp = Array(target + 1).fill(0);
  dp[0] = 1;
  
  for (let i = 1; i < target + 1; i++) {
    for (let n of nums) {
      if (i - n >= 0) {
        dp[i] = dp[i] + dp[i - n];
      }
    }
  }
  
  return dp[target];
    
};